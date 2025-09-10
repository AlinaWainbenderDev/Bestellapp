let cart = [];

function init(){
    renderMenu();
    renderCart();
}

function toggleOverlay(){
    let cartRef = document.getElementById("cart");
    cartRef.classList.toggle("open")
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
}

function addToCart(index){
    let dish = dishes[index];
    let indexInCart = isInCart(dish.name); 

    if (indexInCart !== -1) {
        if (cart[indexInCart].amount < 10) {
            cart[indexInCart].amount++;
        }
    } else {
         cart.push({ 
            name: dish.name, 
            price: dish.price,
            amount: 1 
        });
    }

    renderCart();
} 

function isInCart(dishName){
    for (let index = 0; index < cart.length; index++) {
        if(cart[index].name === dishName){
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
        renderCart();
    }
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
