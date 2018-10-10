//// BURGER MENU ////
var myBurger = document.querySelector(".burger");
var myNav = document.querySelector("nav");
myBurger.addEventListener("click", function(event){
  myNav.classList.toggle("visible");
  myBurger.classList.toggle("active");
})
