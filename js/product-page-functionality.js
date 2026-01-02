
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


//------------------------------ product-details/reviews/shipping & payment

const productDetailsButton = document.getElementById('choice-details');
const productReviewsButton = document.getElementById('choice-reviews');
const productShippingPaymentButton = document.getElementById('choice-shipping_payment');

productDetailsButton.classList.add('button-active');

productDetailsButton.addEventListener("click", () => {
    productDetailsButton.classList.add('button-active');
    productReviewsButton.classList.remove('button-active');
    productShippingPaymentButton.classList.remove('button-active');
});

productReviewsButton.addEventListener("click", () => {
    productDetailsButton.classList.remove('button-active');
    productReviewsButton.classList.add('button-active');
    productShippingPaymentButton.classList.remove('button-active');
});

productShippingPaymentButton.addEventListener("click", () => {
    productDetailsButton.classList.remove('button-active');
    productReviewsButton.classList.remove('button-active');
    productShippingPaymentButton.classList.add('button-active');
});

//-------------------------------  reviews 

const reviewWrapper = document.querySelector('.reviews-second-part');

reviewsArray.forEach((reviewContent) => {
    const singleReview = document.createElement('div');
    singleReview.classList.add('single-review');

    const reviewContentUppedPart = document.createElement('div');
    reviewContentUppedPart.classList.add('single-review-upper-part');
    const reviewContentMiddlePart = document.createElement('div');
    reviewContentMiddlePart.classList.add('single-review-middle-part');
    const reviewDevider = document.createElement('div');
    reviewDevider.classList.add('review-devider');
    singleReview.append(reviewContentUppedPart, reviewContentMiddlePart, reviewDevider);

    
    const reviewContentUppedPartDiv1 = document.createElement('div');
    const reviewContentUppedPartDiv2 = document.createElement('div');
    reviewContentUppedPart.append(reviewContentUppedPartDiv1, reviewContentUppedPartDiv2);

    const div1Div1 = document.createElement('div');
    const div1Div2 = document.createElement('div');
    reviewContentUppedPartDiv1.append(div1Div1, div1Div2);

    for (let index = 0; index < reviewContent.stars; index++) {
        const reviewStar = document.createElement('img');
        reviewStar.src = '../logos-product/Star-reviews.svg';
        reviewStar.alt = 'star';
        div1Div1.append(reviewStar)
    };

    const reviewTitle = document.createElement('h3');
    reviewTitle.textContent = reviewContent.title;
    const reviewAuthor = document.createElement('p');
    reviewAuthor.textContent = "by " + reviewContent.author;
    div1Div2.append(reviewTitle, reviewAuthor);

    const imgLike = document.createElement('img');
    imgLike.src = '../logos-product/like.svg';
    imgLike.alt = 'like';

    const likeAmount = document.createElement('h3');
    likeAmount.textContent = reviewContent.like;
    const likeDevider = document.createElement('div');
    
    const imgDislike = document.createElement('img');
    imgDislike.src = '../logos-product/dislike.svg';
    imgDislike.alt = 'dislike';

    const dislikeAmount = document.createElement('h3');
    dislikeAmount.textContent = reviewContent.dislike;
    reviewContentUppedPartDiv2.append(imgLike, likeAmount, likeDevider, imgDislike, dislikeAmount);

    const reviewContentMiddlePartDiv1 = document.createElement('div');
    const reviewContentMiddlePartDiv2 = document.createElement('div');
    reviewContentMiddlePart.append(reviewContentMiddlePartDiv1, reviewContentMiddlePartDiv2);

    const advantages = document.createElement('h3');
    advantages.textContent = "Advantages";
    const disadvantages = document.createElement('h3');
    disadvantages.textContent = "Disadvantages";
    const reviewText = document.createElement('h3');
    reviewText.textContent = "Review";
    reviewContentMiddlePartDiv1.append(advantages, disadvantages, reviewText);

    const advantagesUser = document.createElement('h3');
    advantagesUser.textContent = reviewContent.Advantages;
    const disadvantagesUser = document.createElement('h3');
    disadvantagesUser.textContent = reviewContent.Disadvantages;
    const reviewTextUser = document.createElement('h3');
    reviewTextUser.textContent = reviewContent.Review;
    reviewContentMiddlePartDiv2.append(advantagesUser, disadvantagesUser, reviewTextUser);

    reviewWrapper.append(singleReview);
});
