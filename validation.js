let nombres = document.getElementById("nombres");
let apellidos = document.getElementById("apellidos");
let numeroDocumento = document.getElementById("numeroDocumento");
let numeroCelular = document.getElementById("numeroCelular");
let contrasena = document.getElementById("contrasena");
let repcontrasena = document.getElementById("confirmarcontrasena");
let form = document.getElementById("formulario");
let p = document.getElementById("alertas");
let mail = document.getElementById("mail");
let labelContrasena = document.getElementById("labelContrasena");

form.addEventListener("submit", e => {
    e.preventDefault();
    limpiarForm();
    let alertas = "";
    let entrar = false;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    p.innerHTML = "";

    if(!regexEmail.test(mail.value)){
        alertas += `formato de email no válido <br>`;
        entrar = true;
    }
    if(contrasena.value.length < 8){
        alertas += `Mínimo 8 caracteres <br>`;
        entrar = true;
    }
    if(contrasena.value.trim() != repcontrasena.value.trim()){
        alertas += `Contraseñas no coinciden <br>`;
        entrar = true;
    }
    if(entrar){
        labelContrasena.innerHTML = alertas;
    }else{
        p.innerHTML = "Datos enviados con éxito!";
    }
})

function limpiarForm(){
    nombres.innerHTML = "";
    apellidos.innerHTML = "";
    numeroDocumento.innerHTML = "";
    numeroCelular.innerHTML = "";
    mail.innerHTML = "";
    contrasena.innerHTML = "";
    repcontrasena.innerHTML = "";
}

