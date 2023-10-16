let mailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");
let formLogin = document.querySelector(".formLogin");
let response = document.getElementById("responseValidation");

formLogin.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let enviar = false;
    let regexEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    response.innerHTML = "";

    if(!regexEmailValidation.test(mailLogin.value)){
        warnings += `formato de email no válido <br>`;
        enviar = true;
    }
    if(passwordLogin.value.length < 8){
        warnings += `Mínimo 8 caracteres <br>`;
        enviar = true;
    }    
    if(enviar){
        response.innerHTML = warnings;
    }
})