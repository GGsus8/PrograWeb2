let carrito = [];
let fruta = prompt("ingresa una fruta");
carrito.push(fruta);

while (confirm("Deseas agregar otra fruta?")) {
    let carrito = [];
    let fruta = prompt("ingresa una fruta");
    carrito.push(fruta);
}

let alerta = "Usted compro:\n";

carrito.forEach((fruta, index) => {
    alert(index + 1);
});
