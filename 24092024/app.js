let tienda = ["manzana", "sandia", "pera"];
tienda.forEach(fruta => console.log(fruta));

tienda.forEach((fruta, index, array) => {
    console.log(index + 1);
    console.log(array);
    console.log(fruta);
});

tienda.forEach((fruta, index) => {

});
tienda.array.forEach((mesa, correr) => {
    console.log(`Fruta(${correr + 1}).-`)
});