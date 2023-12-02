//BUCLES
// LISTA DE CANCIONES -> BUCLES FINITOS
// PISTA DE ATLETISMO -> BUCLES INFINITOS

// bucle for
// ejemplo sumar los primeros tres numeros enteros
/*var suma = 0;

for(var i = 0; i <= 3; i++){
    suma = suma + i;
}*/

// console.log(suma)

// ejemplo bucle dentro de function
/*function sumaNum(numInicial, numFinal){
    var suma = 0
    for(var i = numInicial; i <= numFinal; i++){
        suma = suma + i   // aca a suma se le reasigna un nuevo valor, suma + i y pasa a retornar el valor de esa suma
    }
    return suma
}*/

//var resultado = sumaNum(2,4)
//console.log(resultado)


// ejemplo con condicionales
/*function sumaPar(numInicial,numFinal){
    // numInicial = 1
    // numFinal = 6
    var suma = 0
    for(var i = numInicial; i <= numFinal; i++){
        // comienza a iterar el for, i = 1 (numInicial), como 1 no es par, la condicion del if no se cumple,
        // por ende suma no se actualiza. 
        // se actualiza cuando i pasa a ser, i = 2 porque cumple la condicion del if.
        if (i % 2 === 0){
            suma = suma + i;
        }
    }
    return suma 
}*/

//var resultado = sumaPar(1,6)
//console.log(resultado)


// bucle infinito
// i > 0 (i mayor que cero) nunca deja de dar vueltas porque la condicion es infinita
/*for ( var i = 0; i > 0; i++){

}*/


// while

/*while (numero > 2){
    numero = numero - 1;
}

// do while

do {
    numero = numero - 1;
}while (numero > 2)
*/

// switch
/*var numero = 3
switch(numero){
    case 3 :{
        return "Es tres"
    }
    case 4: {
        return "Es cuatro"
    }
    case 5:{
        return "Es cinco"
    }
    default: {
        return "Es otro numero"
    }
}*/

// arrays

var artistas = ["sia", "bisbal", "duki"];
console.log(artistas[1]) 

// iterar arrays con bucle
for(var i=0 ; i < artistas.length; i++){
    var artista = artistas[i];
    console.log(artista);
}


