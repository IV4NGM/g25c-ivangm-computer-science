class Laptop{
    constructor(noSerie, marca, modelo, color, tamaño){
        this.noSerie = noSerie
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.tamaño = tamaño
    }

    // Definimos método que es una función que nos traerá la info de laptop
    infoLap(){
        console.log("Esta increíble laptop marca " + this.marca + " tiene un tamaño de " + this.tamaño)
    }
    
    muestraVideo(){
        console.log("Estoy reproduciendo un video en una pantalla de " + this.tamaño)
    }
}

const lapIvan = new Laptop(56585, "Mac", "Pro", "Oro", 15)
const lapMontoyita = new Laptop(102938, "Alienware", "Nuevo", "Oro Morado", 20)

lapIvan.infoLap()
lapIvan.muestraVideo()

lapMontoyita.infoLap()
lapMontoyita.muestraVideo()
