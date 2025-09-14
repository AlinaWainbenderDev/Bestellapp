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
            <p class="dish-price">${dish.price.toFixed(2)} €</p>
        </div>
    `
}

function templateCartItem(item, index, sum){
    return `
     <div class="cartDishContainer" id="cartDish-${index}">
        <span>${item.name}</span>
        <div class="cart-dish-area">
            <button onclick="reduceAmountCart(${index})" class="minus-button"><span></span></button>
            <span id="amount-${index}">${item.amount}</span>
            <button onclick="increaseAmountCart(${index})" class="add-button">
                <span class="horizontal"></span>
                <span class="vertical"></span>
            </button>
            <span id="sum-${index}" class="sum-style-container">${sum} €</span>
            <button onclick="removeDishFromCart(${index})" class="trash-button">
                <img class="trash-icon" src="/assets/icons/recycle-bin-icon.svg" alt="Trash Icon">
            </button>
        </div>
    </div>
    `
}

function templateSubmitOverlay(){
    return`
    <div class="overlay-content">
      <h3>Deine Bestellung...</h3>
      <p>ist bei uns eingegangen</p>
      <button onclick="closeSubmitOverlay()">OK</button>
    </div>
    `
}