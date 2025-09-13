function templateMenu(index){
    let dish = dishes[index];
    return `
        <div class="dish">
            <div class="style-dishContainer">
                <h3>${dish.name}</h3>
                <button onclick="addToCart(${index})" id="addButton-${index}" class="add-button">
                    <span class="horizontal"></span>
                    <span class="vertical"></span>
                </button>
            </div>
            <p>${dish.description}</p>
            <p class="dish-price">${dish.price} €</p>
        </div>
    `
}

function templateCartItem(item, index, sum){
    return `
     <div class="cartDishContainer" id="cartDish-${index}">${item.name}
        <div class="cart-dish-area">
            <button onclick="reduceAmountCart(${index})">-</button>
            <span id="amount-${index}">${item.amount}</span>
            <button onclick="increaseAmountCart(${index})">+</button>
            <span id="sum-${index}">${sum} €</span>
            <button onclick="removeDishFromCart(${index})">
                <img class="trash-icon" src="/assets/icons/recycle-bin-icon.svg" alt="Trash Icon">
            </button>
        </div>
    </div>
    `
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