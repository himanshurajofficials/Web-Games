
function play1() {
  var audio = new Audio("music/C4.mp3");
  audio.play()
}
function play2() {
  var audio = new Audio("music/D4.mp3");
  audio.play()
}
function play3() {
  var audio = new Audio("music/E4.mp3");
  audio.play()
}
function play4() {
  var audio = new Audio("music/F4.mp3");
  audio.play()
}
function play5() {
  var audio = new Audio("music/G4.mp3");
  audio.play()
}
function play6() {
  var audio = new Audio("music/A4.mp3");
  audio.play()
}
function play7() {
  var audio = new Audio("music/B4.mp3");
  audio.play()
}
function play8() {
  var audio = new Audio("music/C5.mp3");
  audio.play()
}
function play9() {
  var audio = new Audio("music/D5.mp3");
  audio.play()
}
function play10() {
  var audio = new Audio("music/E5.mp3");
  audio.play()
}


function playd1() {
  var audio = new Audio("music/Db4.mp3");
  audio.play()
}
function playd2() {
  var audio = new Audio("music/Eb4.mp3");
  audio.play()
}
function playd3() {
  var audio = new Audio("music/Gb4.mp3");
  audio.play()
}
function playd4() {
  var audio = new Audio("music/Ab4.mp3");
  audio.play()
}
function playd5() {
  var audio = new Audio("music/Bb4.mp3");
  audio.play()
}
function playd6() {
  var audio = new Audio("music/Db5.mp3");
  audio.play()
}
function playd7() {
  var audio = new Audio("music/Eb4.mp3");
  audio.play()
}

function play(event)
{
  var x=event.keyCode ;
  switch (x) {
    case 65: case 97:
      play1();
      break;
      case 83: case 115:
      play2();
      break;
      case 68: case 100:
      play3();
      break;
      case 70: case 102:
      play4();
      break;
      case 71: case 103:
      play5();
      break;
      case 72: case 104:
      play6();
      break;
      case 74: case 106:
      play7();
      break;
      case 75: case 107:
      play8();
      break;
      case 76: case 108:
      play9();
      break;
      case 59: case 91:
      play10();
      break;

      case 87: case 119:
      playd1();
      break;
      case 69: case 101:
      playd2();
      break;
      case 84: case 116:
      playd3();
      break;
      case 89: case 121:
      playd4();
      break;
      case 85: case 117:
      playd5();
      break;
      case 79: case 111:
      playd6();
      break;
      case 80: case 112:
      playd7();
      break;

    default:consol.log("press correct key");

  }
}
