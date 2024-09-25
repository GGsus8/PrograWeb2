let carrito = [];
let objeto = {
    nombre: "",
    precio: 0
};

//Función para parsear el numero para el switch
function mostrarMenu() {
    return parseInt(prompt(
        `Seleccione un producto para agregar al carrito: 
        1.-Camisa-$300
        2.-Pantalón-$500
        3.-Zapatos-$800
        4.-Sombrero-$200
        5.-Ver Carrito y Total
        6.-Salir`));
}
//funcion que agrega al arreglo carrito las prendas y su precio. sirve como la funcion principal
function agregarCarrito() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                objeto = {
                    nombre: "Camisa",
                    precio: 300
                };
                carrito.push(objeto);
                console.log("Camisa agregado al carrito");
                break;
            case 2:
                objeto = {
                    nombre: "Pantalón",
                    precio: 500
                };
                carrito.push(objeto);
                console.log("Pantalón agregado al carrito");
                break;
            case 3:
                objeto = {
                    nombre: "Zapato",
                    precio: 800
                };
                carrito.push(objeto);
                console.log("Zapato agregado al carrito");
                break;
            case 4:
                objeto = {
                    nombre: "Sombrero",
                    precio: 200
                };
                carrito.push(objeto);
                console.log("Sombrero agregado al carrito");
                break;
            case 5:
                verCarritoTotal();
                break;
            case 6:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no valida.Intentata nuevamente");
        }
    }
    alert("Programa finalizado...")
}
//Funcion que imprime los elementos del carrito y su precio total
function verCarritoTotal() {
    if (carrito.length === 0) {
        alert("Carrito vacio");
    } else {
        let mensaje = ""
        let Total = 0;
        carrito.forEach((objeto, index) => {
            mensaje += `${index + 1}.- ${objeto.nombre} - ${objeto.precio}\n`
            Total += objeto.precio;
        });
        alert(mensaje);
        alert("Precio Total: " + Total);
    }
}

agregarCarrito();

