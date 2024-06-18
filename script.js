"use strict";

let totalCost = 0;
const shippingCost = 5;
const taxRate = 0.10;
const buttons = document.querySelectorAll('.addToCart');
const checkout = document.querySelector('.checkout');

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
})

function updateCosts() {
    const tax = totalCost * taxRate;
    const finalCost = totalCost + shippingCost + tax;

    document.getElementById('totalCost').innerHTML = totalCost.toFixed(2);
    document.getElementById('tax').innerHTML = tax.toFixed(2);
    document.getElementById('finalCost').innerHTML = finalCost.toFixed(2);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        const product = e.target.closest('.product');
        const priceText = product.querySelector('.price').innerHTML;
        const price = parseFloat(priceText.replace('$', ''));
        totalCost += price;
        updateCosts();
    })
}

checkout.addEventListener('click', function() {
    if (totalCost === 0) {
        alert('You must add an item to your cart before checking out.');
    } else {
        alert('Thank you for your purchase!');
        totalCost = 0;
        updateCosts();
    }
})