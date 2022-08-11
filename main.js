//querySelectors
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');
const backArrowIcon = document.querySelector('.back-arrow-icon');

//eventListeners
navbarEmail.addEventListener('click',toggleMenuDesktop); // listener to toggle desktop menu
menuIcon.addEventListener('click', toggleMobileMenu); // listener to toggle mobile menu
shoppingCartIcon.addEventListener('click',toggleShoppingCart); // listener shopping cart
backArrowIcon.addEventListener('click',toggleShoppingCart); // listener shopping cart

//functions
function toggleMenuDesktop(){ //toggle menu in desktop mode
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){ //toggle menu in mobile mode
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){ //toggle shopping cart
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.toggle('inactive');
}