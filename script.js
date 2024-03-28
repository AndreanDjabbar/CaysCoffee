// Toogle class active | Untuk mengadakan yang tidak ada

const navbarNav = document.querySelector(".navbar-nav")

document.querySelector("#humburger-menu").onclick = () => {
    navbarNav.classList.toggle("active")
}

// Klik di luar side bar untuk close nav dari humburger
const humburger = document.querySelector("#humburger-menu")

document.addEventListener("click", function(event) {
    if (!humburger.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove("active")
    }
})