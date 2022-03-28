const menu =document.querySelector(".nav-bar");
const burgermenu = document.querySelector(".burger")
burgermenu.addEventListener("click",() => {
    menu.classList.toggle("openYourMenu")
})