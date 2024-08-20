window.onload = iniciar;

function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){

    var txtPeso = document.getElementById("txtPeso").value;
    var txtAltura = document.getElementById("txtAltura").value;
    var imc = txtPeso / (txtAltura * txtAltura);
    alert("El IMC es: " + Math.round(imc));
}