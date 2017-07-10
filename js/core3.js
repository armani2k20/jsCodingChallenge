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