const scrollToPlayer = (area) => {
  let player = area.querySelector(".main-hero");
  // скролл до персонажа
  player.scrollIntoView({
    block: 'center',
    inline: 'center',
    behavior: 'auto'
  });
};

export {scrollToPlayer};
