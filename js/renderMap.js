const fragment = document.createDocumentFragment();
const area = document.querySelector('.main__area.area');
const temp = document.querySelector('#area-element').content.querySelector('.area__element');

const getRenderedArea = () => {
  for (let i=0; i<10000; i++) {
    const newContent = temp.cloneNode(true);
    newContent.classList.add(`${i+1}`)
    fragment.append(newContent);
  }

  area.append(fragment);
};

export {getRenderedArea, area};
