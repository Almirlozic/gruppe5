document.querySelector("#olandshveden").addEventListener("click", olandstext);
document.querySelector("#closePopup1").addEventListener("click", olandsremove);
document.querySelector("#popup-wrapper1").addEventListener("click", olandsremove);
document.querySelector("#hvedegraham").addEventListener("click", hvedegrahamtext);
document.querySelector("#closePopup2").addEventListener("click", hvedegrahamremove);
document.querySelector("#popup-wrapper2").addEventListener("click", hvedegrahamremove);
document.querySelector("#emmer").addEventListener("click", emmertext);
document.querySelector("#closePopup3").addEventListener("click", emmerremove);
document.querySelector("#popup-wrapper3").addEventListener("click", emmerremove);
document.querySelector("#rug").addEventListener("click", rugtext);
document.querySelector("#closePopup4").addEventListener("click", rugremove);
document.querySelector("#popup-wrapper4").addEventListener("click", rugremove);
document.querySelector("#guldblomme").addEventListener("click", guldblommetext);
document.querySelector("#closePopup5").addEventListener("click", guldblommeremove);
document.querySelector("#popup-wrapper5").addEventListener("click", guldblommeremove);

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
