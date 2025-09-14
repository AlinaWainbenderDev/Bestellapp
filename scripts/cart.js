let cart = [];

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

    updateCart()

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

function increaseAmountCart(indexInCart){
    if (cart[indexInCart].amount < 10) {
        cart[indexInCart].amount++;
    }
    updateCart()
}

function reduceAmountCart(index){

    if (cart[index].amount <= 1) {
    removeDishFromCart(index);
    } else {
    cart[index].amount--;
    }

    updateCart()
}

function removeDishFromCart(index){
    cart.splice(index, 1);
    updateCart()
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

    updateMobileCart()
}

function updateMobileCart(){
    const amountRef = document.getElementById('mobileCartAmount');
    const totalRef = document.getElementById('mobileCartTotal');

    const total = calculateCartTotal();
    const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

    amountRef.textContent = totalItems;
    totalRef.textContent = `${total.toFixed(2)} €`; 

    renderMobileCart();
}

function renderMobileCart(){
    
    const buttonRef = document.getElementById('closeCartButton');
    const cartRef = document.getElementById('cart');
    
    if(cartRef.classList.contains('open')){
         buttonRef.textContent = 'Warenkorb schließen';
    } else{
    buttonRef.textContent=`Warenkorb ansehen`;
    }
}

function renderSubmitOverlay(){
    if (cart.length === 0) return;

    const cartRef = document.getElementById('cart');
    cartRef.classList.remove('open'); 

    const submitRef = document.getElementById('submit_Overlay');
    submitRef.innerHTML = templateSubmitOverlay();
    submitRef.classList.remove('d_none');

    clearCart();
    renderMobileCart();
}

function closeSubmitOverlay(){
    const submitRef = document.getElementById('submit_Overlay');
    submitRef.classList.add('d_none');
    clearCart();
}

function clearCart() {
    cart = [];
    updateCart();
}
