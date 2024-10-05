/* Place your JavaScript in this file */

/*********************** Slideshow ***********************/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*********************** Animated Icon ***********************/
/*
function earthspin() {
  
  div {
  width: 50px;
  height: 50px;
  background-color: red;
  position: relative;
  animation-name: earthSpin;
  animation-duration: 1s;
   animation-iteration-count: infinite;
}

@keyframes earthSpin {
  0%   {<i class="fa-solid fa-earth-oceania"></i>}
  25%  {<i class="fa-solid fa-earth-europe"></i>}
  50%  {<i class="fa-solid fa-earth-asia"></i>}
  75%  {<i class="fa-solid fa-earth-africa"></i>}
  100% {<i class="fa-solid fa-earth-oceania"></i>}
}
*/
