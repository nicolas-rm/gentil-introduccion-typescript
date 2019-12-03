/* DESTRUCTURACION: ES LA DECLARACION DE VARIABLES
DE UNA MANERA ESPECIFICA CUANDO LOS DATOS ESTAN DENTRO DE UN 
OBEJETO O UN ARREGLO, LOS DATOS DE UNA FUNCION ETC.... */

/* CODIGO 1 */

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
            return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
        }
        // getNombre() {
        //     return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
        // }
};

// console.log(deadpool.getNombre());

/* SACAR LOS VALORES DEL ARREGLO INDIVIDUALMENTE */
/* MANERA NORMAL */

let nombreNomral = deadpool.nombre;
let apellidoNomral = deadpool.apellido;
let poderNomral = deadpool.poder;

/* SACAR LOS VALORES DEL ARREGLO */
/* DESTRUCTURACION */


/* DECLARACION NORMAL */
// let { nombre, apellido, poder } = deadpool;

/* DECLARACION RENOMBRAMIENTO */
let { nombre: PrimerNombre, apellido, poder } = deadpool;


console.log(PrimerNombre, apellido, poder);