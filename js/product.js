const galleryItems = document.querySelectorAll('.gallery-item-productcar');
const zoomedImageContainer = document.querySelector('.zoomed-image-container-productcar');
const zoomedImage = document.querySelector('.zoomed-image-productcar');
const closeIcon = document.querySelector('.close-icon-productcar');

galleryItems.forEach(function(item) {
  const image = item.querySelector('img');

  image.addEventListener('click', function() {
    const imageUrl = image.getAttribute('src');
    zoomedImage.setAttribute('src', imageUrl);
    zoomedImageContainer.classList.add('active');
  });
});

closeIcon.addEventListener('click', function() {
  zoomedImageContainer.classList.remove('active');
});