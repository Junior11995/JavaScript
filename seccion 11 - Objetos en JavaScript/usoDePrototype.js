// Uso de prototype en javaScript para añadir nuevas propiedades a un objeto constructor desde fuera de ella

function persona(nombre , apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

persona.prototype.telefono = "1-809-000-0000";// De esta forma podemos añadir un nuevo atributo si estar dentro del constructor

let madre = new persona("adriana","Rijo","detoprox@gmai.com");
console.log(madre.telefono);
madre.telefono = "1-829-525-5522";// Aqui le asignamos la propiedad telefono al objeto madre 
console.log(madre);// ya esta asignado sin tener que llamar la nueva propiedad