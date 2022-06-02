const DEBOUNCE_TIMEOUT = 300;
// const IDLE_TIME = 1000;

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

// function debounce (callback, timeoutDelay = DEBOUNCE_TIMEOUT) {
//   let timeoutAction;
//   let timeoutIdle;
//   let tempoSwitch;
//   return (...rest) => {
//     if (tempoSwitch) {
//       clearTimeout(timeoutAction);
//       clearTimeout(timeoutIdle);
//       timeoutAction = setTimeout(() => {
//         callback.apply(this, rest);
//         timeoutIdle = setTimeout(() => tempoSwitch = false, IDLE_TIME)
//       }, timeoutDelay);
//     } else {
//       callback.apply(this, rest);
//       tempoSwitch = true;
//     }
//   };
// };throttle

const throttle = (callback, delayBetweenFrames = DEBOUNCE_TIMEOUT) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {stopDrag, getScrollValue, throttle}
