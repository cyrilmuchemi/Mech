import './style.css'

const myArray = [
  {
    id: 1,
    image: "./src/assets/nav4.jpg",
    heading1: "YOU CAN ENTRUST YOUR",
    heading2: "Vehicle To Us"
  },
  {
    id: 2,
    image: "./src/assets/nav3.jpg",
    heading1: "FAIR & FRIENDLY",
    heading2: "Service"
  },
  {
    id: 3,
    image: "./src/assets/nav2.jpg",
    heading1: "COMPLETE EQUIPMENT",
    heading2: "Service"
  },
  {
    id: 4,
    image: "./src/assets/nav1.jpg",
    heading1: "THE BEST AT WHAT",
    heading2: "We Do"
  }
]

let currentSlide = 0;

// Update text content based on current slide
const updateTextContent = () => {
  const sliderText = document.getElementById("slider-text");
  const slide = myArray[currentSlide];
  sliderText.innerHTML = `
    <span class="slider-span">${slide.heading1}</span>
    <p>${slide.heading2}</p>
    <button class="sliderbtn">Read More <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg></button>
  `;
};

// Render slide with fade in and out effect using CSS transitions
const renderSlide = () => {
  const slide = myArray[currentSlide];
  const sliderImage = document.getElementById("slider-image");
  const sliderText = document.getElementById("slider-text");
  sliderImage.style.opacity = 0;
  sliderText.style.opacity = 0;
  setTimeout(() => {
    sliderImage.src = slide.image;
    updateTextContent();
    sliderImage.style.opacity = 1;
    sliderText.style.opacity = 1;
  }, 500);
};

window.addEventListener("load", () => {
  setInterval(() => {
    currentSlide++;
    if (currentSlide >= myArray.length) {
      currentSlide = 0;
    }
    renderSlide();
  }, 7000);
});


// Event listener for left arrow
document.getElementById("arrow-left").addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = myArray.length - 1;
  }
  renderSlide();
});

// Event listener for right arrow
document.getElementById("arrow-right").addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= myArray.length) {
    currentSlide = 0;
  }
  renderSlide();
});





