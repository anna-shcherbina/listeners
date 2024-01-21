'use strict'

const textInput = document.getElementById('text');
const btn = document.getElementById('btn');
const square = document.querySelector('#square');
const range = document.getElementById('range');
const spanRange = document.getElementById('range-span');
const btnSquare = document.querySelector('#e_btn');
const circle = document.querySelector('#circle');

const getSquareColor = function () {

    square.style.backgroundColor = textInput.value;
}

btnSquare.style.display = 'none';

const changeСircle = function (event) {

    spanRange.textContent = event.target.value;
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
    console.dir(event.type);

}

btn.addEventListener('click', getSquareColor);
range.addEventListener('input', changeСircle);
range.addEventListener('change', changeСircle);

console.dir(circle);










