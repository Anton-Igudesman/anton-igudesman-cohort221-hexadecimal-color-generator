let startArray = ['red', 'green', 'blue'];
let promptArray = ['red', 'green', 'blue'];
let rgbArray = [];
let rgbString = '';

//starting Hexcolor upon page open
let startRed;
let startGreen;
let startBlue;
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
let hexColor = '';
function randomHexColor() {
    hexColor = '';
    randNum(0, 255);
    hexColor += hex.toString(16);
    randNum(0, 255);
    hexColor += hex.toString(16);
    randNum(0, 255);
    hexColor += hex.toString(16);
    hexColor = '#' + hexColor;
    document.getElementById('color').style.backgroundColor = hexColor;
   console.log(hexColor);
    

}
let hex;
function randNum (min, max) {
    hex = Math.floor(Math.random() * (max - min + 1) + min);
    return hex;
}

function incrementColorDown() {
  let value = document.querySelector('input[name="rgb-value"]:checked').id;
  let numvalue = document.getElementById('increment').value;
  console.log(value);
  console.log(numvalue);

  switch(value) {
    case 'red':
      rgbArray[0] -= numvalue;
      console.log(rgbArray[0]);
      break;
    case 'green':
      rgbArray[1] -= numvalue;
      break;
    case 'blue':
      rgbArray[2] -= numvalue;
      break;
  }
  let color = 'rgb(' + rgbArray[0] + ',' + rgbArray[1] + ',' + rgbArray[2] + ')';
  console.log('color: ' + color);
  document.getElementById('color').style.backgroundColor = color;
console.log(rgbArray);
let red = rgbArray[0];
let green = rgbArray[1];
let blue = rgbArray[2];
document.getElementById('red').textContent = `Red: ${red}`;
document.getElementById('green').textContent = `Green: ${green}`;
document.getElementById('blue').textContent = `Blue: ${blue}`;
}

function incrementColorUp() {
  let value = document.querySelector('input[name="rgb-value"]:checked').id;
  let numvalue = document.getElementById('increment').value;
  console.log(value);
  console.log(numvalue);

  switch(value) {
    case 'red':
      rgbArray[0] += +numvalue;
      console.log(rgbArray[0]);
      break;
    case 'green':
      rgbArray[1] += +numvalue;
      break;
    case 'blue':
      rgbArray[2] += +numvalue;
      break;
  }
  let color = 'rgb(' + rgbArray[0] + ',' + rgbArray[1] + ',' + rgbArray[2] + ')';
  console.log('color: ' + color);
  document.getElementById('color').style.backgroundColor = color;
console.log(rgbArray);
let red = rgbArray[0];
let green = rgbArray[1];
let blue = rgbArray[2];
document.getElementById('red').textContent = `Red: ${red}`;
document.getElementById('green').textContent = `Green: ${green}`;
document.getElementById('blue').textContent = `Blue: ${blue}`;
}

function convertHex(red, blue, green) {
  rgbArray = [red, blue, green];
  color = `rgb(${red}, ${blue}, ${green})`;
  
  document.getElementById('color').style.backgroundColor = color;
  
  console.log(rgbArray);

}

let swatchArray = [];
function createSwatch() {
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
  console.log(hexColor);
}
  document.getElementById(swatch.id).style.backgroundColor = hexColor;
  alert(color);
}

// hexadecimal();
document.getElementById("generate").addEventListener('click', function () {
  randomHexColor()
});
// incrementColor();
convertHex(197, 101, 255);
console.log(rgbArray);


