// Funciones aparte para cada una de las 4 operaciones matimaticas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    }
    return "Error: Division por cero";
}

//Revision con isNaN de los valores ingresados para asegurar que son numéricos
function ejecutarOperaciones() {
    const entrada1 = prompt("Ingrese el primer número:");
    const entrada2 = prompt("Ingrese el segundo número:");

    const num1 = parseFloat(entrada1);
    const num2 = parseFloat(entrada2);

    if (isNaN(num1)) {
        console.log("El primer valor no es numérico.");
        return;
    }
    if (isNaN(num2)) {
        console.log("El segundo valor no es numérico.");
        return;
    }

    const operacion = prompt("Escoja operación: suma, resta, multiplicacion o division");
    let resultado;
    //Dependiendo de la opcion, llama a las funciones matemáticas
    switch (operacion.toLowerCase()) {
        case "suma": {
            resultado = sumar(num1, num2);
            break;
        }
        case "resta": {
            resultado = restar(num1, num2);
            break;
        }
        case "multiplicacion": {
            resultado = multiplicar(num1, num2);
            break;
        }
        case "division": {
            resultado = dividir(num1, num2);
            break;
        }
        default: {
            console.log("Operación no válida.");
            return;
        }
    }
    console.log("Resultado: " + resultado);
}

//Arreglo de objeto "inventario", con varios televisores
const inventario = [
    {
        marca: "Hi-sense",
        tamano: 24,
        tipo: "LED",
        stock: true,
        precio: 200000
    },
    {
        marca: "Xiaomi",
        tamano: 32,
        tipo: "LED",
        stock: true,
        precio: 220000
    },
    {
        marca: "TCL",
        tamano: 24,
        tipo: "LED",
        stock: false,
        precio: 120000
    },
    {
        marca: "Samsung",
        tamano: 48,
        tipo: "LCD",
        stock: true,
        precio: 350000
    },
    {
        marca: "LG",
        tamano: 56,
        tipo: "OLED",
        stock: false,
        precio: 400000
    }
];

//Lista el arreglo usando forEach, pero solo mostrando marca y precio, dejando a tv
//como la variable que recibe 1 a 1 cada tv del objeto "inventario"
function listarArreglos() {
    console.log("--- CATÁLOGO COMPLETO (MARCA Y PRECIO) ---");
    inventario.forEach(function (tv) {
        console.log("Marca: " + tv.marca + " | Precio: $" + tv.precio);
    });
}

//Funcion que muestra caracteristicas totales del objeto inventario, mas la posicion
//de cada tv dentro del arreglo de objetos
function listarTodasCaracteristicas() {
    console.log("CATÁLOGO COMPLETO (TODAS LAS CARACTERÍSTICAS)");
    let posicion = 0;
    for (const tv of inventario) {
        console.log(`Posición ${posicion}:`, tv);
        posicion++;
    }
}

//Se usa map() como se solicita, similar al anterior listarArreglos(), cada vuelta del blucle 
//pasa por la variable tv, pero solo regresa los precios, dejando a listaPrecios
//como un arreglo nuevo de solo números
function mostrarListaPrecios() {
    const listaPrecios = inventario.map(function (tv) {
        return tv.precio;
    });
    console.log("ARREGLO DE PRECIOS");
    console.log(listaPrecios);
}

//Funcion de buscar producto por nombre de marca
function buscarProducto(nombre) {
    if (nombre === null) {
        return;
    }
    const encontrado = inventario.find(function (tv) {
        return tv.marca.toLowerCase() === nombre.toLowerCase();
    });

    if (encontrado) {
        console.log("Producto encontrado:", encontrado);
    }
    else {
        console.log("Televisor no encontrado.");
    }
}

