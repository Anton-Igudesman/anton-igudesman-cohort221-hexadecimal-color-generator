let startArray = ['red', 'green', 'blue'];
let promptArray = ['red', 'green', 'blue'];
let rgbArray = [];
let rgbString = '';
let apiColor;
//starting Hexcolor upon page open

function hexadecimal() {
  for (let i = 0; i <= 2;) {
    startArray[i] = promptArray[i];
    console.log(`prompt array: ${promptArray[i]}`);
    startArray[i] = +prompt(`Enter number between 0 and 255 for ${startArray[i]} value`, 'Enter here');
      if (startArray[i] >= 0 &&
          startArray[i] <= 255) {
         rgbArray.push(startArray[i].toString(16));
    console.log(rgbArray); 
            console.log(rgbString += startArray[i].toString(16));
            
            i++;
            
            
          }
          
           }
           rgbString = '#' + rgbString;
            console.log(rgbString);
            document.getElementById('color').style.backgroundColor = rgbString;
           
  }
function displayRGB() {
  let red = colorArray[0];
  let green = colorArray[1];
  let blue = colorArray[2];
  document.getElementById('red').textContent = `Red: ${red}`;
  document.getElementById('green').textContent = `Green: ${green}`;
  document.getElementById('blue').textContent = `Blue: ${blue}`;
}

let hex;
function randNum (min, max) {
    hex = Math.floor(Math.random() * (max - min + 1) + min);
    return hex;
}
let display;
let colorArray = [];
function randomColor() {
  colorArray = [];
  randNum(0, 255);
  colorArray.push(hex);
  randNum(0, 255);
  colorArray.push(hex);
  randNum(0, 255);
  colorArray.push(hex);
  console.log(colorArray);
  document.getElementById('color').style.backgroundColor = 
  `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
  displayRGB();
  fetch(`https://www.thecolorapi.com/id?rgb=${colorArray[0]},${colorArray[1]},${colorArray[2]}&format=json`)
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => document.getElementById('color-name').textContent = data.name.value);
  
  
  
}
function getName() {
  fetch(`https://www.thecolorapi.com/id?rgb=${colorArray[0]},${colorArray[1]},${colorArray[2]}&format=json`)
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => document.getElementById('color-name').textContent = data.name.value);
}


function incrementColorDown() {
  document.getElementById('color-name').textContent = '';
  let value = document.querySelector('input[name="rgb-value"]:checked').id;
  let numvalue = document.getElementById('increment').value;
  console.log(value);
  console.log(numvalue);

  switch(value) {
    case 'red':
      colorArray[0] -= numvalue;
      console.log(rgbArray[0]);
      break;
    case 'green':
      colorArray[1] -= numvalue;
      break;
    case 'blue':
      colorArray[2] -= numvalue;
      break;
  }
  let color = 'rgb(' + colorArray[0] + ',' + colorArray[1] + ',' + colorArray[2] + ')';
  console.log('color: ' + color);
  document.getElementById('color').style.backgroundColor = color;
  console.log(colorArray);
  displayRGB();
}

function incrementColorUp() {
  document.getElementById('color-name').textContent = '';
  let value = document.querySelector('input[name="rgb-value"]:checked').id;
  let numvalue = document.getElementById('increment').value;
  console.log(value);
  console.log(numvalue);

  switch(value) {
    case 'red':
      colorArray[0] += +numvalue;
      console.log(colorArray[0]);
      break;
    case 'green':
      colorArray[1] += +numvalue;
      break;
    case 'blue':
      colorArray[2] += +numvalue;
      break;
  }
  let color = 'rgb(' + colorArray[0] + ',' + colorArray[1] + ',' + colorArray[2] + ')';
  console.log('color: ' + color);
  document.getElementById('color').style.backgroundColor = color;
  console.log(colorArray);
  displayRGB();
}



let swatchArray = [];
function createSwatch() {
  let color = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
  swatchArray.push(1);
  console.log(swatchArray);
  let body = document.querySelector('body');
  let swatch = document.createElement('div');
  for (let i = 0; i < swatchArray.length; i++) {
  
  swatch.className = 'swatch';
  swatch.id = 'shade' + i;
  console.log(swatch.id);
  console.log(swatch);
  
  
  body.append(swatch);
  
  console.log(swatch.id);
  //console.log(hexColor);
}
  document.getElementById(swatch.id).style.backgroundColor = color;
  fetch(`https://www.thecolorapi.com/id?rgb=${colorArray[0]},${colorArray[1]},${colorArray[2]}&format=json`)
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => document.getElementById(swatch.id).textContent = data.name.value);
}


document.getElementById("generate").addEventListener('click', function () {
  randomColor()
});

console.log(rgbArray);

function jsonDataFetcher(){
jsonData = `https://www.thecolorapi.com/id?rgb=${colorArray[0]},${colorArray[1]},${colorArray[2]}&format=json`;
console.log(JSON.parse(jsonData));
}


