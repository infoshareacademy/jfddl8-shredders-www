// ANIMATE PHOTOS
const teammatesContainer = document.querySelector('.teammates');
const teammatesPhotos = document.querySelectorAll('.teammate-item__photo');
const teammatesContainerHeight = teammatesContainer.clientHeight;

function isElementInView() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollPosition = scrollY + windowHeight;
    const elementPosition = teammatesContainer.getBoundingClientRect().top + scrollY + teammatesContainerHeight;
    return scrollPosition > elementPosition;
}

function animate() {
    if (isElementInView()) {
        teammatesPhotos.forEach(photo => photo.classList.add('teammates-animate'));
    }
}

document.addEventListener('scroll', animate);