//Funcion de menu de las opciones del arreglo de objetos
function mostrarMenuInventario() {
    let opcion = 0;
    while (opcion !== 5) {
        console.log("MENÚ DE INVENTARIO");
        console.log("1.-Ver TVs por marca y precio");
        console.log("2.-Ver todas las características");
        console.log("3.-Ver solo arreglo de precios");
        console.log("4.-Buscar producto específico");
        console.log("5.-Volver");

        let entrada = prompt("Ingrese opción: ");
        if (entrada === null) {
            break;
        }
        opcion = parseInt(entrada);

        switch (opcion) {
            case 1: {
                listarArreglos();
                break;
            }
            case 2: {
                listarTodasCaracteristicas();
                break;
            }
            case 3: {
                mostrarListaPrecios();
                break;
            }
            case 4: {
                let nombre = prompt("Ingrese nombre: ");
                buscarProducto(nombre);
                break;
            }
            case 5: {
                console.log("Volviendo al menú principal.");
                break;
            }
            default: { //se agrega default por si no se cumplen las opcioness
                console.log("Opción inválida.");
                break;
            }
        }
    }
}

//Seccion de arreglo numerico, toma inspiracion en un ejercicio de notas de examenes
const notas = [5.2, 6.8, 3.5, 4.9, 5.8, 4.0, 6.3, 7.0, 2.8, 3.9];

function gestionarNotas() {
    let opcionNotas = 0; // Nombre de variable actualizado
    while (opcionNotas !== 5) {
        console.log("MENÚ GESTIÓN DE NOTAS");
        console.log("1.-Listar notas y estado");
        console.log("2.-Ver Promedio");
        console.log("3.-Ordenar (Menor a Mayor)");
        console.log("4.-Ordenar (Mayor a Menor)");
        console.log("5.-Volver");

        let entrada = prompt("Seleccione opción: ");
        if (entrada === null) {
            break;
        }
        opcionNotas = parseInt(entrada);

        switch (opcionNotas) {
            //lista las notas y revisa si esta aprobado o no, dejando el 4.0 como minimo de aprobacion
            case 1: {
                console.log("ESTADOS");
                for (let i = 0; i < notas.length; i++) {
                    let estado = notas[i] >= 4.0 ? "Aprobado" : "Reprobado";
                    console.log(`Nota: ${notas[i]} - ${estado}`);
                }
                break;
            }
            case 2: {
                let aprobados = 0;//contador
                let reprobados = 0;//contador
                let sumaAprobados = 0;//acumulador 
                let sumaReprobados = 0;//acumulador
                //Bucle for que recorre el arreglo de notas, donde suma y acumula separadamente aprobados y reprobados
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i] >= 4.0) {
                        aprobados++;
                        sumaAprobados += notas[i];
                    }
                    else {
                        reprobados++;
                        sumaReprobados += notas[i];
                    }
                }
                const totalNotas = notas.length;//la cantidad de elementos del arreglo, para dividir al final
                const promedioGeneral = (sumaAprobados + sumaReprobados) / totalNotas;//calcula promedio total
                console.log(`Cantidad aprobados: ${aprobados}`);
                console.log(`Cantidad reprobados: ${reprobados}`);
                console.log(`Promedio general: ${promedioGeneral.toFixed(1)}`);//toFixed para redondear a 1 decimal
                break;
            }
            case 3: {
                //ordena el arreglo de menor a mayor
                notas.sort(function (a, b) { return a - b; });
                console.log("Notas (Menor a Mayor): " + notas.join(", "));
                break;
            }
            case 4: {
                //ordena el arreglo de mayor a menor
                notas.sort(function (a, b) { return b - a; });
                console.log("Notas (Mayor a Menor): " + notas.join(", "));
                break;
            }
            case 5: {
                break;
            }
            default: {
                console.log("Opción inválida.");
                break;
            }
        }
    }
}

//FUNCION DE MENÚ PRINCIPAL
function iniciarMenu() {
    let opcion = 0;
    while (opcion !== 4) {
        console.log("MENÚ PRINCIPAL DE PROYECTO");
        console.log("1.-Operaciones Matemáticas");
        console.log("2.-Gestión Inventario");
        console.log("3.-Gestión Notas");
        console.log("4.-Terminar");

        let entrada = prompt("Ingrese opción: ");
        if (entrada === null) {
            break;
        }
        opcion = parseInt(entrada);

        switch (opcion) {
            case 1: {
                ejecutarOperaciones();
                break;
            }
            case 2: {
                mostrarMenuInventario();
                break;
            }
            case 3: {
                gestionarNotas();
                break;
            }
            case 4: {
                console.log("Programa terminado.");
                opcion = 4;
                break;
            }
            default: {
                console.log("Opción inválida.");
                break;
            }
        }
    }
}

iniciarMenu();