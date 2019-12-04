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

/* CALLBACK BUSCAR EMPLEADO*/
let getEmpleado = (id, callback) => {
    /* BUSCAR UN EMPLEADO*/
    /* FUNCION DE FLECHA DE UNA SOLA LINEA */
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    /* FUNCION DE FLECHA COMPLETA */
    // let empleadoDB = empleados.find(empleado => {
    //     return empleado.id === id;
    // });

    // console.log(empleadoDB);

    if (!empleadoDB) {
        callback(`NO EXISTE UN EMPLEADO CON EL ID: ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

/* CALLBACK BUSCAR UN SALARIO */

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => {
        return salario.id == empleado.id;
    });

    if (!salarioDB) {
        callback(`NO EXISTE SALARIO CON EL ID: ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

/* LLAMAR A LAS FUNCIONES CON CALLBACKS */
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    // console.log(empleado);

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(
            `EL SALARIO DE ${resp.nombre} ES DE $${resp.salario}, DEL ID: ${resp.id}`
        );
    });
});