// Clase hija Empleado
class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(sueldo){
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `
        ${this._idEmpleado}
        ${super.toString()}
        ${this._sueldo}
        `
    }
}