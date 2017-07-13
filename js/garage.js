let damages = ['door','bonnet','window','tyre','engine','seat','paint','air bag'];

let car = {
    license: "",
    model: "",
    damaged: true,
    price: 0,
};

let garage = [];

function addCars(){
    car.license = document.getElementById('license').value;
    car.model = document.getElementById('model').value;
    car.damaged = document.getElementById('disabled').value;

    garage.push(car.license, car.model);
    addToTable(car);
}

function addToTable(car){
    document.getElementById('carDisplay').innerHTML += "<tr><td>"+car.license+"</td><td>"+car.model+"</td><td>"+car.damaged+"</td></tr>";
}