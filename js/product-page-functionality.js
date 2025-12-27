
//---------------------- show more/show less

const showMoreContainer = document.querySelector('.show-more-background-notshown');

const showMoreButton = document.getElementById('showMoreButton');
const showLessButton = document.getElementById('showLessButton');

showLessButton.classList.add('is-hidden');

showMoreButton.addEventListener("click", () => {
    showMoreContainer.classList.remove('show-more-background-notshown');
    showMoreContainer.classList.add('show-more-background-shown');

    showMoreButton.classList.add('is-hidden');
    showLessButton.classList.remove('is-hidden');
});

showLessButton.addEventListener("click", () => {
    showMoreContainer.classList.remove('show-more-background-shown');
    showMoreContainer.classList.add('show-more-background-notshown');

    showLessButton.classList.add('is-hidden');
    showMoreButton.classList.remove('is-hidden');
});


//----------------------- quantity

const quantityMinus = document.getElementById('quantity-minus');
const quantityPlus = document.getElementById('quantity-plus');

const quantityNumber = document.getElementById('quantity-number');

let quantity = 1;

quantityMinus.addEventListener("click", () => {
    if (quantity > 1) {
        quantity = quantity - 1;
    }

    updateQuantityNumber();
});

quantityPlus.addEventListener("click", () => {
    if (quantity < 9) {
        quantity = quantity + 1;
    }

    updateQuantityNumber();
});

quantityNumber.textContent = quantity;

//----------------------- total price

const totalPrice = document.getElementById('total-price');
const onePrice = productDetailsArray[0].price;

let total = onePrice * quantity;

totalPrice.textContent = "$" + total.toFixed(2);


function updateQuantityNumber() {
    quantityNumber.textContent = quantity;
    let total = onePrice * quantity;
    totalPrice.textContent = "$" + total.toFixed(2);
}

//------------------------ name

const productName = document.getElementById('name');
const priceName =  document.getElementById('price-name');

productName.textContent = productDetailsArray[0].name;
priceName.textContent = productDetailsArray[0].price;

//------------------------- size 

const chooseSize = document.getElementById('choose-size');
chooseSize.className = productDetailsArray[0].sizeClass;

//-------------------------- color

const chooseColor = document.getElementById('choose-color');
chooseColor.className = productDetailsArray[0].colorClass;

//-------------------------- img

const mainImg = document.getElementById('main-img');
mainImg.src = productDetailsArray[0].imgMain;


const sidePanelImgExample1 = document.getElementById('sidePanelImg-1');
sidePanelImgExample1.src = productDetailsArray[0].imgExample1;
const sidePanelImgExample2 = document.getElementById('sidePanelImg-2');
sidePanelImgExample2.src = productDetailsArray[0].imgExample2;
const sidePanelImgExample3 = document.getElementById('sidePanelImg-3');
sidePanelImgExample3.src = productDetailsArray[0].imgExample3;
const sidePanelImgExample4 = document.getElementById('sidePanelImg-4');
sidePanelImgExample4.src = productDetailsArray[0].imgExample4;
const sidePanelImgExample5 = document.getElementById('sidePanelImg-5');
sidePanelImgExample5.src = productDetailsArray[0].imgExample5;