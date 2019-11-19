//changing background color of the O
var el= document.getElementById('O');
el.addEventListener("mouseover", ChangeOBg);
el.addEventListener("mouseout", ChangeBackOBg);
function ChangeOBg() {
    el.style.backgroundColor = "#64c26f";

}
function ChangeBackOBg() {
    el.style.backgroundColor = "black";
}
//changing height of the stem of the Y
var el1= document.getElementById('Y3');
el1.addEventListener("click", AddAnimation);
function AddAnimation() {
    el1.classList.add("animation");
}
//copying the entire word in random position on page
// function makeWord() {
//   var btn = document.createElement("BUTTON");
//   var container = document.getElementsByClassName('word');
//   for(i)
//   console.log('word')
//   document.body.appendChild(btn);
// }
// makeWord();

var word = document.getElementById("container");
var word2 = document.getElementById("container2");

console.log ("working", container);

function blue(){
	document.body.style.backgroundColor = "blue";
  console.log(document.body.style.backgroundColor); // blue
};

function red(){
	document.body.style.backgroundColor = "red";
  console.log(document.body.style.backgroundColor); // blue
};

function move(){
    document.getElementById("container2").style.transform = "translate(50%)";
    console.log("hey")
}

function long(){
    document.getElementById("P2").style.height="600px";
}

word.addEventListener("mouseenter", red);
word.addEventListener("mouseout", blue);
word2.addEventListener("click", move);
word.addEventListener("click",long);
// word.addEventListener("click", blue);

// word.addEventListener('mouseout', function() {
//     this.style.backgroundColor = "white";
//     this.style.classList.remove('animation')
//     var div = document.getElementById('exclamation');
//     div.style.display = 'none';
// })
