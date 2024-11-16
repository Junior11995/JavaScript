// agregar funciones y metodos a un objeto

let ciudad= {
    direccion: "San pedro de macoris",
    tamaño: 2,
    codigoPostal: 21000,

    miCiudad: function(){
         return this.direccion + " " + this.tamaño +" "+ this.codigoPostal;// con this podemos llamar a cualquier variable dentro de la funcion 
    }
}
console.log(`datos de la ciudad: / Nombre / tamaño en km/ codigo postal`)
console.log(`Mi ciudad ${ciudad.miCiudad()}`);// para llamar una funcion se debe pedir el nombre del objeto con punto y llamar a la funcion 