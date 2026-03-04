// Ampliar imagen al hacer clic
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {
    if (img.style.transform === "scale(1.5)") {
      img.style.transform = "scale(1)";
    } else {
      img.style.transform = "scale(1.5)";
    }
  });
});