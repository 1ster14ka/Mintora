const btnMenu = document.querySelector('.nav__menu-button');
const page = document.querySelector('.page');
const menu = document.querySelector('.mobile-menu');

btnMenu.addEventListener('click', openModal);
page.addEventListener('click', closeMobileMenu);

function closeMobileMenu(event) {
  if (event.target.classList.contains('page')) {
    closeModal();
  }
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

let touchStartX = 0;

menu.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].screenX;
});

menu.addEventListener('touchend', event => {
  const touchEnd = event.changedTouches[0].screenX;
  const swipeDistance = touchEnd - touchStartX;
  if (swipeDistance > 80) {
    closeModal();
  }
});
function openModal() {
  page.classList.add('is-menu-open');
  btnMenu.classList.add('is-open');
  // console.dir(document.body);
  document.body.classList.add('no-scroll');
}
function closeModal() {
  page.classList.remove('is-menu-open');
  btnMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}
