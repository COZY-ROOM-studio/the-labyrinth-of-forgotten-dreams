import {scrollToPlayer} from "./observationArea.js"

const UP_DIRECTION = -100;
const DOWN_DIRECTION = +100;
const LEFT_DIRECTION = -1;
const RIGHT_DIRECTION = +1;

const area = document.querySelector('.main__area.area');

const personAction = (action) => {
  let player = area.querySelector(".main-hero");
  let numberPl = player.parentNode.dataset.number;
  let newAction = 0;

  if (action == "top") {
    newAction = UP_DIRECTION;
    player.style.transform = "translateY(-84px)";
  } else if (action == "left") {
    newAction = LEFT_DIRECTION;
    player.style.transform = "translate(-64px, -20px)";
  } else if (action == "right") {
    newAction = RIGHT_DIRECTION;
    player.style.transform = "translate(64px, -20px)";
  } else if (action == "down") {
    newAction = DOWN_DIRECTION;
    player.style.transform = "translateY(44px)";
  }

  let nextPl = area.querySelector(`[data-number='${+numberPl+newAction}'`);
  setTimeout(() => {
    nextPl.append(player);
    player.style.transform = "translateY(-20px)";
  }, 200);
}

const movePerson = (evt) => {
  evt.preventDefault();
  if (evt.code === 'KeyD' || evt.code === 'ArrowRight') {
    personAction("right")
    // scrollToPlayer(area);
  } else if (evt.code === 'KeyA' || evt.code === 'ArrowLeft') {
    personAction("left")
    // scrollToPlayer(area);
  } else if (evt.code === 'KeyW' || evt.code === 'ArrowUp') {
    personAction("top")
    // scrollToPlayer(area);
  } else if (evt.code === 'KeyS' || evt.code === 'ArrowDown') {
    personAction("down")
    // scrollToPlayer(area);
  } else if (evt.code === 'KeyQ') {
    scrollToPlayer(area);
  }
}

export {movePerson};
