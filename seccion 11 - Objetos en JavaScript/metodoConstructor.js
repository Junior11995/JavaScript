// Funcion constructor de objetos de tipo persona en JavaScript
function persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new persona("alexis","Valera","detoprox@gmai.com");// en este caso se pueden crear varios objetos usando los datos de persona
console.log(padre);// aqui se imprimiran los datos que envia padre a la funcion constructor persona

// podemos crear varios objetos con la misma funcion
let madre = new persona("gladis","santana","junior22ascinsero@gmail.com");
console.log(madre);// como pudimos ver con la misma funcion constructor se crearon dos objetos diferentes