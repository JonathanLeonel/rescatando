import { getRandomLocation } from "./randomLocation";

let buscados = [];

export const getBuscados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(buscados);
      // reject("No pudimos traer las mascotas buscadas, intentá más tarde por favor");
    }, 1500);
  });
};

export const uploadBusqueda = busqueda => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      buscados = [
        {
          ...busqueda,
          foto: busqueda.foto, //images[getRandomInt(0, 9)],
          location: getRandomLocation()
        },
        ...buscados
      ];
      resolve(buscados);
      // reject("No pudimos traer las mascotas buscadas, intentá más tarde por favor");
    }, 1500);
  });
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fotos = [
  require("./img/perro1.png"),
  require("./img/perro2.png"),
  require("./img/perro3.png"),
  require("./img/perro4.png"),
  require("./img/perro5.png"),
  require("./img/perro6.png"),
  require("./img/perro7.png"),
  require("./img/perro8.png"),
  require("./img/perro9.png"),
  require("./img/perro10.png")
];

const nombres = ["Bobby", "Peter", "Fox", "Brisa", "Goro", "Umma", "Apollo", "Daily", "Firulais", "Roger"];

const locations = [
  {
    latitude: -34.71863,
    longitude: -58.370963
  }
];

for (let i = 0; i < 10; i++) {
  buscados.push({
    nombre: nombres[i],
    foto: fotos[getRandomInt(0, 9)],
    location: getRandomLocation() //locations[i]
  });
}

export default {
  getBuscados: getBuscados,
  uploadBusqueda: uploadBusqueda
};
