// Script con la base de datos de DyCODE.

var usuarios = [ // Inicio del arreglo que contiene a todos los usuarios registrados en la plataforma.
    {
        codigoUsuario: 1,
        nombre: 'Diana',
        apellido: 'Sánchez',
        correo: 'diana@gmail.com',
        plan: 'FREE',
        proyectos: [ // Arreglo que contiene todos los proyectos creados por el usuario
            {
                codigoProyecto: 1,
                nombreProyecto: 'Plataforma Facebook',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Facebook',
                carpetas: [ // Arreglo que contiene las carpetas existentes en cada proyecto del usuario.
                    {
                        codigoCarpeta: 1,
                        nombreCarpeta: 'CSS-FACEBOOK',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'estilos-index-facebook.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'estilos-login-facebook.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'estilos-registro-facebook.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 2,
                        nombreCarpeta: 'JS-FACEBOOK',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Facebook',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'controlador-index-facebook.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'controlador-login-facebook.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'controlador-registro-facebook.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 3,
                        nombreCarpeta: 'HTML-FACEBOOK',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Facebook',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'index-facebook.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'login-facebook.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'registro-facebook.html',
                                contenido: '',
                            }
                        ]
                    },

                ] // Fin del arreglo de las carpetas del proyecto.
            }, // Fin del proyecto 1
            {
                codigoProyecto: 2,
                nombreProyecto: 'Plataforma Amazon',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Amazon',
                carpetas: [ // Arreglo que contiene las carpetas existentes en cada proyecto del usuario.
                    {
                        codigoCarpeta: 1,
                        nombreCarpeta: 'CSS-AMAZON',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'estilos-index-amazon.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'estilos-login-amazon.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'estilos-registro-amazon.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 2,
                        nombreCarpeta: 'JS-AMAZON',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto AMAZON',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'controlador-index-amazon.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'controlador-login-amazon.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'controlador-registro-amazon.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 3,
                        nombreCarpeta: 'HTML-AMAZON',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Amazon',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'index-amazon.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'login-amazon.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'registro-amazon.html',
                                contenido: '',
                            }
                        ]
                    },

                ] // Fin del arreglo de las carpetas del proyecto.
            }, // Fin del proyecto 2
            {
                codigoProyecto: 3,
                nombreProyecto: 'Plataforma Youtube',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Youtube',
                carpetas: [ // Arreglo que contiene las carpetas existentes en cada proyecto del usuario.
                    {
                        codigoCarpeta: 1,
                        nombreCarpeta: 'CSS-YOUTUBE',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'estilos-index-youtube.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'estilos-login-youtube.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'estilos-registro-youtube.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 2,
                        nombreCarpeta: 'JS-YOUTUBE',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Youtube',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'controlador-index-youtube.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'controlador-login-youtube.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'controlador-registro-youtube.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 3,
                        nombreCarpeta: 'HTML-YOUTUBE',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Youtube',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'index-youtube.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'login-youtube.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'registro-youtube.html',
                                contenido: '',
                            }
                        ]
                    },

                ] // Fin del arreglo de las carpetas del proyecto.
            }, // Fin del proyecto 3
            {
                codigoProyecto: 4,
                nombreProyecto: 'Plataforma Yahoo',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Yahoo',
                carpetas: [ // Arreglo que contiene las carpetas existentes en cada proyecto del usuario.
                    {
                        codigoCarpeta: 1,
                        nombreCarpeta: 'CSS-YAHOO',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'estilos-index-yahoo.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'estilos-login-yahoo.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'estilos-registro-yahoo.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 2,
                        nombreCarpeta: 'JS-YAHOO',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Yahoo',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'controlador-index-yahoo.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'controlador-login-yahoo.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'controlador-registro-yahoo.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 3,
                        nombreCarpeta: 'HTML-YAHOO',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Yahoo',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'index-yahoo.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'login-yahoo.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'registro-yahoo.html',
                                contenido: '',
                            }
                        ]
                    },

                ] // Fin del arreglo de las carpetas del proyecto.
            }, // Fin del proyecto 4
            {
                codigoProyecto: 5,
                nombreProyecto: 'Plataforma Zoom',
                descripcionProyecto: 'Proyecto de clase que simula el funcionamiento de la plataforma Zoom',
                carpetas: [ // Arreglo que contiene las carpetas existentes en cada proyecto del usuario.
                    {
                        codigoCarpeta: 1,
                        nombreCarpeta: 'CSS-ZOOM',
                        descripcionCarpeta: 'Carpeta que contiene los archivos de mis estilos del proyecto',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'estilos-index-zoom.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'estilos-login-zoom.css',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'estilos-registro-zoom.css',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 2,
                        nombreCarpeta: 'JS-ZOOM',
                        descripcionCarpeta: 'Carpeta que contiene los controladores del proyecto Zoom',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'controlador-index-zoom.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'controlador-login-zoom.js',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'controlador-registro-zoom.js',
                                contenido: '',
                            }
                        ]
                    },
                    {
                        codigoCarpeta: 3,
                        nombreCarpeta: 'HTML-ZOOM',
                        descripcionCarpeta: 'Carpeta que contiene los archivos html del proyecto Zoom',
                        archivos: [ // Archivos existentes en cada carpeta.
                            {
                                codigoArchivo:1,
                                nombreArchivo: 'index-zoom.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:2,
                                nombreArchivo: 'login-zoom.html',
                                contenido: '',
                            },
                            {
                                codigoArchivo:3,
                                nombreArchivo: 'registro-zoom.html',
                                contenido: '',
                            }
                        ]
                    },

                ] // Fin del arreglo de las carpetas del proyecto.
            } // Fin del proyecto 5
        ] // Fin del arreglo que contiene todos los proyectos creados por el usuario
    } // Fin del usuario 1

]