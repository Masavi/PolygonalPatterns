/* ------------- GLOBAL VARIABLES ----------------*/

var xCoordinates = [];
var yCoordinates = [];

var i = 1; /* Set Global Variable i */
function increment(){
i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
----------------------------------------------------------------------------

Form submit and processing

----------------------------------------------------------------------------
*/

var form = document.getElementById("coordinates-form");
  form.onsubmit = function(e){
    e.preventDefault();

    // Obtenemos todos los inputs del usuario
    var inputs = document.getElementsByTagName('input');
    var inputsLength = inputs.length - 1;

    // Limpiamos los arreglos para introducir las coordenadas X y Y
    xCoordinates = [];
    yCoordinates = [];

    // Recorremos los resultados
    for (var i = 0; i < inputsLength; i++)
    {
      // La primera mitad corresponde a las coordenadas X
      if (i < (inputsLength/2) )
      {
          xCoordinates.push(inputs[i].value);
          // console.log("Coordenada x" + (i+1) + " = " + inputs[i].value);
      }

      // La segunda mitad corresponde a las coordenadas Y
      else  yCoordinates.push(inputs[i].value);
            // console.log("Coordenada y" + (i - (inputsLength/2) + 1) + " = " + inputs[i].value);

    }
    // Checamos que los arreglos se hayan llenado satisfactoriamente.
    console.log(xCoordinates);
    console.log(yCoordinates);

    /*
    ----------------------------------------------------------------------------

    Canvas and pattern generator

    ----------------------------------------------------------------------------
    */

    // Inicializamos  el canvas
    //poly [x,y, x,y, x,y.....];
    var poly = [];
    var canvas=document.getElementById("myCanvas")
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f00';

    // Llenamos el arreglo del polígono a dibujar
    for (var i = 0; i <= xCoordinates.length; i++)
    {
      poly.push(xCoordinates[i]);
      poly.push(yCoordinates[i]);
    }

    // Procedemos a pintar la figura
    ctx.beginPath();
    ctx.moveTo(poly[0], poly[1]);
    for( item=2 ; item < poly.length-1 ; item+=2 ){ctx.lineTo( poly[item] , poly[item+1] )}

    ctx.closePath();
    ctx.fill();
  }

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the "Add input" button

----------------------------------------------------------------------------
*/

function addInput(){

// ---------------------- X COORDINATE NEW INPUT ---------------------------
var a = document.createElement('div');
var b = document.createElement("INPUT");
var c = document.createElement("p");

increment();

// P attributes and text
c.setAttribute("class", "coordinate-input-text");
c.innerHTML = i;

// Input attributes
b.setAttribute("class", "coordinate-input-field");
b.setAttribute("type", "number");
b.setAttribute("Name", "x_coordinate_" + i);

// Div attributes
a.appendChild(c);
a.appendChild(b);
a.setAttribute("class", "coordinate-input-div");

// Add to html
document.getElementById("myFormX").appendChild(a);


// ---------------------- Y COORDINATE NEW INPUT ---------------------------
var x = document.createElement('div');
var y = document.createElement("INPUT");
var z = document.createElement("p");

// P attributes and text
z.setAttribute("class", "coordinate-input-text");
z.innerHTML = i;

// Input attributes
y.setAttribute("class", "coordinate-input-field");
y.setAttribute("type", "number");
y.setAttribute("Name", "y_coordinate_" + i);

// Div attributes
x.appendChild(z);
x.appendChild(y);
x.setAttribute("class", "coordinate-input-div");

// Add to html
document.getElementById("myFormY").appendChild(x);

}

/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}
