console.log("Sveikas pasauli!")

// Engine Component
const engine1 = {
    type: "V8",
    horsepower: 400
};

const engine2 = {
    type: "Electric",
    horsepower: 300
};

// Wheels Component
const wheels1 = {
    size: 18,
    type: "Alloy"
};

const wheels2 = {
    size: 20,
    type: "Sport"
};

// Owner Component
const owner1 = {
    name: "John Doe",
    age: 35
};

const owner2 = {
    name: "Jane Smith",
    age: 28
};

// Car Objects (Using Composition)
const car1 = {
    brand: "Ford",
    model: "Mustang",
    year: 2022,
    engine: engine1,
    wheels: wheels1,
    owner: owner1
};

const car2 = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    engine: engine2,
    wheels: wheels2,
    owner: owner2
};

// Display Car Details
// console.log(car1);
// console.log(car2);

const cars = [car1, car2];

console.log(engine1);
console.log(engine1.type);
console.log(engine1.horsepower);
console.log();


console.log();
console.log(car1);
console.log(car1.engine);
console.log(car1.owner);

console.log();
console.log(car1.engine.type);
console.log(car1.wheels.type);

console.log("Array of cars");
console.log(cars);
console.log("2nd car");
// console.log(cars.car2) // netinka
console.log(cars[1]);


console.log("2nd car weel type");
console.log(cars[1].wheels.type);

cars.forEach((auto, index) => {
    console.log("car " + index);
    // postman: pm.expected(auto.barnd)....
    console.log("\tBrand: " + auto.brand);
    console.log("\tmodel: " + auto.model);
    console.log("\tengine type: "+ auto.engine.type);
});



