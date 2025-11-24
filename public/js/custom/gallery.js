document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-image');
    const popup = document.getElementById('image-popup');
    const popupImg = document.getElementById('image-popup-img');
    const close = document.querySelector('.image-popup-close');

    images.forEach(image => {
        image.addEventListener('click', function() {
            popup.style.display = 'block';
            popupImg.src = this.getAttribute('data-full');
        });
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});