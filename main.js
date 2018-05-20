/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(50, 150);
ctx.stroke();


//poly [x,y, x,y, x,y.....];
var poly=[ 5,5, 100,50, 50,100, 10,90 ];
var canvas=document.getElementById("myCanvas")
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#f00';

ctx.beginPath();
ctx.moveTo(poly[0], poly[1]);
for( item=2 ; item < poly.length-1 ; item+=2 ){ctx.lineTo( poly[item] , poly[item+1] )}

ctx.closePath();
ctx.fill();
*/

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
    console.log("From submit: " + form.x_coordinate_1.value);
  }

var inputs = document.getElementById("")

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
