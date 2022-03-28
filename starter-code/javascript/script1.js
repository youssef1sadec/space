const burgermenu = document.querySelector(".burger")
const navmob = document.querySelector(".nav")
burgermenu.addEventListener("click",() => {
    navmob.classList.toggle("moblieOpen")
})