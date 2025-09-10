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
    let titleMenu = `<h2>Hauptgerichte</h2>`;

    for (let index = 0; index < dishes.length; index++) {
        titleMenu += templateMenu(index);
    }

    menuRef.innerHTML = titleMenu;
}

function renderCart(){
    let contentCartRef = document.getElementById("contentCart");
    contentCartRef.innerHTML = "";

    const { cartItemSums, total } = calculateCart();

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

function calculateCart() {
    let total = 0;
    const cartItemSums = []; 

    for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        const sum = cartItem.price * cartItem.amount;
        cartItemSums.push(sum);
        total += sum;
    }

    return { cartItemSums, total };
}
