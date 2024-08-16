function LoginMandatory(){
    let nombre = document.getElementById('nombrechito').value;
    let apellido = document.getElementById('lastName').value;
    let usuario = document.getElementById('username').value;
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;

    alert(`Su Informacion es la siguiente:\n
    Su nombres es ${nombre}\n
    Su apellido es ${apellido}\n
    Su Nombre De usuario es: ${usuario}\n
    Su Email es: ${correo}\n
    Su Contraseña es: ${contraseña}\n`);

}

function ModoOscuro() {
    let label_toggle = document.getElementById('label_toggle');
    
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains("dark") ==true){
        label_toggle.innerHTML='<i class="bi bi-brightness-high-fill"></i>'
        label_toggle.style.color=":yellow";
    }else{
        label_toggle.innerHTML='<i class="bi bi-moon-fill"></i>'
        label_toggle.style.color=":black";
    }
}

function activarClase(){
    document.body.classList.toggle('blue');
}
    