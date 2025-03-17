// Agregar metodos a un metodo constructor
function persona(nombre,apellido,email,nombreCompleto){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){// se puede agregar funciones anidadas a un constructor
        return this.nombre + " " + this.apellido;
    }
}
let hijo = new persona("Alexis","Rijo","juniorv@gmail.com");
console.log(hijo.nombreCompleto());// aqui vemos como tenemos en la salida el nombre completo con una sola llamada