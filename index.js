const buttonRight = document.querySelector(".next-btn");

const SUB_CONTENTS = document.querySelector(".sub-contents");

const buttonLeft = document.querySelector(".back-btn");

function scrollRight() {
  SUB_CONTENTS.scrollTo({ left: 4000, behavior: "smooth" });
}

function scrollLeft() {
  SUB_CONTENTS.scrollTo({ left: 0, behavior: "smooth" });
}

buttonLeft.addEventListener("click", scrollLeft);

buttonRight.addEventListener("click", scrollRight);

const imgClick = document.querySelector("posts-itme__img");

function modalImg() {
  document.getElementsByClassName("modal");
}

imgClick.addEventListener("onclick", modalImg);

function closeModal() {
  const closeBtn = document.querySelector(".close");
  const closeModalal = document.querySelector(".modal");
  const closeBack = document.querySelector(".modal-opacity");
  closeBtn.classList.add("closeModal");
  closeBack.classList.add("closeModal");
  closeModalal.classList.add("closeModal");
}

function openModal() {
  const openModal = document.querySelector(".modal");
  const openBack = document.querySelector(".modal-opacity");
  openModal.classList.add("openImg");
  openBack.classList.add("openImg");
}
