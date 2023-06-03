class Articulo{
    constructor(nombre, cantidad, rapida){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.entrega_rapida = rapida;
    }
}

let items = [];

document.querySelector("#add_button").addEventListener("click", function(){
    let nombre = document.querySelector("#name").value;
    let cantidad = parseInt(document.querySelector("#amount").value);
    let rapida = document.querySelector("#fast").checked;
    if(nombre.trim()!="" && cantidad > 0){
        items.push(new Articulo(nombre, cantidad, rapida));
        alert("Elemento añadido correctamente.")
        console.log(items);
    }else{
        alert("Debes llenar todos los campos correctamente.");
    }
});