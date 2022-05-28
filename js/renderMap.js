import {movePerson} from "./gameControllers.js";

const fragment = document.createDocumentFragment();
const area = document.querySelector('.main__area.area');
const temp = document.querySelector('#area-element').content.querySelector('.area__element');

const getRenderedArea = () => {
  for (let i=0; i<10000; i++) {
    const newContent = temp.cloneNode(true);
    newContent.dataset.number = i+1;
    if (i == 110) {
      let img = document.createElement('img');
      img.src = "img/main_hero.gif";
      img.classList.add("main-hero");
      newContent.append(img);
      console.log(newContent);
    }

    if (i%7==0 || i%7==3 || i%3==0) {
      newContent.classList.add("second");
    }

    if (i<=99 || i>=9900 || i%100==0 || i%100==99) {
      newContent.classList.add("sea-pl");
    }

    fragment.append(newContent);
  }

  document.addEventListener('keyup', movePerson);
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'ArrowUp' || evt.code === 'ArrowDown' || evt.code === 'ArrowLeft' || evt.code === 'ArrowRight') {
      evt.preventDefault();
    }
  })
  
  area.append(fragment);

  
};

export {getRenderedArea, area};
