document.querySelector("#olandshveden").addEventListener("click", olandstext);
document.querySelector("#popup1").addEventListener("click", olandsremove);
document.querySelector("#hvedegraham").addEventListener("click", hvedegrahamtext);
document.querySelector("#popup2").addEventListener("click", hvedegrahamremove);
document.querySelector("#emmer").addEventListener("click", emmertext);
document.querySelector("#popup3").addEventListener("click", emmerremove);
document.querySelector("#rug").addEventListener("click", rugtext);
document.querySelector("#popup4").addEventListener("click", rugremove);
document.querySelector("#guldblomme").addEventListener("click", guldblommetext);
document.querySelector("#popup5").addEventListener("click", guldblommeremove);

function olandstext() {
  console.log(this);
  document.getElementById("popup1").style.display = "block";
  document.getElementById("popup-wrapper1").style.display = "block";
}

function olandsremove() {
  console.log(this);
  document.getElementById("popup1").style.display = "none";
  document.getElementById("popup-wrapper1").style.display = "none";
}

function hvedegrahamtext() {
  console.log(this);
  document.getElementById("popup2").style.display = "block";
  document.getElementById("popup-wrapper2").style.display = "block";
}
function hvedegrahamremove() {
  console.log(this);
  document.getElementById("popup2").style.display = "none";
  document.getElementById("popup-wrapper2").style.display = "none";
}

function rugtext() {
  console.log(this);
  document.getElementById("popup4").style.display = "block";
  document.getElementById("popup-wrapper4").style.display = "block";
}
function rugremove() {
  console.log(this);
  document.getElementById("popup4").style.display = "none";
  document.getElementById("popup-wrapper4").style.display = "none";
}

function emmertext() {
  console.log(this);
  document.getElementById("popup3").style.display = "block";
  document.getElementById("popup-wrapper3").style.display = "block";
}
function emmerremove() {
  console.log(this);
  document.getElementById("popup3").style.display = "none";
  document.getElementById("popup-wrapper3").style.display = "none";
}

function guldblommetext() {
  console.log(this);
  document.getElementById("popup5").style.display = "block";
  document.getElementById("popup-wrapper5").style.display = "block";
}
function guldblommeremove() {
  console.log(this);
  document.getElementById("popup5").style.display = "none";
  document.getElementById("popup-wrapper5").style.display = "none";
}
