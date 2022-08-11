const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navbarEmail.addEventListener('click',toggleMenu);

function toggleMenu(){
    desktopMenu.classList.toggle('inactive');
}