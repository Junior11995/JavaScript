// Uso del metodo appy en objetos diferencia entre appy y call

let persona1 = {
    nombre: "adrian",
    apellido: "valdez",
    nombreCompleto: function (titulo,telefono){
        return titulo+': '+ this.nombre+' '+this.apellido+' '+telefono;
    }
}

console.log(persona1.nombreCompleto.call(persona1,'Licenciado','1-809-578-5481'));
// con call llamamos los atributos desde el metodo con los datos

let persona2 = {
    nombre: "Junior Alexis",
    apellido: "Valera Rijo",
}

let arreglos = ['Ingeniero','1-809-900-0000']

console.log(persona1.nombreCompleto.apply(persona2,arreglos));
// **con apply podemos usar un arreglo para esto asi simplificando aun mas la sintaxis */