export const createMenuPage = (pageContent) => {
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');
  pageContent.appendChild(menuWrapper);
  createCards().forEach((card, i) => {
    menuWrapper.appendChild(card);
    card.appendChild(createImgContainer(i));
    card.appendChild(createNameContainer(i));
  });
};

const createCards = () => {
  let cards = [];
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    cards.push(card);
  }
  return cards;
};

const createImgContainer = (i) => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  imgContainer.appendChild(createImg(i));
  return imgContainer;
};

const createImg = (i) => {
  const img = document.createElement('img');
  img.classList.add('food-img');
  // img src
  img.src = `images/pizza${i}.jpg`;
  return img;
};

const createNameContainer = (i) => {
  let pizzaNames = {
    0: 'Pizza Margherita',
    1: 'Pizza Alla Pala',
    2: 'Pizza al Taglio',
    3: 'Pizza Fritta',
    4: 'Pizza Ortolana',
    5: 'Pizza Quattro Formaggi',
  };
  const name = document.createElement('div');
  name.classList.add('food-name');
  // name text
  name.textContent = `${pizzaNames[i]}`;
  return name;
};
