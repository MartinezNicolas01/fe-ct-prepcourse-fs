var arreglo = ["hola", "chau","bien","mal"]
//                i      i      i      i
//posiciones      0      1      2      3  
var arregloNum = [2,4,6,8]
for(var i = 0; i < arregloNum.length; i++){
    console.log(arregloNum[i])
}

console.log(arreglo.length - 1 ) // me dice cual es la posicion del ultimo elemento del arreglo

console.log("hola".charAt(2)) // me devuelve la letra en la posicion 2 dentro del string

console.log(arreglo.at(0)) // con el metodo at() devuelve el primer elemento del arreglo
console.log(arreglo.at(-1)) // con el metodo at() devuelve el ultimo elemento del arreglo

console.log(arreglo[arreglo.length - 1 ]) // accede al ultimo elemento pero conviene hacer el metodo at()
 
// forEach
arreglo.forEach(function(elemen){
    console.log(elemen)
})

arreglo.forEach(function(elemen, indice, array){
    elemen = elemen + " AA"
    console.log(elemen,indice,array)
})

// map  es devolver un nuevo array con los elementos modificados
var otro = arreglo.map(function(elemen, indice, array){
    elemen = elemen + " S " + indice
    console.log(elemen,indice,array)
    return elemen
})
console.log(otro)

// Filter devuelve un nuevo arreglo con los elementos que cumplan cierta condicion
console.log(arreglo)
var filtros = arreglo.filter(function(elemen){
    if(elemen.length === 4 ) return elemen
})
console.log(filtros)

var numeros = [1,2,3,4,5,6]
var filtrosNum = numeros.filter(function(elemen){
    if(elemen === 2 ) return elemen
})
console.log(filtrosNum)

var filtrosPar = numeros.filter(function (elemen){
    if(elemen % 2 === 0) return elemen
})
console.log(filtrosPar)

var filtrosImpar = numeros.filter(function(elemen){
    if(elemen % 2 === 1) return elemen
})
console.log(filtrosImpar)

// Reduce -> devuelve un numero luego de haber operado todos los elementos del array.
// el acumulador automaticamente se inicializa en cero. acum = 0.
var total = numeros.reduce(function(acum, elemen){
    acum = acum + elemen
    return acum
}, 10) // fuera de la function pero dentro del reduce, podemos inicializar "acum" desde que numero queremos que inicie
console.log(total)

// Metodos de arreglos
var arr = [1,2,3]
console.log(arr)
// Push -> agrega un elemento al final del array y devuelve la longitud del nuevo array
var prueba = arr.push(12)
console.log(prueba)
console.log(arr)

// Pop -> elimina un elemento al final del array y devuelve el elemento que elimino
var prueba2 = arr.pop()
console.log(prueba2)
console.log(arr)

// Unshift -> agrega un elemento al principio del array y devuelve la longitud del nuevo array
var prueba3 = arr.unshift(23)
console.log(prueba3)
console.log(arr)

// Shift -> elimina un elemento al principio del array y devuelve el elemento que elimino
var prueba4 = arr.shift()
console.log(prueba4)
console.log(arr)


// Objeto arguments -> Es propio de las funciones, es un objeto que se comporta como un arreglo,
// contiene todos los parametros de la funcion.

// se utilizan los ... para decir que sin importar la cantidad de argumentos que recibe la funcion pueda capturarlos en un array
function saludar(...args){
    arguments
    return args
}
console.log(saludar("Español","Nico","Hola, como estas?"))

