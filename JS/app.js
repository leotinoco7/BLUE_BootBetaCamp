const btn_1_add = document.getElementById("btn_1");
const btn_2_add = document.getElementById("btn_2");
const btn_3_add = document.getElementById("btn_3");

let lista1 = [];
let lista2 = [];
let lista3 = [];

btn_1_add.addEventListener("click", function(){
    const li = document.createElement("li");
    const inputValue = document.getElementById("texto1").value;
    const taskText = document.createTextNode(inputValue);
    document.querySelector("#texto1").value = "";

    li.appendChild(taskText);

    if (inputValue === "") {
        alert("Você deve digitar algum texto para adicionar!");
    } else {
        document.getElementById("lista1").appendChild(li);
        lista1.push(taskText);
    }
});
btn_2_add.addEventListener("click", function(){
    const li = document.createElement("li");
    const inputValue = document.getElementById("texto2").value;
    const taskText = document.createTextNode(inputValue);
    document.querySelector("#texto2").value = "";

    li.appendChild(taskText);

    if (inputValue === "") {
        alert("Você deve digitar algum texto para adicionar!");
    } else {
        document.getElementById("lista2").appendChild(li);
        lista2.push(taskText);
    }
});
btn_3_add.addEventListener("click", function(){
    const li = document.createElement("li");
    const inputValue = document.getElementById("texto3").value;
    const taskText = document.createTextNode(inputValue);
    document.querySelector("#texto3").value = "";

    li.appendChild(taskText);

    if (inputValue === "") {
        alert("Você deve digitar algum texto para adicionar!");
    } else {
        document.getElementById("lista3").appendChild(li);
        lista3.push(taskText);
    }
});