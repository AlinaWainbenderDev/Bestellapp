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
    const cartItem = cart.find(item => item.name === dish.name);

    if (cartItem) {
        if (cartItem.amount < 10) {
            cartItem.amount++;
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

function reduceAmountCart(index){
    let amountRef = document.getElementById(`amount-${index}`);
    let currentAmount = parseInt(amountRef.innerText);

    if (currentAmount <= 1) {
        removeDishFromCart(index);
    } else {
        amountRef.innerText = currentAmount - 1;
        updateSum(index);
    }
}

function removeDishFromCart(index){
    let cartDishRef = document.getElementById(`cartDish-${index}`);
    cartDishRef.remove();
}

function updateSum(index) {
    const amountRef = document.getElementById(`amount-${index}`);
    const sumPerDishRef = document.getElementById(`sum-${index}`);
    const currentAmount = parseInt(amountRef.innerText);
    const price = dishes[index].price;

    sumPerDishRef.innerText = (currentAmount * price).toFixed(2) + " €";
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
