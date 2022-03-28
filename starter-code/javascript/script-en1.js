const burgermenu = document.querySelector(".burger");;
const navbar= document.querySelector("#Nav-bar");;
burgermenu.addEventListener("click",() => {
    navbar.classList.toggle("openYourMenu")
})