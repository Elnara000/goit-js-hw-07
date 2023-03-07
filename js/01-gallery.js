import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description}) => 
`<div class="gallery__item">
<a class="gallery__link" onclick="event.preventDefault()" href="${original}" >
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div>`)
.join('');

gallery.innerHTML = markup;


gallery.addEventListener('click', onOpenModal);

let instance = '';

function onOpenModal(e) {
    if (e.target.nodeName !== 'IMG') {
        return
    }

    const modalMarkup = `<img width="1280" height="900" src="${e.target.dataset.source}">`;
    
    instance = basicLightbox.create(modalMarkup, {
        onShow: () => window.addEventListener('keydown', onCloseByEsc),
        onClose: () => window.removeEventListener('keydown', onCloseByEsc)
    })
    
    instance.show()       
   
}

function onCloseByEsc (e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (isEscKey) {
        instance.close()
    }
}



