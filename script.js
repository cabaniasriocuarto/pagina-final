  const slidesContainer = document.querySelector('.slides');
  const slideItems = document.querySelectorAll('.slides img, .slides video'); // incluye imágenes y video
  const prevButton = document.querySelector('.slider .prev');
  const nextButton = document.querySelector('.slider .next');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox .close');

  let currentIndex = 0;
  const totalSlides = slideItems.length;

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    }
    if (index >= totalSlides) {
      index = 0;
    }
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }

  // Lightbox solo para imágenes (no videos)
  slideItems.forEach((item) => {
    if (item.tagName === "IMG") {
      item.addEventListener("click", () => {
        lightboxImg.src = item.src;
        lightbox.style.display = "flex";
      });
    }
  });
