/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

Infine stampa separatamente i 3 array.*/ 

const cars = [];

for (let i = 1; i <= 3; i++) {
    cars.push({
      marca: "bmw" ,
      modello: "touring",
      alimentazione: "benzina",
    });
  }

  for (let i = 1; i <= 3; i++) {
    cars.push({
      marca: "mercedes" ,
      modello: "suv",
      alimentazione: "diesel",
    });
  }

  for (let i = 1; i <= 2; i++) {
    cars.push({
      marca: "fiat" ,
      modello: "500",
      alimentazione: "elettrica",
    });
  }

  for (let i = 1; i <= 2; i++) {
    cars.push({
      marca:"toyota" ,
      modello: "suv",
      alimentazione: "diesel",
    });
  }

  const benzinaCars = cars.filter(car => car.alimentazione = "benzina");

  const dieselCars = cars.filter(car => car.alimentazione = "diesel");

  const otherCars = cars.filter(car => car.alimentazione = "elettrica");

  console.log(benzinaCars, dieselCars, otherCars);