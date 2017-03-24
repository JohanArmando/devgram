var yo = require('yo-yo');
var landing = require('../landing');
const box = yo`<div class="col s12 m7">
                            <div class="row signup-box">
                                <h1 class="devgram">
                                    DevGram
                                </h1>
                                <form action="" class="signup-form">
                                    <h2>Registrate para ver las fotos de los mejores programadores.</h2>
                                    <div class="section">
                                        <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesion Con Facebook</a>
                                        <a href="" class="btn btn-fb hide-on-med-and-up">
                                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        <input type="email" name="email" placeholder="Correo electrònico">
                                        <input type="text" name="name" placeholder="Nombre Completo">
                                        <input type="text" name="username" placeholder="Nombre de usuario">
                                        <input type="password" name="username" placeholder="Contraseña">
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                                    </div>
                                </form>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                                </div>
                            </div>
                        </div>`;
module.exports = landing(box);