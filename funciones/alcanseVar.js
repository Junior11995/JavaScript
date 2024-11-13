// alcanse de variables 

let variableGlobal = 10;

 variableGlobal = 20;

console.log(`alcanse de la  variable ${variableGlobal}`);

function variableLocal (local){
    local = variableGlobal;
    console.log(local);
    variableGlobal = 35;
}