const headerEl = document.querySelector('.header');
window.addEventListener('scroll', () =>{
    if (window.scrollY >= 50){
        headerEl.classList.add('header-scrolled')
    } else if (window.scrollY <50){
        headerEl.classList.remove('header-scrolled')
    }
})

const burger = document.querySelector(".burger");
const header = document.querySelector("header");
const menu = document.querySelector(".link");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  header.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  header.classList.remove("active");
}