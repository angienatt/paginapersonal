function iniciarSesion(){
    var user = Usuario.value;
    var pass = Contrasena.value;
    var validacion;
    if(user=="angisita"){
        if (pass=="12345"){
            validacion="ingreso correcto";
        }
        else {
        validacion="contraseña incorrecta"
        }
    }
    else {
    validacion= "credenciales incorrectas";

}
return validacion;
}