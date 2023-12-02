/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x === y;
}
var resultadoIguales = sonIguales(100,100)
console.log(resultadoIguales);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   return str1.length === str2.length;
}
var resultadoLongitud = tienenMismaLongitud("Nicolas", "Jazmin")
console.log(resultadoLongitud)

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   return num < 90;
}
var resultadoMenor = menosQueNoventa(40)
console.log(resultadoMenor)

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num > 50;
}
var resultadoMayor = mayorQueCincuenta(120)
console.log(resultadoMayor)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   var residuo = num % 2; // se obtiene el residuo o resto, que siempre tiene que ser cero.
   if(residuo === 0) return true;
   else return false;
}
var resultadoPar = esPar(2)
console.log(resultadoPar);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   /*var residuo = num % 2;
   if(residuo === 0) return false;
   else return true;*/
   // otra manera de hacerlo es utilizando la funcion creada arriba
    var resultado = esPar(num);
    if (resultado === false) return true;
    else return false;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
