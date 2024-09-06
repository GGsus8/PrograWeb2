function adivinarNum(numeroUser, numMaq) {
    let vidas = 3;
    while (numMaq !== numeroUser && vidas > 1) {
        vidas--;
        numeroUser = parseInt(prompt("intenta nuevamente, tus vidas son: " + vidas));
    }
    if (numMaq === numeroUser) {
        alert("Ganaste wiii")
        console.log("Ganaste");
    } else {
        alert("Perdiste el nunero era: " + numMaq);
        console.log("Perdiste el numero era el: " + numMaq);
    }
}

let numMaq = Math.floor(Math.random() * (10 - 1) + 1);
console.log("El numero secreto es: " + numMaq);
let numeroUser = parseInt(prompt("Ingresa el numero del 1 al 10: "));

adivinarNum(numeroUser, numMaq);







