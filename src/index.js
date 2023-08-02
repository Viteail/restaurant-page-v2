import { createHeader } from './pages/header';
import { createHomePage } from './pages/home';

const content = document.querySelector('#content');
createHeader(content);
createHomePage(content);
