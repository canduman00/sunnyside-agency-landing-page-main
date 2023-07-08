const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".primary-navigation");

hamburger.addEventListener("click", () =>{
    nav.classList.toggle("active");
})