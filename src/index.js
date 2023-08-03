import { createHeader } from './pages/header';
import { createPage } from './pages/page';
import { createHomePage } from './pages/home';
import { createMenuPage } from './pages/menu';
import { createContactPage } from './pages/contact';

export let page;
export let buttons = [];

const content = document.querySelector('#content');
createHeader(content);
createPage(content);
createHomePage(page);

const attachEventListeners = () => {
  buttons[0].addEventListener('click', () => {
    if (buttons[0].classList.contains('active')) return;
    removeActiveClass();
    removePageChilds();
    createHomePage(page);
    buttons[0].classList.add('active');
  });

  buttons[1].addEventListener('click', () => {
    if (buttons[1].classList.contains('active')) return;
    removeActiveClass();
    removePageChilds();
    createMenuPage(page);
    buttons[1].classList.add('active');
  });

  buttons[2].addEventListener('click', () => {
    if (buttons[2].classList.contains('active')) return;
    removeActiveClass();
    removePageChilds();
    createContactPage(page);
    buttons[2].classList.add('active');
  });
};

const removeActiveClass = () => {
  buttons.forEach((btn) => btn.classList.remove('active'));
};

const removePageChilds = () => {
  page.textContent = '';
};

attachEventListeners();
