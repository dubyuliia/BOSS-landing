'use strict';

const form = document.querySelector('.action');

form.addEventListener('submit', e => {
  e.preventDefault(form.reset());
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
