import galleryItems from "./app.js";

const refs = {
   galleryContainerEl: document.querySelector(".js-gallery"),
   lightBoxContainerEl: document.querySelector(".js-lightbox"),
   imageLightBoxEl: document.querySelector(".lightbox__image"),
   overlayBox: document.querySelector(".lightbox__overlay"),
   closeLightBoxBtnEl: document.querySelector(`[data-action = "close-lightbox"]`),
   
};
const imagesListMarkup = galleryItems
   .map(({ preview, original, description },) =>
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
   
refs.galleryContainerEl.insertAdjacentHTML("afterbegin", imagesListMarkup);

function openOverlayClick(evt) {
  evt.preventDefault();
  const originalImg = evt.target.dataset.source;
  const currentAlt = evt.target.alt;

  if (evt.target.nodeName === "IMG") {
    refs.lightBoxContainerEl.classList.add("is-open");
    refs.imageLightBoxEl.setAttribute("src", `${originalImg}`);
    refs.imageLightBoxEl.setAttribute("alt", `${currentAlt}`);
  }
};
refs.galleryContainerEl.addEventListener('click', openOverlayClick);

function closeOverlayClick(evt) {
  if (evt.target.nodeName === "BUTTON" &&
    evt.target.dataset.action === "close-lightbox") {
    refs.lightBoxContainerEl.classList.remove("is-open");
  }
  if (evt.target.nodeName === "DIV") {
     refs.lightBoxContainerEl.classList.remove("is-open");
  }
};
refs.closeLightBoxBtnEl.addEventListener("click", closeOverlayClick);
refs.overlayBox.addEventListener("click", closeOverlayClick);
   
