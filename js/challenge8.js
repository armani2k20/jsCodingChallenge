function json() {

    let requestUrl = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let superHeroes = request.response;
        let jsonOutput = document.getElementById('jsonOutput');
        jsonOutput.innerHTML = superHeroes;
        console.log(superHeroes);
    }
}

json();