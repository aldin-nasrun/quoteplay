// make random key and numkey
let randomKey = Math.floor(Math.random() * 10);
let numkey = randomKey;
//array to card
const quoteText = (document.querySelector("#quote").innerHTML = quote[numkey]);
const quoteName = (document.querySelector(
  "#name"
).innerHTML = `-${name[numkey]}`);
//console.log(quote[randomKey]);
