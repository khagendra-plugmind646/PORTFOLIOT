// Select DOM elements
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

// Utility function to toggle class
const toggleClass = (element, className) => {
  if (element) {
    element.classList.toggle(className);
  }
};

// Handle menu button click
hamMenuBtn?.addEventListener('click', () => {
  toggleClass(smallMenu, 'header__sm-menu--active');
  toggleClass(headerHamMenuBtn, 'd-none');
  toggleClass(headerHamMenuCloseBtn, 'd-none');
});

// Add event listeners to small menu links for additional functionality (if needed)
headerSmallMenuLinks?.forEach((link) => {
  link.addEventListener('click', () => {
    smallMenu?.classList.remove('header__sm-menu--active');
    headerHamMenuBtn?.classList.remove('d-none');
    headerHamMenuCloseBtn?.classList.add('d-none');
  });
});