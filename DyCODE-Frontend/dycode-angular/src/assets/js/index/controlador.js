// Función para renderizar el contenido existente en los tres tipos de editores
function update(){
    var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
    idoc.write(editor.getValue());
    idoc.write('<style>'+editor2.getValue()+'</style>');
    idoc.write('<scri'+'pt>'+editor3.getValue()+'</scri'+'pt>');
	idoc.close();
}

// Función para establecer los valores de los tres tipos de editores

function setupEditor(){
  // Configuración para el editor en el que se ingresará código html.
window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/dracula");
  editor.session.setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
  <html>
  <head>
  </head>  
  <body>
  </body>  
  </html>`,1);
  
// Configuración para el editor en el que se ingresará código css.
window.editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/dracula");
    editor2.session.setMode("ace/mode/css");  
  
// Configuración para el editor en el que se ingresará código html.
window.editor3 = ace.edit("editor3");
    editor3.setTheme("ace/theme/dracula");
    editor3.session.setMode("ace/mode/javascript");

    
}
setupEditor();
update();







