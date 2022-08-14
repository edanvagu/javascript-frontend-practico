//querySelectors
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');
const backArrowIcon = document.querySelector('.back-arrow-icon');
const cardsContainer = document.querySelector('.cards-container');

//eventListeners
navbarEmail.addEventListener('click',toggleMenuDesktop); // listener to toggle desktop menu
menuIcon.addEventListener('click', toggleMobileMenu); // listener to toggle mobile menu
shoppingCartIcon.addEventListener('click',toggleShoppingCart); // listener shopping cart clicking cart icon
backArrowIcon.addEventListener('click',toggleShoppingCart); // listener shopping cart clicking arrow icon


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

//Products list

const productsList = [];
const itemsAddedToShoppingCart = [];

//Product constructor

function productConstructor(name, price, image){
    this.name = name;
    this.price = price;
    this.image = image;
}

//Products instance

function instanceProducts(){    
    const product1 = new productConstructor("Bike", 120, "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    productsList.push(product1);

    const product2 = new productConstructor("TV", 250, "https://images.pexels.com/photos/8058637/pexels-photo-8058637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    productsList.push(product2);

    const product3 = new productConstructor("Laptop", 1000, "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg");
    productsList.push(product3);

    const product4 = new productConstructor("Desktop", 300, "https://images.pexels.com/photos/5490338/pexels-photo-5490338.jpeg");
    productsList.push(product4);

    const product5 = new productConstructor("Freezer", 600, "https://images.pexels.com/photos/6964157/pexels-photo-6964157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    productsList.push(product5);
}


//Render products
var numberOfProducts = 0;
function renderProducts(list){

    for (product of list) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
    
        const productImage = document.createElement("img");
        productImage.src = product.image;
    
        const productInfo = document.createElement("div");
        productInfo.className = "product-info";
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productFigure = document.createElement("figure");
    
        addToCartIcon = document.createElement("img");
        addToCartIcon.src = "./icons/bt_add_to_cart.svg";
    
        productFigure.appendChild(addToCartIcon);
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv,productFigure);
    
        productCard.append(productImage, productInfo);
    
        cardsContainer.append(productCard);
        numberOfProducts++;
    }
}

instanceProducts();
renderProducts(productsList);