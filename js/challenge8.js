// CODING CHALLENGE 8
let kings;
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
};

//CODING CHALLENGE 9
let newRequestUrl = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
let newRequest = new XMLHttpRequest();
newRequest.open('GET', newRequestUrl);
newRequest.responseType = 'json';
newRequest.send();

newRequest.onload = function () {
    kings = newRequest.response;
    let jsonOutput2 = document.getElementById('jsonOutput2');
};

function search(kings) {
    jsonOutput2.innerHTML = "";
    let searchField = document.getElementById('searchField').value.toUpperCase();
    // kings[i].hse == house
    for (let i in kings) {
        let kingsYrs = kings[i].yrs.toUpperCase();
        let kingsName = kings[i].nm.toUpperCase();
        let kingsCity = kings[i].cty.toUpperCase();
        let kingsHouse = kings[i].hse.toUpperCase();
        if (kingsHouse.includes(searchField) || kingsName.includes(searchField) || kingsCity.includes(searchField) || searchField == kingsYrs || (searchField >= kingsYrs.split("-")[0] && searchField <= kingsYrs.split("-")[1])) {
            console.log(kings[i]);
            jsonOutput2.innerHTML += "name: " + kings[i].nm + "<br />";
            jsonOutput2.innerHTML += "city: " + kings[i].cty + "<br />";
            jsonOutput2.innerHTML += "house: " + kings[i].hse + "<br />";
            jsonOutput2.innerHTML += "year: " + kings[i].yrs + "<br /><br />";
        }
    }
    if (!jsonOutput2.innerHTML) {
        jsonOutput2.innerHTML = "nothing";
        console.log("nothing");
    }

}