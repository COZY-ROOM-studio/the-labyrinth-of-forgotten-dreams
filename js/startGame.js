import {getRenderedArea, area} from "./renderMap.js";

const startButton = document.querySelector('.main__play.button');

const startController = () => {
  // начать игру, обработчик на кнопке "Играть!"
  startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    area.classList.remove('hidden');
    // создать зону иры
    getRenderedArea();
  })
}

export {startController};
