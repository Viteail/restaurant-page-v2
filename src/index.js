import { createHeader } from './pages/header';
import { createPage } from './pages/page';
import { createHomePage } from './pages/home';
import { createMenuPage } from './pages/menu';

export let page;

const content = document.querySelector('#content');
createHeader(content);
createPage(content);
// createHomePage(page);
createMenuPage(page);
