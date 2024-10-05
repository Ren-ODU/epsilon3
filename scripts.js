/* Place your JavaScript in this file */

/*********************** Slideshow ***********************/
let slideIndex[slideId[no]] = 1;
showSlides(slideIndex[no]);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
