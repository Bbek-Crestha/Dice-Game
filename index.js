//for first image
var random1 = Math.random();
random1 = Math.floor(random1 * 6) + 1;

var randomImage1 = "images/dice/dice-" + random1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);



// for second image
var random2 = Math.random();
random2 = Math.floor(random2 * 6) + 1;

var randomImage2 = "images/dice/dice-" + random2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2);

if(random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if(random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}