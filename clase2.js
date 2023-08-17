// VARIABLE... DEBILMENTE TIPADO... NO ES NECESARIO DEFINIR EL TIPO DE DATO... SINO QUE LO INFIERE EL PROPIO INTERPRETE

var global = 0;

var global = 0

const CONSTANTE = 10

var variableContexto = 'variableContexto'

global = '12'

global = global + 1

//console.log(global);

// array y objetos

const perros = ['firulas', 'wolfy', 'toto']

let persona = {
    nombre: 'pedro',
    apellido: 'Gutierrez',
    edad: 21,
    perros: perros,
    barrer: function(){
        // lo que haga
    },
    direccion: {
        calle: 'Santa Fe',
        altura: 1212,
        piso: 4,
        ubicacion: {
            provincia: 'Buenos Aires',
            coordenadas: 223232,
            ciudad: 'Navarro'
        }
    }
}

console.log(persona.perros);

console.log("CON EL FOR");
for(i = 0; i < persona.perros.length; i++){
    //
    let nombreCompleto = persona.perros[i] + " de Roberto"
    console.log(nombreCompleto); 
}

console.log("CON EL FOREACH");



perros.forEach((e, i) => {
    let nombreCompleto = e + " de Roberto"
    console.log(nombreCompleto + " " + i);
});

console.log(persona.perros);

function sumar(a, b){
    return a + b
}

function restar(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function calculo(a, b, calc){
    return calc(a, b);
}

console.log(calculo(20, 10, multiplicar));


// METODO(PARAMETROS)... DONDE LOS PARAMETROS SON VARIABLES U ARRAY...
// EN JAVASCRIPT ... LAS FUNCIONES RECIBEN TAMBIEN FUNCIONES... QUE SE LLAMAN CALLBACKS


//miArray.push('nuevaPalabra')

//console.log(miArray);




// let sumar = function (...moto) {
//   console.log(moto);

//   let variableDeFuncion = 10;
//   return (
//     variableDeFuncion +
//     moto.reduce((acumulador, vuelta) => (acumulador += vuelta))
//   );
// };

// sumar(10, 15, 75);

// let concatenar = function (palabra1 = "", palabra2 = "Dos", ...moto) {
//   return moto;
// };

// console.log(
//   concatenar("Algo", "otra cosa", 1, 2, 3, 4, 5, "caballo", {
//     nombre: "pedro",
//     apellido: "Rodriguez",
//   })
// );

// //listadoGastos.reduce();
// let comparador = 0;
// listadoGastos.forEach(function (valorQueHayEnCadaPosicion, indice) {
//   //console.log(valorQueHayEnCadaPosicion);
//   if (indice == 0 || comparador < valorQueHayEnCadaPosicion) {
//     comparador = valorQueHayEnCadaPosicion;
//   }
// });

// // FOR QUE RECORRE EL ARRAY Y GENERA UNO NUEVO CON LOS REGISTROS IGUALES A 4

// let filter = function (array, numero) {
//   const resultado = [];
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] == numero) resultado.push(array[index]);
//   }
//   return resultado;
// };

//console.log(filter(listadoGastos, 3));

//let nuevoListado = listadoGastos.filter((datoVuelta) => datoVuelta == 4);

//let nuevoResultado = listadoGastos.filter((vuelta) => vuelta == 3);
/*
let listadoProductos = [
  { nombre: "Jabón", precio: 1000 },
  { nombre: "Shampoo", precio: 100 },
  { nombre: "Desodorante", precio: 350 },
  { nombre: "Enjuague", precio: 235 },
];

listadoProductos.sort((a, b) => {
  const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
  const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

listadoProductos.sort((a, b) => a.precio - b.precio);

console.log(listadoProductos);

const numeros = [10, 10, 34];
let rta = numeros.reduce(
  (acumulador, valorVuelta) => acumulador * valorVuelta,
  10
);
console.log("Primer Reduce:");
console.log(rta);

console.log("Precio sumatoria productos:");
rta =
  listadoProductos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  ) / listadoProductos.length;
console.log(rta);

const lista = [3, 4, 5, 23, 34];

const listaSumada = lista.map((o1) => {
  let retorno = 0;
  if (o1 > 20) {
    retorno = o1 + 1000;
  } else {
    retorno = o1 + 1;
  }
  return retorno;
});

console.log(lista);
console.log(listaSumada);

function nombre(parametros1, parametro2, ...spreadOperato) {
  return algo;
}

let variable = function (parametros1, parametro2, ...spreadOperato) {
  let variableInterna = 100;
  return variableInterna;
};

let funcionFlecha = (variable1, variable2) => variable1 + variable2;

console.log(funcionFlecha(1, 3));
*/

//listaProductos.forEach()

// function funcionDummy(num1 = 10, num2 = 100, operacion) {
//     return "El resultado es: " + operacion(num1, num2);
//   }
  
//   let sa2 = function (a, b) {
//     return a + b;
//   };
  
//   let sumar = (a, b) => a + b;
  
//   let restar = (a, b) => a - b;
  
//   //console.log(funcionDummy(10, 10, restar));
  
//   let listaProductos = [
//     { nombre: "jabon", precio: 123 },
//     { nombre: "shampoo", precio: 1243 },
//     { nombre: "enjuague", precio: 654 },
//     { nombre: "pasta", precio: 7876 },
//   ];
  
//   // let variableAuxiliar = 0;
//   // console.log("CON UN FOR A LA ANTIGUA");
//   // for (let i = 0; i < listaProductos.length; i++) {
//   //   console.log(listaProductos[i].nombre);
//   // }
//   // console.log("CON UN FOREACH PASANDO CALLBACK");
  
//   // listaProductos.forEach(function (producto) {
//   //   console.log(producto.nombre);
//   // });
  
//   let array = [];
//   let array1 = [];
  
//   let arrayNumeros = [1, 20, 50, 100]
  
//   console.log(arrayNumeros.reduce((a, n) => a += n));
  
//   // CON FOR COMO ANTES
//   for (let i = 0; i < listaProductos.length; i++) {
//     if (listaProductos[i].precio > 1000) {
//       array1.push(listaProductos[i]);
//     }
//   }
//   // CON FOREACH
//   let listado = listaProductos.forEach((producto) => {
//     if (producto.precio > 1000) {
//       array.push(producto);
//     }
//   });
//   // CON FILTER
//   //console.log(
//     listaProductos.filter(
//       (producto) =>
//         producto.precio >
//         arrayNumeros.reduce(
//           (numero, acumulador) => (acumulador = acumulador + numero)
//         )
//     )
  
  
  
//   console.log(array);
//   console.log(array1);