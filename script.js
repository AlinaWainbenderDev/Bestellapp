function init(){
    renderMenu();
    renderCart();
}

function toggleCart(){
    let cartRef = document.getElementById("cart");
    cartRef.classList.toggle("open");
    templateMobileCart();
}

function toggleHamburgerMenu() {
  const respMenu = document.getElementById('respMenu');
  respMenu.classList.toggle("show");
}

function renderMenu(){
    let menuRef = document.getElementById('menu');
    let renderedMenu = `<h2>Hauptgerichte</h2>`;

    for (let index = 0; index < dishes.length; index++) {
        renderedMenu += templateMenu(index);
    }

    menuRef.innerHTML = renderedMenu;
}
