var number=0;
showSlides(number);

// Next/previous controls
function addtoSlide(n) {
  showSlides(number += n);
}

// Thumbnail image controls
function CImage(n) {
  showSlides(number = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {number = 1}
  if (n < 1) {number = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[number-1].style.display = "block";
  dots[number-1].className += " active";
}