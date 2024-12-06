// Ejercicio de Herencias en JavaScript
class Persona{
    static contadorPersonas = 0;
    edad = 0;
    static get limitador (){
        return 2;
    }
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        if (Persona.contadorPersonas < Persona.limitador){
            this.IDPersona = ++Persona.contadorPersonas;

        }
        else{
            console.log(`Usted ha superado el limite de intentos en esta clase`);
        }
    }
    get IDPersona(){
        return Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(_nombre){
        this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(_apellido){
        this._apellido;
    }
}

class Empleado extends Persona{
    static idEmpleado = 0;
    static limitadorEmpleado (){
        return 3;
    }
    constructor(sueldo){
        this._sueldo = sueldo;
        if (Empleado.idEmpleado < Empleado.limitadorEmpleado){
            this.EmpleadoID = ++Empleado.limitadorEmpleado;
        }
        else{
            console.log(`Udte llego al limite de empleados en esta clase`)
        }
    }
}

class Cliente extends Persona{
    constructor(){
        
    }
}