// Heredar metodos en JavaScript

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,Cargo){
        super(nombre,apellido);
        this._Cargo = Cargo; 
    }
    get Cargo(){
        return this.Cargo;
    }
    set Cargo(Cargo){
        this._Cargo = Cargo;
    }
    nombreCompleto(){// asi se declara un metodo dentro de una clase no es necesario usar la palabra funtion;
        return this._nombre +' '+this._apellido +' '+ this._Cargo;
    }
}

let Empleado1 = new Empleado('Robert','Sandoval','Gerente');
Empleado1.Cargo = 'Gerente General';
console.log(Empleado1.nombreCompleto());// Aqui estamos heredando el nuevo metodo de la clase padre;