// Metodo get en Objetos de JavaScript

let persona = {
    nombre: "Junior Alexis",
    apellido: "Valera Rijo",
    edad: 29,
    email: "detoprox@gmail.com",
    celualar: "+1-809-000-0000",
   // podemos simplificar la sintaxis de esta funcion usando get 
    Mifuncion: function() {
        return this.nombre + " " + this.apellido;
    }

}
console.log(persona.Mifuncion());

// Ejemplo con get
let persona2 = {
    nombre: "Junior Alexis",
    apellido: "Valera Rijo",
    edad: 29,
    email: "detoprox@gmail.com",
    celualar: "+1-809-000-0000",
   // podemos simplificar la sintaxis de esta funcion usando get 
    get MifuncionGET() {
        return this.nombre + " " + this.apellido;
    }

}
console.log(persona2.MifuncionGET);// asi podiend simplificar la sintaxis