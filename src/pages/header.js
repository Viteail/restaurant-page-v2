export const createHeader = (content) => {
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);
  header.appendChild(createTitle());
  header.appendChild(createNavWrapper());
};

const createTitle = () => {
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  titleContainer.textContent = 'Pizzeria Bella';
  return titleContainer;
};

const createNavWrapper = () => {
  const navWrapper = document.createElement('div');
  navWrapper.classList.add('nav-wrapper');
  navWrapper.appendChild(createHomeButton());
  navWrapper.appendChild(createMenuButton());
  navWrapper.appendChild(createContactButton());
  return navWrapper;
};

const createHomeButton = () => {
  const homeBtn = document.createElement('button');
  homeBtn.classList.add('home-btn', 'active'); //for now
  homeBtn.textContent = 'Home';
  return homeBtn;
};

const createMenuButton = () => {
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');
  menuBtn.textContent = 'Menu';
  return menuBtn;
};

const createContactButton = () => {
  const contactBtn = document.createElement('button');
  contactBtn.classList.add('contact-btn');
  contactBtn.textContent = 'Contact';
  return contactBtn;
};
