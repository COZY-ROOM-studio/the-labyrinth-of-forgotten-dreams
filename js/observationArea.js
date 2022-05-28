const scrollToPlayer = (area) => {
  let player = area.querySelector(".main-hero");
  player.scrollIntoView({
    block: 'center',
    inline: 'center',
    behavior: 'auto'
  });
};

export {scrollToPlayer};
