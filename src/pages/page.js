import { page } from '..';

export const createPage = (content) => {
  const page = document.createElement('div');
  page.classList.add('page');
  content.appendChild(page);
  page.appendChild(createPageWrapper());
  return page;
};

const createPageWrapper = () => {
  const pageWrapper = document.createElement('div');
  pageWrapper.classList.add('page-wrapper');
  pageWrapper.appendChild(createPageContent());
  return pageWrapper;
};

const createPageContent = () => {
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  page = pageContent;
  return pageContent;
};
