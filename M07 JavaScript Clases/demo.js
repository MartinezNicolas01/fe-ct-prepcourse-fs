// Prototype es un objeto que se vincula a otro objeto.

// objeto comun
var objetoPadre = {
    numero: 4,
}

// Herencia prototipica.
// Se crea un objeto y dentro se le asigna otro objeto
var obj = Object.create(objetoPadre);
console.log(obj)
console.log(obj.__proto__)

// cadena prototipica
console.log(obj.numero)

// darle propiedades a un objeto
obj.edad = 18
console.log(obj)
console.log(obj.__proto__)
Object.assign(obj, { nombre : "Nico"})
console.log(obj)
console.log(objetoPadre)
console.log(objetoPadre.__proto__)



// CLASES -> plantilla de un objeto 
// Instancias -> lo que hereda de una clase
// Clases  Coche  -> Instancias  Audi , BMW, Volvo
// Clases  Animal -> Instancias Mono, Leon, Gatos
// Clases  Musica -> Instancias Pop, Tecno, Melodico
// TODAS LAS CLASES COMIENZAN CON LETRA MAYUSCULA!!

// notacion funcional
// Genero una plantilla de carro que tiene: marca y color
// Instancia de carro -> Nissan = Car("Nissan", "Azul")

function Car(marca,color){
    this.marca = marca
    this.color = color
    this.matricula = true
    this.meep = function (){
        return "Meep Meep!!"
    }
}

var nissan = new Car("Nissan", "Azul")
console.log(nissan)
var audi = new Car("Audi", "Negro")
console.log(audi)
// No es necesario generar variables y asignarles new Car(). directamente lo hacemos usando new dentro de un console.log()
console.log(new Car("BMW","Blanco"))

console.log(audi.meep())


// notacion de clase (incorporada en 2015)
class Coche {
    constructor (marca,color){
        this.marca = marca
        this.color = color
        this.matricula = true
        this.meep = function (){
            return "Meep Meep!"
        }
    }
}

var volvo = new Coche ("Volvo", "Gris Oscuro")
console.log(volvo)


class Animal {
    constructor(raza, nombre){
        this.raza = raza
        this.nombre = nombre
    }
    // prototipo
    meow(){
        return "Meow!";
    }
    ladrar(){
        return "Guau!";
    }
    comer(){
        return "Estoy comiendo"
    }
}

var gato = new Animal ("Siames", "Michi")
console.log(gato.meow())

var perro = new Animal ("Pitbull", "Thor")
console.log(perro.ladrar())

// Subclase ->
class Perro extends Animal {
    constructor(raza,nombre){
        super(raza,nombre) // el super funciona para que herede propiedades de la clase "padre" en este caso class Animal
    }
    ladrar(){
        return "Guau!"
    }
}

var perro1 = new Perro("Siberiano","Tobby")
console.log(perro1.comer()) // podemos heredar el prototipo comer() desde la clase "padre " Animal, al no estar en la subclase

// CALLBACKS -> una funcion que es pasada como argumento a otra -> "cb"

function suma(a,b,cb){
    var operacion = a + b
    var cantidadDeArgs = arguments.length - 1
    return cb(operacion,cantidadDeArgs)
}

function promedio(suma,args){
    console.log(suma,args)
    return suma / args
}

console.log(suma(2,3, promedio))

// 

function saludar(nombre,cb){
    var saludo = cb(nombre)
    return saludo
}

function mascota(nombre){
    return "Hola, Soy " + nombre
}

console.log(saludar("Tobby", mascota))