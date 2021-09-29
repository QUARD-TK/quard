var myBirthTime= new Date(2022,0,17,9,0);

function updateParagraph(){
var now= new Date();
var second=(myBirthTime.getTime()-now.getTime());

document.getElementById("birth-time").innerText='2021年1月17日まで'　
+ Math.floor(second/1000/60/60/24)　+　'日'　
+ Math.floor(second/1000/60/60)%24 +　'時間'
+ Math.floor(second/1000/60)%60 + '分'
+ Math.floor(second/1000)%60 +'秒';}

document.getElementById("birth-time").style.fontSize="xx-large";
document.getElementById("birth-time").style.backgroundColor="white";
document.getElementById("birth-time").style.width="contain";


setInterval(updateParagraph,50);

