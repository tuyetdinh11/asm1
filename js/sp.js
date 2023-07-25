const galleryItems = document.querySelectorAll('.gallery-item');
const zoomedImageContainer = document.querySelector('.zoomed-image-container');
const zoomedImage = document.querySelector('.zoomed-image');
const closeIcon = document.querySelector('.close-icon');
const leftArrow = document.querySelector('.arrow-icon.left');
const rightArrow = document.querySelector('.arrow-icon.right');

let currentImageIndex = 0;

galleryItems.forEach(function (item, index) {
    const image = item.querySelector('img');

    image.addEventListener('click', function () {
        currentImageIndex = index;
        const imageUrl = image.getAttribute('src');
        zoomedImage.setAttribute('src', imageUrl);
        zoomedImageContainer.classList.add('active');
    });
});

closeIcon.addEventListener('click', function () {
    zoomedImageContainer.classList.remove('active');
});

leftArrow.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    const imageUrl = galleryItems[currentImageIndex].querySelector('img').getAttribute('src');
    zoomedImage.setAttribute('src', imageUrl);
});

rightArrow.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    const imageUrl = galleryItems[currentImageIndex].querySelector('img').getAttribute('src');
    zoomedImage.setAttribute('src', imageUrl);
});
function openVideoModal() {
    var modal = document.getElementById('videoModal');
    modal.style.display = 'block';
}

function closeVideoModal() {
    var modal = document.getElementById('videoModal');
    modal.style.display = 'none';
}
