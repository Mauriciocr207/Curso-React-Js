/**
 * Functions
 */

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = nombre => `Hola, ${nombre}`;

console.log(saludar('Mauricio'))
console.log(saludar2('Mauricio'))

const getUser = () => ({
    uuid: "ABDsnja2",
    username: 'Mau'
})

const user = getUser();
console.log(user);

const getUsuarioActivo = nombre => ({
    uuid: 'ASNDAS',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);