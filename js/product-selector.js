document.addEventListener('click', (event) => {
    const productCard = event.target.closest('.product')

    if (productCard) {
        window.location.href = "pages/product.html";
    }
});