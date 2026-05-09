const pages = [
  "assets/pages/page_00.png",
  "assets/pages/page_01.png",
  "assets/pages/page_02.png",
  "assets/pages/page_03.png",
  "assets/pages/page_04.png",
  "assets/pages/page_05.png",
  "assets/pages/page_06.png",
  "assets/pages/page_07.png"
];

let currentPage = 0;

const pageImage = document.getElementById("page");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* ==========
   UPDATE UI
========== */

function updateButtons() {

  prevBtn.style.display =
    currentPage === 0 ? "none" : "flex";

  nextBtn.style.display =
    currentPage === pages.length - 1
      ? "none"
      : "block";
}

/* ==========
   CHANGE PAGE
========== */

function changePage(index) {

  pageImage.classList.add("fade-out");

  setTimeout(() => {

    pageImage.src = pages[index];

    currentPage = index;

    updateButtons();

    pageImage.classList.remove("fade-out");
    pageImage.classList.add("fade-in");

    setTimeout(() => {
      pageImage.classList.remove("fade-in");
    }, 300);

  }, 180);
}

/* ==========
   NEXT
========== */

nextBtn.addEventListener("click", () => {

  if (currentPage < pages.length - 1) {
    changePage(currentPage + 1);
  }

});

/* ==========
   PREVIOUS
========== */

prevBtn.addEventListener("click", () => {

  if (currentPage > 0) {
    changePage(currentPage - 1);
  }

});

/* ==========
   INIT
========== */

updateButtons();