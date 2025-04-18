// addToCart.js
function toggleMenu() {
    var hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("open");
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

let cartCount = 0;

// Function to update localStorage
function updateLocalStorage(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Add event listeners to all add-to-cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Increment cart count
        cartCount++;
        document.querySelector('.cart-count').textContent = cartCount;

        // Collect product information
        const productName = this.getAttribute('data-product-name');
        const productPrice = this.getAttribute('data-product-price');
        const productImage = this.parentElement.querySelector('img').src; // Get image source

        // Create an item object
        const item = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        // Update local storage with the new item
        updateLocalStorage(item);

        console.log(`Added to cart: ${productName} - $${productPrice}`);
    });
});
