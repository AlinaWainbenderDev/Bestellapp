
function init(){
    renderMenu();
}

function renderMenu(){
    let menuRef = document.getElementById('menu');

    let titleMenu = `<h2>Hauptgerichte</h2>`;

    for (let index = 0; index < dishes.length; index++) {
        titleMenu += templateDishes(dishes[index], index);
    }

    menuRef.innerHTML = titleMenu;
}

function toggleOverlay(){
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("open")
}

function addDishToBasket(index){
    let basketDishRef = document.getElementById(`basketDish-${index}`);

    if (basketDishRef == null) {
        let amountDishesBasket = 1;
        templateBasket(dishes[index], amountDishesBasket, index);
    } else {
        let amountRef = document.getElementById(`amount-${index}`);
        let currentAmount = parseInt(amountRef.innerText);

        if (currentAmount < 10) {
            amountRef.innerText = currentAmount + 1;
            updateSum(index);
        }
    }
}    

function reduceAmountBasket(index){
    let amountRef = document.getElementById(`amount-${index}`);
    let currentAmount = parseInt(amountRef.innerText);

    if (currentAmount <= 1) {
        removeDishFromBasket(index);
    } else {
        amountRef.innerText = currentAmount - 1;
        updateSum(index);
    }
}

function removeDishFromBasket(index){
    let basketDishRef = document.getElementById(`basketDish-${index}`);
    basketDishRef.remove();
}

function updateSum(index) {
    const amountRef = document.getElementById(`amount-${index}`);
    const sumRef = document.getElementById(`sum-${index}`);
    const currentAmount = parseInt(amountRef.innerText);
    const price = dishes[index].price;

    sumRef.innerText = (currentAmount * price).toFixed(2) + " €";
}

//erstmal count per dish 
// danach total price
// danach checkout button 
// danach funktion für checkout button ( danke für die bestellung, warenkorb leeren, overlay schließen)
