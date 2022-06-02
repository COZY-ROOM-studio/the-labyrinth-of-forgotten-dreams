import {createPersonAction} from "./gameControllers.js";
import {scrollToPlayer} from "./observationArea.js";
import {throttle} from "./util.js";

const NUMBER_OF_TILES = 10000;
const PLAYER_POSITION = 120;

const fragment = document.createDocumentFragment();
const area = document.querySelector('.main__area.area');
const temp = document.querySelector('#area-element').content.querySelector('.area__element');

const getRenderedArea = () => {
  for (let i=0; i<NUMBER_OF_TILES; i++) {
    // создаём зону
    const newContent = temp.cloneNode(true);
    newContent.dataset.number = i+1;

    // добавляем персонажа
    if (i == PLAYER_POSITION) {
      let img = document.createElement('img');
      img.src = "img/main_hero.gif";
      img.classList.add("main-hero");
      newContent.append(img);
      console.log(newContent);
    }

    // узор похожих плиток
    if (i%7==0 || i%7==3 || i%3==0) {
      newContent.classList.add("second");
    }

    // ограничивающая коробка, граница зоны
    if (i<=99 || i>=9900 || i%100==0 || i%100==99) {
      newContent.classList.add("border-tile");
    }

    fragment.append(newContent);
  }

  // событие управления персонажем
  document.addEventListener('keydown', throttle(createPersonAction));
  document.addEventListener('keydown', (evt) => evt.preventDefault());

  area.append(fragment);
  // скролл к персонажу
  scrollToPlayer(area);
};

export {getRenderedArea, area};
