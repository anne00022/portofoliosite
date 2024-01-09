// CARROUSEL SLIDE HAR FÅET HJÆLP FRA CHAT GPT

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 2; // Viser de sidste to billeder
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex + 1].style.display = "block"; // Viser det næste billede også
  dots[slideIndex / 2].classList.add("active"); // Opdaterer den aktive cirkel
}

document.querySelector(".prev").addEventListener("click", () => {
  showSlides((slideIndex -= 2)); // Går tilbage to billeder
});

document.querySelector(".next").addEventListener("click", () => {
  showSlides((slideIndex += 2)); // Går frem to billeder
});

document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlides((slideIndex = index * 2)); // Går til det valgte sæt billeder
  });
});
