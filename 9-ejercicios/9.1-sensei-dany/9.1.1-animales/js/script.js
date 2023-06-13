// Clase base/Madre/Padre Animal
class Animal{
    constructor(name, age, gender, photo){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.photo = photo;
    }

    // Método para obtener la información de nuestro animal
    getInfo(){
        return `Nombre: ${this.name}, Edad: ${this.age}, Género: ${this.gender}`;
    }

    getPhoto(){
        return this.photo;
    }
}

// Clase derivada/hija/hijo Perro
class Perro extends Animal{
    constructor(name, age, gender, breed, photo){
        super(name, age, gender, photo);
        this.breed = breed;
    }

    getInfo(){
        return `${super.getInfo()}, Raza: ${this.breed}`;
    }
}

// Clase derivada/hija/hijo Gato
class Gato extends Animal{
    constructor(name, age, gender, color, photo){
        super(name, age, gender, photo);
        this.color = color;
    }

    getInfo(){
        return `${super.getInfo()}, Color: ${this.color}`;
    }
}

// Crear instancias de perro y gato
const perro1 = new Perro("Solovino", 3, "M", "Sin raza", "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg");
const perro2 = new Perro("Fito", 1, "H", "Pug", "https://soyunperro.com/wp-content/uploads/2019/08/perro-pug-en-el-jardin.jpg");

const gato1 = new Gato("Michi", 12, "M", "Naranja", "https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png");
const gato2 = new Gato("Garfield", 14, "H", "Azul", "https://estaticos-cdn.prensaiberica.es/clip/b84dc4c1-d4db-4bd4-896c-37986d62b6b4_16-9-discover-aspect-ratio_50p_0.jpg");

//Obtener el elemento DOM, donde mostraremos la info del animal
const animalInfoElement = document.getElementById("animal-info");

// Mostrar la información del perro en elemento DOM
const perroInfoElement1 = document.createElement("p");
perroInfoElement1.textContent = perro1.getInfo();
animalInfoElement.appendChild(perroInfoElement1);

const perroInfoImg1 = document.createElement("img");
perroInfoImg1.src = perro1.getPhoto();
animalInfoElement.appendChild(perroInfoImg1);

const perroInfoElement2 = document.createElement("p");
perroInfoElement2.textContent = perro2.getInfo();
animalInfoElement.appendChild(perroInfoElement2);

const perroInfoImg2 = document.createElement("img");
perroInfoImg2.src = perro2.getPhoto();
animalInfoElement.appendChild(perroInfoImg2);

//Mostrar la información del gato en elemento DOM
const gatoInfoElement1 = document.createElement("p");
gatoInfoElement1.textContent = gato1.getInfo();
animalInfoElement.appendChild(gatoInfoElement1);

const gatoInfoImg1 = document.createElement("img");
gatoInfoImg1.src = gato1.getPhoto();
animalInfoElement.appendChild(gatoInfoImg1);

const gatoInfoElement2 = document.createElement("p");
gatoInfoElement2.textContent = gato2.getInfo();
animalInfoElement.appendChild(gatoInfoElement2);

const gatoInfoImg2 = document.createElement("img");
gatoInfoImg2.src = gato2.getPhoto();
animalInfoElement.appendChild(gatoInfoImg2);