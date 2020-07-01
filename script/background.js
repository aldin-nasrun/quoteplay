// function randomBG() {
//   var randommath = Math.floor(Math.random() * 7)+0;
//   var ArrayImg [
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/1.png');",
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/2.png');",
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/3.png');",
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/4.png');",
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/5.png');",
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/6.png');",
//       "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/7.png');"
//   ];
//   document.querySelector('.polaroid')style.backgroundImage=ArrayImg[randommath];
// }
// randomBG();
let randomK = Math.floor(Math.random() * 7);
let ranKey = randomK;
const polaroid = document.querySelector(".polaroid");
const bigSize = [
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/1.png');",
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/2.png');",
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/3.png');",
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/4.png');",
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/5.png');",
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/6.png');",
  "url('https://raw.githubusercontent.com/aldin-nasrun/quoteplay/master/img/7.png');",
];
function randombg() {
  polaroid.style.backgroundImage = bigSize[ranKey];
  console.log(bigSize[ranKey]);
}
// randombg();
