export const createHomePage = (content) => {
  const homePage = document.createElement('div');
  homePage.classList.add('home');
  content.appendChild(homePage);
  homePage.appendChild(createHomeWrapper());
};

const createHomeWrapper = () => {
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper');
  homeWrapper.appendChild(createHomeContent());
  return homeWrapper;
};

const createHomeContent = () => {
  const homeContent = document.createElement('div');
  homeContent.classList.add('home-content');
  homeContent.appendChild(createWelcomeContainer());
  homeContent.appendChild(createDescription());
  homeContent.appendChild(createImageWrapper());
  homeContent.appendChild(createSubtext());
  return homeContent;
};

const createWelcomeContainer = () => {
  const welcomeContaiener = document.createElement('div');
  welcomeContaiener.classList.add('welcome-container');
  welcomeContaiener.textContent = 'Welcome to "Pizzeria Bella"';
  return welcomeContaiener;
};

const createDescription = () => {
  const description = document.createElement('div');
  description.classList.add('description');
  description.textContent =
    'We take great pride in crafting the most authentic and mouthwatering Italian pizzas!';
  return description;
};

const createImageWrapper = () => {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('img-wrapper');
  imageWrapper.appendChild(createImageContainer());
  return imageWrapper;
};

const createImageContainer = () => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');
  imageContainer.appendChild(createChiefImage());
  return imageContainer;
};

const createChiefImage = () => {
  const chiefImage = document.createElement('img');
  chiefImage.classList.add('chief-img');
  chiefImage.src = 'images/chief.png';
  return chiefImage;
};

const createSubtext = () => {
  const subtext = document.createElement('div');
  subtext.classList.add('subtext-container');
  subtext.textContent = '- Buon Appetito!';
  return subtext;
};
