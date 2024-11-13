// contar los numeros de 3 en 3 positivo y negativo 

let maximo = 10, minimo = -10;

for (let numero = 1; numero <= maximo; numero += 3){
    console.log(`el valor es ${numero}`);
}

for (let numero = 1; numero >= minimo; numero -= 3){
    console.log(`el valor es ${numero}`);
}