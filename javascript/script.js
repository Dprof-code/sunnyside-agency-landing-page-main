const menuBtn = document.getElementById("menu-icon");

const menu = document.getElementById("nav");

menuBtn.addEventListener('click', function menuEvent() {
    menu.classList.toggle('active');
});