// Uso del metodo Call en JavaScript

let persona1 = {
  nombre: "Junior",
  apellido: "Valera",
  celular: "1-809-000-0000",
  nombreCompleto: function nombreComplet(){
    return this.nombre + ' ' + this.apellido;
  }
}

console.log(persona1.nombreCompleto());// esta es la forma comun de llamar a un objeto 

let persona2 = {
    nombre: "alexis",
    apellido: "rijo",
    celular: "1-829-000-0000"
}

console.log(persona1.nombreCompleto.call(persona2));// con el metodo call puedes usar una funcion alojada en un objeto diferente 