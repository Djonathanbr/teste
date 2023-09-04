const icone = document.querySelector("#menu");
const boxNav = document.querySelector("#navegacao")


icone.addEventListener('click', () => {
    boxNav.classList.toggle("navegacao")
    if (boxNav.classList.contains("navegacao")) {
        icone.innerHTML = "menu"
    } else {
        icone.innerHTML = "Close"
    }
})