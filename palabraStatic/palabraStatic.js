// Palabra Static en JavaScript
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;// get debe llamar a this.
    }
    set nombre(nombre){
        this._nombre = nombre;// set llama a this. e iguala al atributo
    }
    get apellido(){
        return this._apellido;// get debe llamar a this.
    }
    set apellido(apellido){
        this._apellido = apellido;// set llama a this. e iguala al atributo
    }

    static Saludar(){// el metodo static solo se ejecuta desde la clase
        console.log('Buenas noches programador')
    }
    // otra forma es accediendo a un objeto
    static nombreCompleto1(Persona){
        console.log(Persona.nombre+' '+Persona.apellido);
    }
}
let Persona1 = new Persona('Alejandro','Santana');
Persona1.nombre = 'Juan';
Persona1.apellido = 'Robles';
console.log(Persona1.nombre+' '+Persona1.apellido);

class Empleado extends Persona{
    constructor(nombre,apellido,Cargo){
        super(nombre,apellido);// llama las propiedades de la clase padre
        this._Cargo = Cargo;

    }
}

// el metodo static no se puede llamar desde un objeto
let persona2 = new Persona('pedro','santos');
// console.log(persona2.Saludar());

// la forma correcta de llamar el metodo static es atraves de la misma clase ejemplo:
Persona.Saludar();
//tambien la podemos llamar desde una clase hija
Empleado.Saludar();
// Llamada de static accediendo a un objeto de la clase
Persona.nombreCompleto1(persona2);