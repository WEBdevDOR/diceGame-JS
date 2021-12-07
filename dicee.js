// var randNumber1 = Math.floor(Math.random() * 6) + 1;
// var setImgToNum1 = "images/dice" + randNumber1 + ".png";
// var randNumber2 = Math.floor(Math.random() * 6) + 1;
// var setImgToNum2 = "images/dice" + randNumber2 + ".png";
// document.querySelector(".img1").setAttribute("src", setImgToNum1);
// document.querySelector(".img2").setAttribute("src", setImgToNum2);

// if (randNumber1 > randNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!"
// } else if (randNumber1 < randNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!"
// } else(
//     document.querySelector("h1").innerHTML = "Draw!"
// )


var randNumber1 = Math.floor(Math.random() * 6) + 1;
var randNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = "images/dice" + randNumber1 + ".png";
var image2 = "images/dice" + randNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randNumber1 > randNumber2) {
    document.querySelector("h1").innerHTML = "❤ Player 1 Wins!"
} else if (randNumber1 < randNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ❤"
} else(
    document.querySelector("h1").innerHTML = "Draw!"
)