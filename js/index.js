'use strict';

const mainList = document.querySelector('.main-list');

mainList.addEventListener('click', hendleClick);

function hendleClick(e) {
  const { target } = e;

  if (target.tagName === 'H3') {
    const subList = target.closest('li').querySelector('.sub-list');

    if (getComputedStyle(subList).display === 'none') {
      subList.style.display = 'block';
      return;
    }

    subList.style.display = 'none';
  }
}