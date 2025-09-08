let index=0;

function templateDishes(dish, index){
    return `
     <div class="dish">
        <div class="style-dishContainer">
            <h3>${dish.name}</h3>
            <button onclick="addDishToBasket(${index})" id="addButton-${index}" class="add-button">
                <span class="horizontal"></span>
                <span class="vertical"></span>
            </button>
        </div>
        <p>${dish.description}</p>
        <p class="dish-price">${dish.price} €</p>
     </div>
    `
}

function templateBasket(dish, amountDishesBasket, index){
    let contentOverlayRef = document.getElementById("contentOverlay");
    contentOverlayRef.innerHTML += `
       <div class="basketDishContainer" id="basketDish-${index}">${dish.name}
            <div class="basket-dish-area">
                <button onclick="reduceAmountBasket(${index})">-</button>
                <span id="amount-${index}">${amountDishesBasket}</span>
                <button onclick="addDishToBasket(${index})">+</button>
                <span id="sum-${index}"></span>
                <button onclick="removeDishFromBasket(${index})">
                    <img class="trash-icon" src="/assets/icons/recycle-bin-icon.svg" alt="Trash Icon">
                </button>
            </div>
        </div>
    `;

    updateSum(index);
}
