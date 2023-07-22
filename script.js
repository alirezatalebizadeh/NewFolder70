let menu = document.querySelector('.menu')
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i");


function showMenu() {
    console.log('click')

    if (menuBtnIcon.classList.contains("fa-bars")) {
        menu.style.left = '0'
        menuBtnIcon.classList = 'fa fa-times'
    } else {
        menu.style.left = '-256px'
        menuBtnIcon.classList = 'fa fa-bars'
    }
}






menuBtn.addEventListener("click", showMenu)


