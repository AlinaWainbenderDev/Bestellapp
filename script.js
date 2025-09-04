function renderDishes(){
    let mainContainerRef = document.getElementById("menu");
    mainContainerRef.innerHTML = "";

    for (let index = 0; index < dishes.length; index++) {
        const dishTemplate = templateDishes(dishes[index]);

        mainContainerRef.innerHTML += dishTemplate;
    }
}

renderDishes();

function toggleOverlay(){
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("open")
}