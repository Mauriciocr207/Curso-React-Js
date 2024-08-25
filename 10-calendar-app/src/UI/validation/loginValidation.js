const loginValidation = {
    email: [
        (value) => {
            const email = value.trim();

            if( !email.includes("@") || email.length <= 1 ) {
                return false;
            }

            return true;
        },
        "El email debe contener al menos un @"
    ],
    pass: [
        (value) => value.trim().length > 5,
        "La contraseña debe ser mayor a 5 caracteres"
    ]
}

export default loginValidation;