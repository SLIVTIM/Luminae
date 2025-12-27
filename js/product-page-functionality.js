
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