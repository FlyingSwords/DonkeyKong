var position = 300;
var bananan = document.getElementById("bananan");
var teller = 0;
console.log("teller");

var kong = document.getElementById("kong");
document.addEventListener('keypress', logKey);

kong.style.left = position + "px";


    function logKey(event) {
var x = event.which || event.keyCode;

if(x == 97) {
    stepsLeft();

}

if(x == 100) {
    stepsRight();
}

    var kongbox = getRectangle (kong);
    var banananbox = getRectangle (bananan);

    
if (kongbox.x + kongbox.width >= banananbox.x && kongbox.x <= banananbox.x + banananbox.width) {
          console.log ("Hmmm lekkere banaan");   
          moveBananan();
    }
}

function stepsLeft() {
    console.log("left");
    position -= 10;
    kong.style.left = position + "px";
}

function stepsRight() {
    console.log("Right");
    position += 10;
    kong.style.left = position + "px";    
}

function moveBananan() {
var bposition =  Math.floor((Math.random() * 1120) + 1);
console.log(bposition);
bananan.style.left = bposition + "px";

teller ++;

if (teller >= 10){
alert("Game Over");
location.reload("Game over");

}

}    

function getRectangle(div) {
var rect = div.getBoundingClientRect();
x = rect.left;
y = rect.top;
w = rect.width;
h = rect.height;
return rect;
}