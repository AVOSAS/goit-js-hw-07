import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryBox = document.querySelector('.gallery')
const cards = createItem(galleryItems)

createGalleryBox.insertAdjacentHTML('beforeend', cards)

  
function createItem(cards) {
  return cards.map(({preview, original, description})=> {
    return `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
  }).join('') 
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: '250',
  overlayOpacity: '0.9',
  showCounter: false
});