//querySelectors
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".shopping-cart-detail");
const backArrowIcon = document.querySelector(".back-arrow-icon");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");

const overlayDiv = document.querySelector(".overlay");

//eventListeners
navbarEmail.addEventListener("click", toggleMenuDesktop); // listener to toggle desktop menu
menuIcon.addEventListener("click", toggleMobileMenu); // listener to toggle mobile menu
shoppingCartIcon.addEventListener("click", toggleShoppingCart); // listener shopping cart clicking cart icon
backArrowIcon.addEventListener("click", toggleShoppingCart); // listener shopping cart clicking arrow icon

let productsList = [];
let productsRendered = [];
let numberOfProducts = 0;
let productCard;
let productImage;
let productInfo;
let productInfoDiv;
let productPrice;
let productName;
let productFigure;
let addToCartIcon;
let closeProductDetailIcon;

//functions
function toggleMenuDesktop() {
  //toggle menu in desktop mode
  productDetail.classList.add("inactive");
  overlayDiv.classList.add("inactive");
  shoppingCart.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  //toggle menu in mobile mode
  productDetail.classList.add("inactive");
  overlayDiv.classList.add("inactive");
  shoppingCart.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  //toggle shopping cart
  productDetail.classList.add("inactive");
  overlayDiv.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCart.classList.toggle("inactive");
}

function showProductDetail() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCart.classList.add("inactive");
  productDetail.classList.remove("inactive");
  overlayDiv.classList.remove("inactive");

  renderProductDetail();

//   console.log(closeProductDetailIcon);
//   closeProductDetailIcon.addEventListener("click", closeProductDetail); // listener to close product detail
}

function renderProductDetail() {
  productsRendered.forEach((producto) => {
    producto.addEventListener("click", (e) => {
      productDetail.innerHTML = `
      <div class="producto-agregado">
        <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src=${e.path[0].src} alt=${e.path[1].children[1].children[0].children[1].textContent}>
        <div class="product-detail-info">
            <p>${e.path[1].children[1].children[0].children[0].textContent}</p>
            <p>${e.path[1].children[1].children[0].children[1].textContent}</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
            </button>
        </div>
      </div>`;
    });
  });
  closeProductDetailIcon = document.querySelector(".product-detail-close");
  console.log(productImage);
}

function closeProductDetail() {
  productDetail.classList.add("inactive");
  overlayDiv.classList.add("inactive");
}

//Product constructor

function productConstructor(name, price, image) {
  this.name = name;
  this.price = price;
  this.image = image;
}

//Products instance

function instanceProducts() {
  let product1 = new productConstructor(
    "Bike",
    120,
    "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  let product2 = new productConstructor(
    "TV",
    250,
    "https://images.pexels.com/photos/8058637/pexels-photo-8058637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  let product3 = new productConstructor(
    "Laptop",
    1000,
    "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg"
  );

  let product4 = new productConstructor(
    "Desktop",
    300,
    "https://images.pexels.com/photos/5490338/pexels-photo-5490338.jpeg"
  );

  let product5 = new productConstructor(
    "Freezer",
    600,
    "https://images.pexels.com/photos/6964157/pexels-photo-6964157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  productsList.push(product1, product2, product3, product4, product5);
}

//Render products

function renderProducts(list) {
  for (product of list) {
    productCard = document.createElement("div");
    productCard.className = "product-card";

    productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.addEventListener("click", showProductDetail);

    productInfo = document.createElement("div");
    productInfo.className = "product-info";

    productInfoDiv = document.createElement("div");

    productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    productName = document.createElement("p");
    productName.innerText = product.name;

    productFigure = document.createElement("figure");

    addToCartIcon = document.createElement("img");
    addToCartIcon.src = "./icons/bt_add_to_cart.svg";

    productFigure.appendChild(addToCartIcon);
    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productFigure);

    productCard.append(productImage, productInfo);

    cardsContainer.append(productCard);
    numberOfProducts++;
  }

  productsRendered = document.querySelectorAll(".product-card");
}

instanceProducts();
renderProducts(productsList);
