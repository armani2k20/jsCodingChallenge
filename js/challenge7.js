let textarea = document.getElementById("textarea1");
let addParaBtn = document.getElementById("addPara");

function para() {
    let output = document.getElementById('output');
    let p = document.createElement("p");
    p.id = "paraText"
    let text = document.createTextNode("This is a new paragraph.");
    p.appendChild(text);
    output.appendChild(p);
    addParaBtn.disabled = true;
    textarea.disabled = false;
};

function changeTxt() {
    let textBox = document.getElementById("textarea1");
    newText = document.getElementById("paraText").innerHTML = textBox.value;
};

function reset() {
    newText = document.getElementById("paraText").innerHTML = "";
    newText.value = " ";
    addParaBtn.disabled = false;
    textarea.disabled = true;
};