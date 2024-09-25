//primer ejercicio
let columnas = "";
let renglones = "";
for (let i = 0; i < 4; i++) {
    columnas = columnas + "X ";
}
console.log(columnas);
for (let j = 0; j < 4; j++) {
    renglones = renglones + "X\n";
}
console.log(renglones);

//segundo ejercicio
columnas = "";
renglones = "";
let a = parseInt(prompt("Dame el numero de columnas"));
let b = parseInt(prompt("Dame el numero de filas"));

for (let index = 1; index < a; index++) {
    columnas = columnas + "X ";
}
for (let j = 0; j < b; j++) {
    renglones = renglones + "X\n";
}
console.log(columnas + renglones);

//tercer ejercicio
let fila = "";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        fila += "X ";
    }
    fila += "\n";
}

console.log(fila);

//Cuarto ejercicio 
let numero = 1;
for (let index = 0; index < 10; index++) {
    for (let j = 1; j < 11; j++) {
        console.log(numero * j);
    }
    numero++;
}