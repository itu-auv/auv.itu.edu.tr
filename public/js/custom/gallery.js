document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-image");
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("image-popup-img");
    const close = document.querySelector(".image-popup-close");

    const BASE_ROW_HEIGHT = 8; // px
    const GRID_GAP = 1; // px (matches CSS gap)
    const SIZE_MAP = {
        large: 1.45,
        medium: 1.2,
        normal: 1
    };

    // Assign random emphasis sizes once (order preserved because DOM order stays)
    images.forEach((image) => {
        const random = Math.random();
        if (random < 0.2) {
            image.classList.add("gallery-large");
            image.dataset.scale = SIZE_MAP.large;
        } else if (random < 0.45) {
            image.classList.add("gallery-medium");
            image.dataset.scale = SIZE_MAP.medium;
        } else {
            image.dataset.scale = SIZE_MAP.normal;
        }
    });

    // Calculate row spans so masonry height reflects the randomized emphasis
    function applyMasonrySizing(image) {
        if (!image.complete || image.naturalWidth === 0) {
            return;
        }

        const scale = parseFloat(image.dataset.scale || "1");
        const width = image.getBoundingClientRect().width;
        const ratio = image.naturalHeight / image.naturalWidth;
        const targetHeight = width * ratio * scale;

        const rowSpan = Math.ceil((targetHeight + GRID_GAP) / (BASE_ROW_HEIGHT + GRID_GAP));
        image.style.gridRowEnd = `span ${rowSpan}`;
        image.style.height = `${targetHeight}px`; // ensures larger images occupy more area without cropping
    }

    function recalcAll() {
        images.forEach((img) => applyMasonrySizing(img));
    }

    // Wait for each image before sizing
    images.forEach((image) => {
        if (image.complete) {
            applyMasonrySizing(image);
        } else {
            image.addEventListener("load", () => applyMasonrySizing(image));
        }
    });

    // Re-run sizing on resize to keep layout tight
    let resizeTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(recalcAll, 120);
    });

    // Image click handler for popup
    images.forEach((image) => {
        image.addEventListener("click", function() {
            popup.style.display = "block";
            popupImg.src = this.getAttribute("data-full");
        });
    });

    // Close button handler
    close.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Click outside popup to close
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
