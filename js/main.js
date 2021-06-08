

let edward = document.querySelector('#edwardbox');
let micah = document.querySelector('#micahbox');
let gorb = document.querySelector('#gorbabox');

let clickedward = document.querySelector('#edwardlink');
let clickmicah = document.querySelector('#micahlink');
let clickgorba = document.querySelector('#gorbalink');


micah.classList.add("hidden");
gorb.classList.add("hidden");

function edwardswap() {
  edward.classList.remove("hidden");
  micah.classList.add("hidden");
  gorb.classList.add("hidden");
}
function micahswap() {
  micah.classList.remove("hidden");
  gorb.classList.add("hidden");
  edward.classList.add("hidden");
}
function gorbaswap() {
  gorb.classList.remove("hidden");
  micah.classList.add("hidden");
  edward.classList.add("hidden");
}

clickedward.addEventListener("click",edwardswap,false);
clickmicah.addEventListener("click",micahswap,false);
clickgorba.addEventListener("click",gorbaswap,false);
