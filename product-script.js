// View More
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