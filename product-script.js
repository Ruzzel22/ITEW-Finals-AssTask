/* Buy Now Cart */
// Cart Value Increment
document.addEventListener("DOMContentLoaded", () => {
    // Initialize cart count
    let cartCount = 0;

    // Cart count element
    const cartIcon = document.querySelector(".cart-icon button");
    let cartBadge = document.createElement("span");
    cartBadge.classList.add("cart-badge");
    cartBadge.innerText = cartCount;
    cartIcon.appendChild(cartBadge);

    // Click event
    const buyButtons = document.querySelectorAll(".product-buy");
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Increment count
            cartCount++;
            cartBadge.innerText = cartCount;
        });
    });
});

/* Product Preview */
// Display preview
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('click', (e) => {
        const productPreview = document.getElementById('product-preview');
        const previewGif = document.getElementById('preview-gif');

        // alt Attribute clicked
        const clickedProduct = e.target.alt;
        // Condition when clicked
        if (clickedProduct === 'Arknights') {
            previewGif.src = 'img/Arknights.gif';
        } else if (clickedProduct === 'Attack On Titan') {
            previewGif.src = 'img/Attack On Titan.gif';
        } else if (clickedProduct === 'Azur Lane') {
            previewGif.src = 'img/Azur Lane.gif';
        } else if (clickedProduct === 'Bleach') {
            previewGif.src = 'img/Bleach.gif';
        } else if (clickedProduct === 'Boruto') {
            previewGif.src = 'img/Boruto.gif';
        } else if (clickedProduct === 'Dragon Ball') {
            previewGif.src = 'img/Dragon Ball.gif';
        } else if (clickedProduct === 'Fairy Tail') {
            previewGif.src = 'img/Fairy Tail.gif';
        } else if (clickedProduct === 'Katana Maidens') {
            previewGif.src = 'img/Katana Maidens.gif';
        } else if (clickedProduct === 'One Piece') {
            previewGif.src = 'img/One Piece.gif';
        } else if (clickedProduct === 'Oshi No Ko') {
            previewGif.src = 'img/Oshi No Ko.gif';
        } else if (clickedProduct === 'Seven Deadly Sins') {
            previewGif.src = 'img/Seven Deadly Sins.gif';
        } else if (clickedProduct === 'Shangri-La Frontier') {
            previewGif.src = 'img/Shangri-La Frontier.gif';
        } else if (clickedProduct === 'The Eminence In Shadow') {
            previewGif.src = 'img/The Eminence In Shadow.gif';
        } else if (clickedProduct === 'Undead Unluck') {
            previewGif.src = 'img/Undead Unluck.gif';
        }

        productPreview.style.display = 'flex';
        document.body.style.backgroundColor = 'transparent';
    });
});

// Hide preview
document.getElementById('product-preview').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        const productPreview = document.getElementById('product-preview');
        productPreview.style.display = 'none';
        document.body.style.backgroundColor = '';
    }
});


/* View More */
// Display Product
document.getElementById("view-more").addEventListener("click", function() {
    const hiddenItems = document.querySelectorAll(".product.hidden");
    hiddenItems.forEach(item => {
        item.style.display = "flex";
    });

    // Hide 'View More'
    this.style.display = "none";
    
    // Display 'View Less'
    const button = document.getElementById('view-less');
    button.style.display = "block";
});

// Hide Product
document.getElementById("view-less").addEventListener("click", function() {
    const hiddenItems = document.querySelectorAll(".product.hidden");
    hiddenItems.forEach(item => {
        item.style.display = "none";
    });

    // Hide 'View Less'
    this.style.display = "none";
    
    // Display 'View More'
    const button = document.getElementById('view-more');
    button.style.display = "block";
});

// Play Audio
function playPaimonVoice() {
    const paimonVoice = document.getElementById('voicePaimon');
    paimonVoice.play();
}