var name1 , name2;
function diceGame1()
{
  var name3=prompt("Enter player 1 name");
  name3=name3.slice(0,1).toUpperCase()+name3.slice(1,name3.length).toLowerCase();
  var name4=prompt("Enter player 2 name");
  name4=name4.slice(0,1).toUpperCase()+name4.slice(1,name4.length).toLowerCase();
window['name1']=name3;
window['name2']=name4;
}
function diceGame()
{
  document.querySelector("#aaa1").innerHTML=(name1 + "'s Dice =>");
  document.querySelector("#aaa2").innerHTML=(name2 +"'s Dice =>");
var arr = ["dice1.png" , "dice2.png" , "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var num=Math.floor(Math.random()*6);
var num1=Math.floor(Math.random()*6);
var arr1=arr[num];
var arr2=arr[num1];
document.querySelector("#player1").src=arr1;
document.querySelector("#player2").src=arr2;
if (num>num1){
  document.querySelector("h1").innerHTML=(name1+" Wins ");
} else if (num<num1)
 {
  document.querySelector("h1").innerHTML=(name2+"  Wins ");
} else
{
  document.querySelector("h1").innerHTML=("Its a Tie  ");
}
}
