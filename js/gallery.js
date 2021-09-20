import gallery from "./app.js";

const refs = {
   galleryContainerEl: document.querySelector(".js-gallery"),
   lightBoxContainerEl: document.querySelector(".js-lightbox"),
   imageLightBoxEl: document.querySelector(".lightbox__image"),
   overlayBox: document.querySelector(".lightbox__overlay"),
   closeLightBoxBtnEl: document.querySelector(`[data-action = "close-lightbox"]`),
   
};
const imagesListMarkup = gallery
   .map(({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link"
    href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join("");
   
refs.galleryContainerEl.insertAdjacentHTML("afterend", imagesListMarkup);

   
