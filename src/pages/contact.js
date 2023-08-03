export const createContactPage = (pageContent) => {
  pageContent.appendChild(createContactText());
  pageContent.appendChild(createPhoneContainer());
  pageContent.appendChild(createLocationContainer());
};

const createContactText = () => {
  const contactText = document.createElement('div');
  contactText.classList.add('contact-text');
  contactText.textContent = 'Contact Us';
  return contactText;
};

const createPhoneContainer = () => {
  const phoneContainer = document.createElement('div');
  phoneContainer.classList.add('phone-container');
  phoneContainer.appendChild(createPhoneIcon());
  phoneContainer.appendChild(createPhoneText());
  return phoneContainer;
};

const createPhoneIcon = () => {
  const phoneIcon = document.createElement('img');
  phoneIcon.classList.add('phone-icon');
  phoneIcon.src = 'images/phone.svg';
  return phoneIcon;
};

const createPhoneText = () => {
  const phoneText = document.createElement('div');
  phoneText.classList.add('phone-text');
  phoneText.textContent = '012345678';
  return phoneText;
};

const createLocationContainer = () => {
  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location-container');
  locationContainer.appendChild(createLocationText());
  locationContainer.appendChild(createImage());
  return locationContainer;
};

const createLocationText = () => {
  const locationText = document.createElement('div');
  locationText.classList.add('location-text');
  locationText.textContent = 'Location';
  return locationText;
};

const createImage = () => {
  const img = document.createElement('img');
  img.src = 'images/mcdonalds.png';
  img.classList.add('img-location');
  return img;
};
