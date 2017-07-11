// CODING CHALLENGE 8
let requestUrl = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function () {
    let superHeroes = request.response;
    let jsonOutput = document.getElementById('jsonOutput');
    let jsonString = JSON.stringify(superHeroes);
    jsonOutput.innerHTML = jsonString;
}

//CODING CHALLENGE 9
let newRequestUrl = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
let newRequest = new XMLHttpRequest();
newRequest.open('GET', newRequestUrl);
newRequest.responseType = 'json';
newRequest.send();

newRequest.onload = function () {
    let kings = newRequest.response;
    let jsonOutput2 = document.getElementById('jsonOutput2');
    let jsonString2 = JSON.stringify(kings[1].nm);
    console.log(jsonString2);
    jsonOutput2.innerHTML = jsonString2;
    search(kings, "House of Normandy");
}

function search(kings, house) {

    let searchField = document.getElementById('search');
    // kings[i].hse == house
    for (let i in kings) {
        if (searchField.value == house) {
            let kingsName = kings[i].nm;
            console.log(kingsName);
            jsonOutput2.innerHTML = kingsName;
        } else {
            console.log("Nothing");
        }
    }

}