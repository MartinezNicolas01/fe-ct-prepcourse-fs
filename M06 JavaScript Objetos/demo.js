// arrays -> coleccion de elementos
var array = [1,2,3]

// objets -> coleccion de clave - valor
var usuario1 = {
    nombre: "Nicolas",
    apellido: "Martinez",
    edad: 22,
    online: true,
    amigos: ["Agustin","Nico","pepe"],
    madre: {
        nombre: "Silvina",
        apellido: "Lugo",
        edad: 42,
    },
    saludarAMama: function(){
        return "Hola " + this.madre.nombre;
    },
}

// for in -> sirve para iterar cada una de las claves dentro del objeto
for(var key in usuario1){
    //key pasa a almacenar todas las claves del objeto
    //key = "nombre" - key = "apellido" ... 
    console.log(usuario1[key])
}

// HasOwnProperty -> devuelve un booleano, si tiene o no la propiedad que indiquemos.
console.log(usuario1.hasOwnProperty("apellido"))

// Funcion saludarAMama
console.log(usuario1.saludarAMama())

// como agregar una propiedad dentro del objeto
usuario1.pais = "Argentina";

// como eliminar una propiedad dentro del objeto
delete usuario1.online

// Accediendo a los valores de un objeto
// 1- DOT NOTATION -> notacion de punto
usuario1.apellido // "Martinez"
usuario1.nombre // "Nicolas"

// 2- BRACKET NOTATION
usuario1["apellido"] // "Martinez"
// Utilizamos bracket notation, cuando la propiedad a la que queremos acceder, no sabemos como se llama y esta alojada en una variable

var ejemplo = "apellido" 
// La variable ejemplo almacena un string que es el nombre de una de las propiedades del objeto, accede a esa propiedad y devuelve su valor
// usuario1 [ejemplo] -> usuario1 ["apellido"]

console.log(usuario1)

function agregarAmigos(amigo,objeto,propiedad){
    objeto[propiedad].push(amigo)
}

console.log(agregarAmigos("Felipe", usuario1,"amigos"))
console.log(usuario1)