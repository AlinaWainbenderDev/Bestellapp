function init(){
    renderMenu();
    loadCartFromLocalStorage();
    updateCart();
}

function updateCart() {
    renderCart();
    saveCartToLocalStorage();
}

function toggleCart(){
    document.getElementById("cart").classList.toggle("open");
    updateMobileCart();
}

function toggleHamburgerMenu() {
  document.getElementById('respMenu').classList.toggle("show");
}

function renderMenu(){
    let menuRef = document.getElementById('menu');
    let renderedMenu = "";

    renderedMenu += renderMainDishes();
    renderedMenu += renderSideDishes();
    renderedMenu += renderDrinks();

    menuRef.innerHTML = renderedMenu;
}

function renderMainDishes(){
    let html = `<h2 id="mainDishes">Hauptgerichte</h2>`;
    for (let index = 0; index < dishes.mainDishes.length; index++) {
        html += templateMenu('mainDishes', index);
    }
    return html;
}

function renderSideDishes(){
    let html = `<h2 id="sideDishes">Beilagen</h2>`;
    for (let index = 0; index < dishes.sideDishes.length; index++) {
        html += templateMenu('sideDishes', index);
    }
    return html;
}

function renderDrinks(){
    let html = `<h2 id="drinks">Getränke</h2>`;
    for (let index = 0; index < dishes.drinks.length; index++) {
        html += templateMenu('drinks', index);
    }
    return html;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        renderCart();
    }
}
