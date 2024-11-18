// Paso de algumentos al metodo Call en JavaScript

let persona = {
    nombre: "Alexis",
    apellido: "valera",
    nombreCompleto: function nombreCompleto (titulo,telefono){
        return titulo+': '+ this.nombre + ' ' + this.apellido +' '+ telefono;// hay que concatenar bien no lleva coma si no +' '+ en cada iteracion con comilla simple
    }
}

console.log(persona.nombreCompleto('Mr','1-809-000-3005'));// aqui podemos ver como se recibe los argumentos pidiendolos desde el metodo

let persona2 = {
    nombre: "Junior",
    apellido: "Rijo"
}

console.log(persona.nombreCompleto.call(persona2,'Ingeniero','1-809-000-0000'));// aqui con call accedimos a los datos de otro objeto y le pasamos argumentos a la funcion del primer objeto

