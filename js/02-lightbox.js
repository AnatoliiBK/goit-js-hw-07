import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

 
   const markupLi = galleryItems.map(({preview, original, description}) => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
     </li>`).join("");
     
galleryRef.insertAdjacentHTML("beforeend", markupLi);

const lightbox = new SimpleLightbox(".gallery a", {
captionsData: "alt",	

captionPosition: "down",

captionDelay: 250,

nav: "true",
//    // true	bool	show arrow-navigation or not  
});
console.log(galleryItems);
      
