const ANIMATION_DURATION = 280;

const animatePlayerMovement = (player) => {
  let timeoutAnim;
  let srcDefault = "../img/main_hero.gif";
  player.src = "../img/skeleton.gif";
  clearTimeout(timeoutAnim);
  timeoutAnim = setTimeout(() => player.src = srcDefault, ANIMATION_DURATION);
};

const animatePlayerActions = () => {};

export {animatePlayerMovement, animatePlayerActions};
