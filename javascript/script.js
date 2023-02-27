const menuBtn = document.getElementById("menu-icon");

const menu = document.getElementById("nav-menu");

menuBtn.addEventListener('click', function menuEvent() {
    menu.classList.toggle('active');
});