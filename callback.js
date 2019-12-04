/* CALLBACK - FUNCION NORMAL */
setTimeout(function() {
    console.log("Hola mundo");
}, 3000);


/* CALLBACK - FUNCION FLECHA */
setTimeout(() => {
    console.log("Hola mundo");
}, 3000);


/* CALLBACK: CADA VEZ QUE SE GENERA UN CALLBACK 
SE VA A EJECUTAR LA SENTENCIA NO IMPORTA SI ES CLONADA
SIEMPRE APARECERA Y ESO PUEDE GENERAR CONFUCIONES ASI 
QUE HAY TENER CUIDADO */

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Nicolas',
        id: id
    };

    /* CONTROLAR LOS ERRORES */
    if (id === 20) {
        callback(`EL USUARIO ${id}, NO EXISTE EN LA BASE DE DATOS`);
    } else {
        /* LLAMAR A LA FUNCION - RETORNAR LO DE LA BD */
        /* CUANDO SE CONTROLAN LOS ERRORES SIEMPRE SE PONE VACIO 
        COMO IDENTIFICADOR DE QUE SI EXISTE ALGO */
        callback(null, usuario);
    }

};

/* EL PRIMER PARAMETRO DE UN CALLBACK SIEMPRE DEBE DE SER UN ERROR */
getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('USUARIO DE LA BASE DE DATOS', usuario);
});