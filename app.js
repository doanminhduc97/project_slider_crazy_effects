let nextDom      = document.getElementById('next');
let prevDom      = document.getElementById('prev');
let carouselDOM  = document.querySelector('.carousel');
let listItemDom  = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
  showSlider('next');
}
prevDom.onclick = function() {
  showSlider('prev');
}
let timeRunning = 700;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);
clearTimeout(runAutoRun);
function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDOM.classList.add('next');
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDOM.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDOM.classList.remove('next');
    carouselDOM.classList.remove('prev');
  }, timeRunning);
}