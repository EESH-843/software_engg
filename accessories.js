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