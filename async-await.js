/* FUNCION DE FLECHA */
/* let getNombre = () => {
    return 'Nicolas';
};
 */

/* Promise - async */
/* NOTA: CUANDO NO SE CONFIGURA UN ERROR, EN AUTOMATICO
SE GENERA UNO, DEPENDIENDO LO QUE SE VAYA A EJECUTAR */

/* SIN ERROR CONFIGURADO */
/* let getNombre = async() => {
    return 'Nicolas';
}; */

/* CON ERROR CONFIGURADO */
/* let getNombre = async() => {

    throw new Error('No existe un nombre para el usuario');
    return 'Nicolas';
};
 */
/* OTRAS CONFIGURACIONES */
let getNombre = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Nicolas');
        }, 3000);
    });
    // throw new Error('No existe un nombre para el usuario');
    // return 'Nicolas';

};

/* PARA EJECUTAR EL AWAIT ES NECESARIO TENER UN ASYNC,
NOTA: TENER CUIDADO YA QUE SI LA FUNCION NO ESTA RETORNANDO ALGO
SE QUEDARA CONGELADO Y NUNCA PASARA ALGO */
let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

/* Promise - Normal */
/* let getNombreNormal = () => {
    return new Promise((resolve, reject) => {
        resolve('Nicolas');
    });
}; */

// console.log(getNombre());
// console.log(getNombreNormal());
getNombre().then(nombre => {
    console.log(`el nombres es ${nombre}`);
}).catch(err => {
    console.log(`ERROR EN LA CONSULTA, ${err}`);
});


saludo().then(saludo => {
    console.log(`el saludo es ${saludo}`);
}).catch(err => {
    console.log(`ERROR EN LA CONSULTA, ${err}`);
});