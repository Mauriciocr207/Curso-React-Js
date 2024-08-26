const registerValidations = {
    displayName: [
        (value) => value.length > 0,
        "El nombre no puede estar vacío"
    ],
    email: [
        (value) => value.includes("@"),
        "El correo deebe contener un @"
    ],
    password: [
        (value) => value.length >= 6,
        "La contraseña debe tener al menos 6 caracteres"
    ],
}

export default registerValidations;