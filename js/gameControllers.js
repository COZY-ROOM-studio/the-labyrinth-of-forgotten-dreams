import {scrollToPlayer} from "./observationArea.js"
import {animatePlayerMovement} from "./animation.js";

const UP_DIRECTION = -100;
const DOWN_DIRECTION = +100;
const LEFT_DIRECTION = -1;
const RIGHT_DIRECTION = +1;
const DEFAULT_TRANSFORM = "translateY(-20px)";

const area = document.querySelector('.main__area.area');

// передвижения персонажа
const movePerson = (action) => {
  let player = area.querySelector(".main-hero");
  let numberPl = player.parentNode.dataset.number;

  const shiftPerson = (displacement, transf) => {
    let nextPl = area.querySelector(`[data-number='${+numberPl+displacement}'`);
    nextPl.append(player);
    player.style.transform = transf;
    setTimeout(() => {
      player.style.transform = DEFAULT_TRANSFORM;
    }, 50);
  }

  switch (action) {
    case "up":
      shiftPerson(UP_DIRECTION, "translateY(44px)");
      break;

    case "left":
      shiftPerson(LEFT_DIRECTION, "translate(64px, -20px)");
      break;

    case "right":
      shiftPerson(RIGHT_DIRECTION, "translate(-64px, -20px)");
      break;

    case "down":
      shiftPerson(DOWN_DIRECTION, "translateY(-84px)");
      break;

    default:
      window.console.error('Error action!');
  }

  animatePlayerMovement(player);
}

const createPersonAction = (evt) => {
  switch (evt.code) {
    case 'ArrowRight':
    case 'KeyD': movePerson("right");
      break;

    case 'ArrowLeft':
    case 'KeyA': movePerson("left");
      break;

    case 'ArrowUp':
    case 'KeyW': movePerson("up");
      break;

    case 'ArrowDown':
    case 'KeyS': movePerson("down");
      break;

    case 'KeyQ': scrollToPlayer(area);
      break;

    default:
      window.console.log(`Клавиша ${evt.code} ничего не делает!`);
  }
}

export {createPersonAction};
