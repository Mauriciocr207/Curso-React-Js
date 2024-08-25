import loginValidation from "./loginValidation";

const registerValidation = {
    ...loginValidation,
    name: [
        (value) => value.trim().length > 0,
        "El nombre no puede estar vacío"
    ],
    confirmPass: [
        (value, formState) => { 
            const { pass } = formState;
            return value === pass;
        },
        "La confirmación de contraseña es incorrecta"
    ]
}

export default registerValidation;