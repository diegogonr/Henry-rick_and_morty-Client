

const validation = (userData) =>{

    const errors= {};

    if(!/\S+@\S+\.\S+/.test(userData.email)) {               //rejex para verificar
        errors.email = "Email incorrecto"
    }
    if (!userData.email) {
        errors.email = "Email no puede estar vacio"
    }
    if (userData.email.length>35){
        errors.email = "Email no debe ser mayor a 35"
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password="Password debe ser mayor a 1 caracter"
    }

    if(userData.password.length<6 || userData.password.length>10){
        errors.password="Longitud del Password incorrecta"
    }
    

    return errors;
}

export default validation;