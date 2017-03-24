var gulp =  require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
const wachify = require('watchify');

gulp.task('styles' , function () {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
});

gulp.task('assets' , function () {
    gulp
        .src('assets/**/*')
        .pipe(gulp.dest('public'));
});

function compile(watch)  {
    var bundle = wachify(browserify('./src/index.js'));

    function  rebundle() {
        bundle
            .transform(babelify)
            .bundle()
            .on('error' , (error) => {
                console.log(error)
            })
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'));
    }

    if (watch){
        bundle.on('update' , () => {
            console.log('--> Bunling ...');
            rebundle();
        })
    }

    rebundle();
}

gulp.task('build' , () => { compile() });
gulp.task('watch' , () => { compile(true) });

gulp.task('default' , ['styles' , 'assets'  , 'build']);