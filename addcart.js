var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', e => {
    const divId = link.dataset.div;
    const divData = document.getElementById(divId).textContent;
    localStorage.setItem('myDivData', divData);
  });
});

const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', e => {
    const imgSrc = image.src;
    localStorage.setItem('myImgSrc', imgSrc);
  });
});

