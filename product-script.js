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
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Attack On Titan') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Azur Lane') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Bleach') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Boruto') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Dragon Ball') {
            previewGif.src = 'img/Goku Vs Jiren.gif';
        } else if (clickedProduct === 'Fairy Tail') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Katana Maidens') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'One Piece') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Oshi No Ko') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Seven Deadly Sins') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Shangri-La Frontier') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'The Eminence In Shadow') {
            previewGif.src = 'img/@.gif';
        } else if (clickedProduct === 'Undead Unluck') {
            previewGif.src = 'img/@.gif';
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