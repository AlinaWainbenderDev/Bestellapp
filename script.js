let cart = [];

function init(){
    renderMenu();
    renderCart();
}

function toggleCart(){
    let cartRef = document.getElementById("cart");
    cartRef.classList.toggle("open");
    templateMobileCart();
}

function templateMobileCart(){
    const buttonRef = document.getElementById('closeCartButton');
    const cartRef = document.getElementById('cart');
    
    if(cartRef.classList.contains('open')){
         buttonRef.textContent = 'Warenkorb schließen';
    } else{
    buttonRef.textContent=`Warenkorb ansehen`;
    }
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

function renderCart(){
    let contentCartRef = document.getElementById("contentCart");
    contentCartRef.innerHTML = "";

    const cartItemSums = getCartItemTotals();
    const total = calculateCartTotal();

      for (let index = 0; index < cart.length; index++) {
        let item = cart[index];
        contentCartRef.innerHTML += templateCartItem(item, index, cartItemSums[index]);
    }

    document.getElementById('cartTotal').innerHTML = `Gesamt: ${total.toFixed(2)} €`;
    
    // document.getElementById('mobileCartAmount').textContent = cart.reduce((sum, item) => sum + item.amount, 0);
    // document.getElementById('mobileCartTotal').textContent = `${total.toFixed(2)} €`;
}

function increaseAmountCart(indexInCart){
    if (cart[indexInCart].amount < 10) {
        cart[indexInCart].amount++;
    }
    renderCart();
}

function addToCart(index){
    let indexInCart = isInCart(index); 

    if (indexInCart !== -1) {
        increaseAmountCart(indexInCart);
    } else {
         cart.push({ 
            dishIndex: index,
            name: dishes[index].name, 
            price: dishes[index].price,
            amount: 1 
        });
    }

    renderCart();
    if (window.innerWidth >= 920) {
    document.getElementById('cart').classList.add('open');
    }
} 

function isInCart(dishIndex){
    for (let index = 0; index < cart.length; index++) {
        if(cart[index].dishIndex === dishIndex){
            return index;
        }
    }
    return -1; 
}

function reduceAmountCart(index){

    if (cart[index].amount <= 1) {
    removeDishFromCart(index);
    } else {
    cart[index].amount--;
    }

    renderCart();
}

function removeDishFromCart(index){
    cart.splice(index, 1);
    renderCart(); 
}

function getCartItemTotals(){
    const totals = [];
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index]
        totals.push(item.price * item.amount);
    }
    return totals;
}

function calculateCartTotal(){
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const cartItem = cart[index];
        total += cartItem.price * cartItem.amount; 
    }
    return total;
}