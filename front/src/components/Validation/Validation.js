const validation = (userData) => {
const errors = {};

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
errors.email = "El email ingresado no es válido rey/reina"
}
if(!userData.email){ //userData.email.length === ""
errors.email = "debe ingresar un email"
}
if(userData.email.length > 35){
    errors.email = "El email no debe superar los 35 caracteres"
}
if(!/^(?=.*\d).{8,}$/.test(userData.password)){
    errors.password = "La contraseña debe contener al menos un número y contener 8 caracteres"
}
if(userData.password.length < 6 || userData.password.length > 10){
errors.password = "La contraseña debe tener un tamaño entre 6 y 10 caracteres"
}

return errors;
}

export default validation;