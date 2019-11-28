/* VIDEO 3 */

/* ----------------- CODIGO 1 ----------------- */


/* 
function saludar(nombre) {
    console.log("Hola " + nombre);
}

var wolverine = {
    nombre: "Logan"
};

saludar(wolverine); 
*/

/* imprime Hola Object Object */

/* 
*
*
EXPLICACION: SE LE ESTA ENVIANDO UN ONJECTO SIN ESPECIFICAR
Y LO QUE ESTA DE PARAMETRO ES SOLAMENTE UNA BARIABLE DE TIPO TEXTO
(STRING) 
*
*
*/

/* EXTENSION ARCHIVOS: ANTES ERA JS -> PASO A TS */

/* ----------------- CODIGO 2 ----------------- */

/* 
function saludar(nombre: string) {
    console.log("Hola " + nombre);
}


var wolverine = {
    nombre: "Logan"
};

saludar(wolverine.nombre);
 */

/*
*
*
COMANDOS: tsc app.ts -> ESTE COMANDO CREA DE
UN ARCHIVO TS -> JS = TRADUCE TODO EL CODIGO, BUSCA
ERRORES Y LOS MARCA
*
*
*/

/* VIDEO 4 */

/* ----------------- CODIGO 1 ----------------- */

function saludar(nombre: string) {
    console.log("Hola " + nombre.toUpperCase());
}

/* OBJETO */
var wolverine = {
    nombre: "Logan"
};

saludar(wolverine.nombre);

/*
*
*
COMANDOS: tsc app.ts -w -> ESTE COMANDO CREA DE
UN ARCHIVO TS -> JS = TRADUCE TODO EL CODIGO, BUSCA
ERRORES Y LOS MARCA, DE MANERA AUTOMATICA A LA HORA DE GUARDAR
*
*
*/