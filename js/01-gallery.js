import { galleryItems } from './gallery-items.js';
// Change code below this line
 const galleryRef = document.querySelector(".gallery");

 
   const markupLi = galleryItems.map(({preview, original, description}) => 
        `<li class="gallery__item" data-source = "${original}" data-descr = "${description}">
            <a href="${original}" class "gallery__link">
                <img src="${preview}" class="gallery__image" alt="${description}">
            </a>
        </li>`).join("");

// console.log(markupLi)
galleryRef.insertAdjacentHTML("beforeend", markupLi);

galleryRef.addEventListener("click", onImage);

function onImage(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    const currentImage = event.target.closest(".gallery__item");
    console.log(currentImage);

    // const { imageOrigin } = currentImage.dataset;
    const imageOrigin = currentImage.dataset.source;

    const descrOrigin = currentImage.dataset.descr;

    const instance = basicLightbox.create(`
    <img src="${imageOrigin}" alt="${descrOrigin}">
    `);
instance.show()
}

console.log(galleryItems);

