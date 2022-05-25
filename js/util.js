const stopDrag = () => {
  document.addEventListener('dragstart', (evt)=>{
    evt.preventDefault();
  })
};

const getScrollValue = window.addEventListener('scroll', () => {
  if (window.pageYOffset>20) {
    document.querySelector('.header').classList.add('header--fixed');
    document.querySelector('.main').classList.add('main--fixed-header');
  } else {
    document.querySelector('.header').classList.remove('header--fixed');
    document.querySelector('.main').classList.remove('main--fixed-header');
  }
});

export {stopDrag, getScrollValue}
