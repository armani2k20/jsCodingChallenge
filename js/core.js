// CHALLENGE 1
let X = "Hello World";

document.write(X);
alert(X);
console.log(X);

// CHALLENGE 2
// square root
function square(x) {
    console.log(Math.sqrt(x));
};
square(10);

// sum of 3 numbers
function sum(a, b, c) {
    console.log(a + b + c)
};
sum(3, 6, 9);

// person object
let person = {
    name: "Tom",
    age: 9,
    occupation: "Still Broke"
};

function ageCheck(person) {
    if (person.age >= 20 && person.age <= 40) {
        console.log("Age OK!");
    } else {
        console.log("Person is either too old or too young!");
    }
}

// increment person age on click
function ageUp(person) {
    person.age++;
    console.log(person.age);
};
document.write(person.age);

// button function
function popup() {
    alert("BUTTON WAS CLICKED");
};

// CHALLNGE 3
let msg = 'He said ' + "My name is elliot";
console.log(msg.toLocaleUpperCase());

// adding numbers and strings
function addString(x, msg) {
    console.log(x + msg);
};
addString(3 + " ", "Everyone");

function array(list) {
    // array with 3 strings
    list = ["I", "Am", "Hungry"];

    // add element to array
    list.push("Burger!!!");

    // remove last value from array
    list.splice(-1, 1);

    console.log(list);
};
array();

// CHALLENGE 5 & 6
function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else{
            console.log(i);
        }
    };
};
fizzBuzz();

function mash(num){
    while(num != 1){
        if(num % 3 === 0){
            num = num / 3
            console.log(num);
        }
        else if(num % 3 === 1){
            console.log(num -=1);
        }
        else if(num % 3 === 2){
            console.log(num += 1);
        }
    }
}
mash(500);

// function para(){
//     document.createElement("p");
//     var text = document.createTextNode("This is a new paragraph.");
//     para.appendChild(text);
// };