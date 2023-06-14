var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.querySelector('.random');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomGradient() {
  let randomColor1 =
    '#' + Math.floor((Math.random() * (1 << 24)) | 0).toString(16);
  let randomColor2 =
    '#' + Math.floor((Math.random() * (1 << 24)) | 0).toString(16);

  color1.value = randomColor1;
  color2.value = randomColor2;

  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

window.addEventListener('load', randomGradient); //display the colors when the page first loads
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
random.addEventListener('click', randomGradient);
