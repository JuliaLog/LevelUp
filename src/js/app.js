// Timer
const timeH = document.querySelector('span');
let timeSecond = 1800;

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
},1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function endTime() {
  timeH.innerHTML = 'TIME OUT';
}


// Slider jQuery
$(document).ready(function() {
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const container = $('.slider__container');
  const content = $('.slider__content'); 
  const item = $('.slider__item');
  const btnPrev = $('.btn-prev'); 
  const btnNext = $('.btn-next');
  const itemsCount = item.length;
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });

  btnPrev.click(function() {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  }); 

  btnNext.click(function() {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  
  const setPosition = () => {
    content.css({
      transform: `translateX(${position}px)`
    });
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
      'disabled',
      position <= -(itemsCount - slidesToShow) * itemWidth
      );
  };

  checkBtns();
});