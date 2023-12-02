/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift()
   // return array.at(0)
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop() // extrae el ultimo elemento y lo devuelve
   //return array.at(-1)el menos uno retorna el ultimo elemento del array
}
// var resultado = devolverUltimoElemento(array = ["hola","chau","super"])
//console.log(resultado)

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
console.log(obtenerLargoDelArray([1,2,3,7,8,1]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var resultados = []
   console.log(array)
   array.forEach(function (element) {
      element = element + 1
      resultados.push(element)
      console.log(element)
   });
   return resultados
}
console.log(incrementarPorUno([2,3,4,2]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}
console.log(agregarItemAlFinalDelArray([1,2,3,4], 7))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}
console.log(agregarItemAlComienzoDelArray([1,2,3], 8))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ") // el metodo join compacta todos los elementos del string, dentro de los parentesis 
                             // coloco el espacio o lo que pide al mostrarlas.
   
}
console.log(dePalabrasAFrase(["Hola","nico","cuchau"]))
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}
console.log(arrayContiene([1,2,3], 3))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce(function(acum,elemento){
      acum = acum + elemento
      return acum
   })
}
console.log(agregarNumeros([1,1,1,1]))
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   return agregarNumeros(resultadosTest) / obtenerLargoDelArray(resultadosTest)
    
}
console.log(promedioResultadosTest([1,2,6]))

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return arrayOfNums.reduce(function(acum,elemento){
      return Math.max(acum,elemento)
   },-Infinity)
}
console.log(numeroMasGrande([-1,3,1,-7]))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0) return 0
   var total = 1 // se declara 1 pq no se va a multiplicar por 0
   for (var elemento of arguments) {
      total = total * elemento
   }
   return total
}
console.log(multiplicarArgumentos(1,4,2))

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var filtros = array.filter(function(elemen){
      if(elemen > 18 ) return elemen
   }) 
   return obtenerLargoDelArray(filtros)
}
console.log(cuentoElementos([1,2,18,12,22,23,19]))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7 ){
      return "Es fin de semana"
   } else if( numeroDeDia > 1 && numeroDeDia < 7){
      return "Es dia laboral"
   } else {
      return "No es un dia disponible"
   }
}
console.log(diaDeLaSemana(9))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(num.toString()[0] == 9){
      return true
   }else return false
}
console.log(empiezaConNueve(9))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var elemenReferencia = array[0]
   return array.every(function(elemen){
      return elemen === elemenReferencia
   })
}
console.log(todosIguales([121,121,121]))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var filtrados = array.filter(function (elemen){
      if(elemen === "Enero" || elemen === "Marzo" || elemen === "Noviembre") return elemen
   })
   var conjuntos = new Set(filtrados)
   if(conjuntos.size < 3) return "No se encontraron los meses pedidos"
   else return filtrados
}  
console.log(mesesDelAño(["Enero","Junio","Marzo","Julio", "Noviembre"]))
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arrayTablaDelSeis = []
   for(i=0;i<=10;i++){
      arrayTablaDelSeis.push(6*i)
   }
   return arrayTablaDelSeis
}
console.log(tablaDelSeis())
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter(function(elemen){
      if(elemen > 100 ) return elemen
  })
}
console.log(mayorACien([150,10,162]))
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
