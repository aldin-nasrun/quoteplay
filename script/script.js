// make random key and numkey

let randomKey = Math.floor(Math.random() * 10);
let numkey = randomKey;
//array to card
const quoteText = quote[numkey];
const quoteName = name[numkey];
//console.log(quote[randomKey]);
var arrayQuote = quoteText.split("");
var arrayName = quoteName.split("");
var timer;

function frameLooper() {
  if (arrayQuote.length > 0) {
    document.getElementById("quote").innerHTML += arrayQuote.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 70); /* change 70 for speed */
}

function frameLooper2() {
  if (arrayName.length > 0) {
    document.getElementById("name").innerHTML += arrayName.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper2()", 200); /* change 70 for speed */
}
let random = (frameLooper(), frameLooper2());
random;
// add random button function
const randomBtn = document
  .querySelector("#randomButton")
  .addEventListener("click", function () {
    location.reload();
    randombg();
  });
  background-image: url("https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/1.png");