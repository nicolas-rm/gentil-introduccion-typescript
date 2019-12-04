/* BASE DE DATOS POR OBJETOS - ARREGLO */
let empleados = [{
        id: 1,
        nombre: "Nicolas"
    },
    {
        id: 2,
        nombre: "Patricia"
    },
    {
        id: 3,
        nombre: "Juan"
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = (id, callback) => {

    /* DECLARACION DE UNA PROMESA */
    /* UNA PROMESA TIENE DOS CALLBACK ,UNO resolve, reject */
    /* resolve : si la promesa es exitosa*/
    /* reject : si la promesa no es exitosa*/
    return new Promise((resolve, reject) => {

        /* BUSCAR UN EMPLEADO*/
        /* FUNCION DE FLECHA DE UNA SOLA LINEA */
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        /* FUNCION DE FLECHA COMPLETA */
        // let empleadoDB = empleados.find(empleado => {
        //     return empleado.id === id;
        // });

        // console.log(empleadoDB);

        if (!empleadoDB) {
            reject(`NO EXISTE UN EMPLEADO CON EL ID: ${id}`);
        } else {
            /* CON RESOLVE NO SE PUEDEN ENVIAR MAS DE UN DATO, AL MENOS QUE SEA UNA ARREGLO */
            resolve(empleadoDB);
        }
    });
};


let getSalario = (empleado, callback) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => {
            return salario.id == empleado.id;
        });

        if (!salarioDB) {
            reject(`NO EXISTE SALARIO PARA: ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};


// getEmpleado(10).then(empleado => {
//     /* PROMESA NECESARIA */
//     return getSalario(empleado);

//     /* PARA PODER TENER ESE THEN, ES NECESARIO TENER UNA PROMESA */
// }).then(resp => {
//     console.log(
//         `EL SALARIO DE ${resp.nombre} ES DE $${resp.salario}, DEL ID: ${resp.id}`
//     );
// }).catch(err => {
//     console.log(err);
// });


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    // console.log(`EMPLEADO Y SALARIO OBTENIDO ${salario.nombre}`);
    return `El empleado ${salario.nombre} Tiene un salario de: $${salario.salario}`;
};

getInformacion(4).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});