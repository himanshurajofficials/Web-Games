var arr = [];

function playGreen() {
  var audio = new Audio("music/green.mp3");
  audio.play();

}

function playYellow() {
  var audio = new Audio("music/yellow.mp3");
  audio.play();
}

function playRed() {
  var audio = new Audio("music/red.mp3");
  audio.play();
}

function playBlue() {
  var audio = new Audio("music/blue.mp3");
  audio.play();
}

for (var j = 0; j < 4; j++) {
  document.querySelectorAll(".qqq")[j].addEventListener("click", function mmm() {
    var b = this.innerHTML;
    arr.push(b);
  })
}
var ct1,ct2;
var match = 1;
var i = 0;
var arr1 = [];
var v = 0;
function gggg(){
  document.querySelector("body").style.backgroundImage= "url('ccc.jpg')";
window['i'] = 0
window['match'] = 1;
window['arr1'] = [];
window['v'] = 0;
 document.querySelectorAll(".qqq")[0].style.fontSize = "25px";
 document.querySelectorAll(".qqq")[1].style.fontSize = "25px";
 document.querySelectorAll(".qqq")[2].style.fontSize = "25px";
 document.querySelectorAll(".qqq")[3].style.fontSize = "25px";
gen();
}

function gen() {
  arr.length = 0;
  var x = Math.floor(Math.random() * 4);
  document.querySelector("h1").innerHTML = "Your Curent Level is " + (++i);
  var m = document.querySelectorAll(".qqq")[x].innerHTML;
  v = document.querySelectorAll(".qqq")[x]
  v.style.fontSize = "45px";
  v.style.color = "white";
  if (m == "red") {
    playRed();
  } else if (m == "blue") {
    playBlue();
  } else if (m == "green") {
    playGreen();
  } else {
    playYellow();
  }
  arr1.push(m);

}
function myfun() {
  v.style.fontSize = "25px";
  v.style.color = "black";
  for (var z = 0; z < arr.length; z++) {
    if (arr[z] == arr1[z]) {
      match = 1;
      continue;
    } else {
      match = 0;
      break;
    }
  }
  if (match == 1) {
    gen();
  } else if (match == 0) {

      document.querySelector("body").style.backgroundImage="linear-gradient(to right,pink, darkred)";
      document.querySelector("h1").innerHTML = "Wrong  Sequence !!  GAME OVER";
      document.querySelector(".wee").innerHTML = "Restart";
      wrong();
      function wrong() {
        var audio = new Audio("music/wrong.mp3");
        audio.play();
      }

  }
}
