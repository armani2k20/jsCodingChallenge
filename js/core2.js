// square root
function square(x){
    console.log(Math.sqrt(x));
};
square(10);

// sum of 3 numbers
function sum(a,b,c){
    console.log(a + b + c)
};
sum(3,6,9);

// person object
let person = {
    name: "Tom",
    age: 9,
    occupation: "Still Broke"
};

// increment person age on click
function ageUp(person){
    person.age ++;
    console.log(person.age);
};
document.write(person.age);

// button function
function popup(){
    alert("BUTTON WAS CLICKED");
};



