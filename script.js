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
    let renderedMenu = `<h2>Hauptgerichte</h2>`;

    for (let index = 0; index < dishes.length; index++) {
        renderedMenu += templateMenu(index);
    }

    menuRef.innerHTML = renderedMenu;
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
