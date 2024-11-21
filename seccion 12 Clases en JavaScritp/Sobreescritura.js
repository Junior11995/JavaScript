// Sobreescritura en JavaScript
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    nombreCompleto(){// en la sobreescritura se rescribe un metodo en de la funcion padre a la de hijo
        return this._nombre +' '+ this._apellido;// se heredan todos sus atributos
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,Posicion){
        super(nombre,apellido);
        this._Posicion = Posicion;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() +' '+ this._Posicion;// solo usando super se heredan los atributos y se concatena con Hijo
    }
}

let Empleado1 = new Empleado('Richar','chireno','Administrador');
Empleado1._Posicion = 'Administrador de Recursos HUmanos';
console.log(Empleado1.nombreCompleto());