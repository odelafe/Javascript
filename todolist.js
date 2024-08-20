window.onload = iniciar;
var listado = [];

function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)
    
}

function clickBtnAgregar(){
    var txtTarea = document.getElementById("txtAgregar");
    var tarea = txtTarea.value; 
    listado.push(tarea);
    mostrarTareas();

}

function mostrarTareas(){
    var listaTaeas = document.getElementById("listado");
    var html = "";
    for (var tarea of listado)
        html += tarea + "<br/>"; 
    
    listaTaeas.innerHTML = html;
}