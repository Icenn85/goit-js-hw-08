import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createImagesGalleryMarkup = images => {
  return images
    .map(({ preview, original, description }) => {
        return `
                <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}"
                    />
                </a>
            </div>
        `;
    })
    .join('');
};

const galleryMarkup = createImagesGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
