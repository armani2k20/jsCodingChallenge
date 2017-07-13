let damages = ['door','bonnet','window','tyre','engine','seat','paint','air bag'];

let car = {
    license: "",
    model: "",
    damaged: true,
    price: 0,
};

let garage = [];
let fixedCars = [];

function addCars(){
    car.license = document.getElementById('license');
    car.model = document.getElementById('model');
    car.damaged = document.getElementById('disabled');

    car.license.innerHTML = "";
    car.model.innerHTML = "";

    garage.push(car.license, car.model);
    addToTable(car);
}

function addToTable(car){
    document.getElementById('garageCarDisplay').innerHTML += "<tr><td id ='clicense'>"+car.license.value+"</td><td id ='cmodel'>"+car.model.value+"</td><td id ='cdamaged'>"+car.damaged.value+"</td></tr>";
}