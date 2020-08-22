// Script con la base de datos de DyCODE.

db.usuarios.insert([ 
    {
        _idProyecto: ObjectId(),
        nombre: 'Diana',
        apellido: 'Sánchez',
        correo: 'diana@gmail.com',
        plan: 'FREE',
        proyectos: [
            {
                _idProyecto: ObjectId(),
                nombreProyecto: 'Plataforma Facebook',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Facebook',
                carpetas: [ 
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'CSS-FACEBOOK',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-index-facebook.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-login-facebook.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-registro-facebook.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'JS-FACEBOOK',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Facebook',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-index-facebook.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-login-facebook.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-registro-facebook.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'HTML-FACEBOOK',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Facebook',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'index-facebook.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'login-facebook.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'registro-facebook.html',
                                contenido: '',
                            }
                        ]
                    },

                ]
            }, 
            {
                _idProyecto: ObjectId(),
                nombreProyecto: 'Plataforma Amazon',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Amazon',
                carpetas: [ 
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'CSS-AMAZON',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-index-amazon.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-login-amazon.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-registro-amazon.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'JS-AMAZON',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto AMAZON',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-index-amazon.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-login-amazon.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-registro-amazon.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'HTML-AMAZON',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Amazon',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'index-amazon.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'login-amazon.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'registro-amazon.html',
                                contenido: '',
                            }
                        ]
                    },

                ] 
            }, 
            {
                _idProyecto: ObjectId(),
                nombreProyecto: 'Plataforma Youtube',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Youtube',
                carpetas: [ 
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'CSS-YOUTUBE',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-index-youtube.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-login-youtube.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-registro-youtube.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'JS-YOUTUBE',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Youtube',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-index-youtube.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-login-youtube.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-registro-youtube.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'HTML-YOUTUBE',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Youtube',
                        archivos: [
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'index-youtube.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'login-youtube.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'registro-youtube.html',
                                contenido: '',
                            }
                        ]
                    },

                ]
            }, 
            {
                _idProyecto: ObjectId(),
                nombreProyecto: 'Plataforma Yahoo',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Yahoo',
                carpetas: [ 
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'CSS-YAHOO',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-index-yahoo.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-login-yahoo.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-registro-yahoo.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'JS-YAHOO',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Yahoo',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-index-yahoo.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-login-yahoo.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-registro-yahoo.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'HTML-YAHOO',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Yahoo',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'index-yahoo.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'login-yahoo.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'registro-yahoo.html',
                                contenido: '',
                            }
                        ]
                    },

                ] 
            }, 
            {
                _idProyecto: ObjectId(),
                nombreProyecto: 'Plataforma Zoom',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Zoom',
                carpetas: [ 
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'CSS-ZOOM',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-index-zoom.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-login-zoom.css',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'estilos-registro-zoom.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'JS-ZOOM',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Zoom',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-index-zoom.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-login-zoom.js',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'controlador-registro-zoom.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        _idCarpeta: ObjectId(),
                        nombreCarpeta: 'HTML-ZOOM',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Zoom',
                        archivos: [ 
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'index-zoom.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'login-zoom.html',
                                contenido: '',
                            },
                            {
                                _idArchivo: ObjectId(),
                                nombreArchivo: 'registro-zoom.html',
                                contenido: '',
                            }
                        ]
                    },

                ] 
            } 
        ]
    } 

])