const productContainer = document.getElementsByClassName('product-wrapper')[0];

productarray.forEach((product) => {
    const productCard = document.createElement('article');
    productCard.classList.add('product');
    productCard.id = productarray.id;
    
    const title = document.createElement('div');
    const titletext = document.createElement('h3');
    titletext.textContent = "Deal of the Day";
    title.append(titletext);

    const timeLeft = document.createElement('div');
    timeLeft.classList.add('time-left');

    const hour = document.createElement('h3');
    hour.textContent = product.timelefthours;

    const timeleftdevider1 = document.createElement('h3');
    timeleftdevider1.textContent = ":";

    const minute = document.createElement('h3');
    minute.textContent = product.timeleftminutes;

    const timeleftdevider2 = document.createElement('h3');
    timeleftdevider2.textContent = ":";
    
    const second = document.createElement('h3');
    second.textContent = product.timeleftseconds;
    timeLeft.append(hour, timeleftdevider1, minute, timeleftdevider2, second);

    const timeLeftDescription = document.createElement('div');
    timeLeftDescription.classList.add('time-left-description');
    const timeLeftDescrHour = document.createElement('p');
    timeLeftDescrHour.textContent = "hour";
    const timeLeftDescrMinute = document.createElement('p');
    timeLeftDescrMinute.textContent = "min";
    const timeLeftDescrSecond = document.createElement('p');
    timeLeftDescrSecond.textContent = "sec";
    timeLeftDescription.append(timeLeftDescrHour, timeLeftDescrMinute, timeLeftDescrSecond);

    const image = document.createElement('img');
    image.src = product.img;
    image.alt = product.alt;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const ratingWrapper = document.createElement('div');
    ratingWrapper.classList.add('rating'); 

    const starWrapper = document.createElement('div');
    starWrapper.classList.add('star-wrapper'); 

    const starAmount = product.stars;

    for (let i = 0; i < starAmount; i++) {
        const star = document.createElement('img');
        star.src = 'logos/star.svg';
        star.alt = 'star';
        starWrapper.append(star);
    }

    const reviewAmount = document.createElement('p');
    reviewAmount.classList.add('rating-amount');
    reviewAmount.textContent = "(" + product.reviewamount + ")";

    ratingWrapper.append(starWrapper, reviewAmount);

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('prices');

    const priceCurrent = document.createElement('h4');
    priceCurrent.textContent = "$" + product.currentprice;

    const pricePrevious = document.createElement('h4');
    pricePrevious.textContent = "$" + product.previousprice;

    const discountContainer = document.createElement('div');
    discountContainer.classList.add('discount');

    const Discount = document.createElement('h4');
    Discount.textContent = "- " + product.discount + "$";
    discountContainer.append(Discount);
    

    priceWrapper.append(priceCurrent, pricePrevious, discountContainer);

    productCard.append(title, timeLeft, timeLeftDescription, image, name, description, ratingWrapper, priceWrapper)
    productContainer.append(productCard);
});


// ---------------------------------------


const mustHavesWrapper = document.getElementsByClassName('must-haves-wrapper')[0];

mustHavesArray.forEach((mustHaves) => {
    const mustHavesCard = document.createElement('article');
    mustHavesCard.classList.add('must-haves')
    mustHavesWrapper.append(mustHavesCard);

    const newArivalsWrapper = document.createElement('div');
        
    const newArivalslogo = document.createElement('img');
    newArivalslogo.src = 'logos/New_Arivals.svg';
    newArivalslogo.alt = "new arivals logo";
    const newArivalstext = document.createElement('p');
    newArivalstext.textContent = "New Arivals";
    newArivalsWrapper.append(newArivalslogo, newArivalstext);  

    if (!mustHaves.NewArivals) {
        newArivalsWrapper.classList.add('display-none');   
    }

    const mustHavesimage = document.createElement('img');
    mustHavesimage.src = mustHaves.img;
    mustHavesimage.alt = mustHaves.alt;

    const mustHavesCardContentWrapper = document.createElement('div');
    mustHavesCard.append(mustHavesimage, newArivalsWrapper, mustHavesCardContentWrapper);

    const mustHavesCardContentContainer1 = document.createElement('div');
    const mustHavesCardContentContainer2 = document.createElement('div');
    mustHavesCardContentWrapper.append(mustHavesCardContentContainer1, mustHavesCardContentContainer2);

    const mustHavesCardName = document.createElement('h3');
    mustHavesCardName.textContent = mustHaves.name;
    const mustHavesCardDescription = document.createElement('p');
    mustHavesCardDescription.textContent = mustHaves.description;
    mustHavesCardContentContainer1.append(mustHavesCardName, mustHavesCardDescription);

    const priceButton = document.createElement('button');
    mustHavesCardContentContainer2.append(priceButton);
    const priceButtonContent = document.createElement('a');
    priceButtonContent.textContent = "$" + mustHaves.price + " Shop Now";
    priceButton.append(priceButtonContent);
})


// ---------------------------------------


const top100Wrapper = document.getElementsByClassName('top100card-Wrapper')[0];

top100Array.forEach((top100) => {
    const top100card = document.createElement('article');
    top100card.classList.add('top100card');

    const image = document.createElement('img');
    image.src = top100.img;
    image.alt = top100.alt;
    
    const allWrapper = document.createElement('div');
    top100card.append(image, allWrapper);

    const titleWrapper = document.createElement('div');
    const bottomPartWrapper = document.createElement('div');
    bottomPartWrapper.classList.add('top100-bottompart');
    allWrapper.append(titleWrapper, bottomPartWrapper);

    const titleContainer = document.createElement('div');
    const description = document.createElement('p');
    description.textContent = top100.description;
    titleWrapper.append(titleContainer, description);
    
    const title = document.createElement('h3');
    title.textContent = top100.name;
    const favourites = document.createElement('img');
    favourites.src = 'logos/favourite.svg';
    favourites.alt = "favourites";
    favourites.classList.add('favourite-logo');
    titleContainer.append(title, favourites); 

    const starWrapper = document.createElement('div');
    starWrapper.classList.add('star-wrapper2');
    const top100Prices = document.createElement('div');
    top100Prices.classList.add('top100-prices');
    bottomPartWrapper.append(starWrapper, top100Prices);

    for (let i = 0; i < top100.stars; i++) {
        const star = document.createElement('img');
        star.src = 'logos/star_2.svg';
        star.alt = "star";
        starWrapper.append(star);
    }

    const ratingAmount = document.createElement('p');
    ratingAmount.textContent = "(" + top100.ratingAmount + ")";
    starWrapper.append(ratingAmount);

    const currentPrice = document.createElement('h4');
    currentPrice.textContent = "$" + top100.currentprice;
    const previousPrice = document.createElement('h4');
    previousPrice.textContent = "$" + top100.previousprice;
    const discount = document.createElement('h4');
    discount.textContent = "-" + top100.discount + "%";
    top100Prices.append(currentPrice, previousPrice, discount);

    top100Wrapper.append(top100card);
});