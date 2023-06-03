class Articulo{
    constructor(nombre, cantidad, rapida, id){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.entrega_rapida = rapida;
        this.id = id;
    }
}

let items = [];
let id = 0;

document.querySelector("#add_button").addEventListener("click", function(){
    let nombre = document.querySelector("#name").value;
    let cantidad = parseInt(document.querySelector("#amount").value);
    let rapida = document.querySelector("#fast").checked;
    if(nombre.trim()!="" && cantidad > 0){
        id++;
        items.push(new Articulo(nombre, cantidad, rapida, id));
        alert("Elemento añadido correctamente.");
        addElement(nombre, cantidad, rapida, id);
        console.log(items);
    }else{
        alert("Debes llenar todos los campos correctamente.");
    }
});

let itemsNumber = 0;

function addElement(nombre, cantidad, rapida, id){
    itemsNumber++;
    document.querySelector("#empty-car").style.display = "none";
    let generalContainer = document.createElement("div");
    generalContainer.classList.add("mdl-card", "mdl-shadow--2dp", "item-card");
    let productoContainer = document.createElement("div");
    productoContainer.classList.add("row-container");
    let image = document.createElement("img");
    image.classList.add("carrito");
    let productName = document.createElement("p");
    productName.textContent = nombre;
    productoContainer.appendChild(image);
    productoContainer.appendChild(productName);
    generalContainer.appendChild(productoContainer);
    let cantParrafo = document.createElement("p");
    cantParrafo.textContent = "Cantidad: " + cantidad.toString();
    generalContainer.appendChild(cantParrafo);
    let entregaContainer = document.createElement("div");
    entregaContainer.classList.add("row-container", "row-container-entrega");
    let textEntrega = document.createElement("p");
    textEntrega.textContent = "Entrega:";
    let tipoEntrega = document.createElement("p");
    tipoEntrega.textContent = rapida ? "Rápida" : "Normal";
    if(rapida){
        tipoEntrega.style.color = "green";
    }
    let botonCerrar = document.createElement("button");
    botonCerrar.classList.add("mdl-button", "mdl-js-button", "mdl-button--fab", "mdl-button--colored", "remove");
    let icono = document.createElement("i");
    icono.classList.add("material-icons");
    icono.innerHTML = "close";
    botonCerrar.appendChild(icono);
    entregaContainer.appendChild(textEntrega);
    entregaContainer.appendChild(tipoEntrega);
    generalContainer.appendChild(entregaContainer);
    generalContainer.appendChild(botonCerrar);
    document.querySelector("#cards-container").appendChild(generalContainer);
    botonCerrar.addEventListener("click", function(){
        generalContainer.remove();
        itemsNumber--;
        if(itemsNumber <=0){
            document.querySelector("#empty-car").style.display = "block";
        }
        items = items.filter(e => e.id !=id);
        console.log(items);
    });
}
