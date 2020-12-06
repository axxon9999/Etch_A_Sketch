


// Grid side size
let side = prompt('Enter the resolution (maximum 200): ', 64);
let cellNumber = side * side;

// create container

let div = document.createElement('div');
div.className = 'grid-container';
document.body.appendChild(div);
let container = document.querySelector(".grid-container");

// Create a button to: 1) Erase Board 2) Ask for size up to 

let button = document.createElement('button');
button.id = 'reset';
let body = document.querySelector('body');
body.insertBefore(button, div);
let buttonText = document.createTextNode("RESET");
button.appendChild(buttonText);
button.style.marginBottom = "20px";

// create the div grid

let cellID = 1;
for(let i = 0; i < cellNumber; i++) {
    let createRow = document.createElement('div');
    createRow.className = 'grid-item';
    createRow.id = 'element ' + i;
    container.appendChild(createRow);
    let element = document.getElementById("element " + i);
    element.style.paddingBottom = "37%";
    element.style.paddingTop = "37%";
    //let text = document.createTextNode(cellID);
    //createRow.appendChild(text);
    cellID++;
}

// style

// CSS h1

let title = document.querySelector('h1');
title.style.color = 'red';

// CSS grid

container.style = "display: grid;";
container.style.gridTemplateColumns = "repeat(" + side + ", auto)";
container.style.textAlign = "center";


// Hover elements
let randomColor;
let s = 255;
let r = 255;
let g = 255;
let b = 255;

container.addEventListener("mouseover", function(event) {
        let o = Math.round;
        let ra = Math.random;
        r = o(ra()*s);
        g = o(ra()*s)
        b = o(ra()*s)
        randomColor = 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
        event.target.style.backgroundColor = randomColor;
});

// container.addEventListener("mouseout", function(event) {
//      setTimeout(function() {
//          event.target.style.backgroundColor = "";
//      }, 1000);
// }, false);


// Button to erase board

button.addEventListener("click", function() {
    location.reload();
})

