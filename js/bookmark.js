/* global CONFIG */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

<<<<<<< HEAD
<<<<<<< HEAD
  const doSaveScroll = () => {
    localStorage.setItem('bookmark' + location.pathname, window.scrollY);
  };

  const scrollToMark = () => {
    let top = localStorage.getItem('bookmark' + location.pathname);
=======
  var doSaveScroll = () => {
    localStorage.setItem('bookmark' + location.pathname, window.scrollY);
  };

  var scrollToMark = () => {
    var top = localStorage.getItem('bookmark' + location.pathname);
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
  const doSaveScroll = () => {
    localStorage.setItem('bookmark' + location.pathname, window.scrollY);
  };

  const scrollToMark = () => {
    let top = localStorage.getItem('bookmark' + location.pathname);
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
    top = parseInt(top, 10);
    // If the page opens with a specific hash, just jump out
    if (!isNaN(top) && location.hash === '') {
      // Auto scroll to the position
      window.anime({
        targets  : document.scrollingElement,
        duration : 200,
        easing   : 'linear',
        scrollTop: top
      });
    }
  };
  // Register everything
<<<<<<< HEAD
<<<<<<< HEAD
  const init = function(trigger) {
    // Create a link element
    const link = document.querySelector('.book-mark-link');
    // Scroll event
    window.addEventListener('scroll', () => link.classList.toggle('book-mark-link-fixed', window.scrollY === 0), { passive: true });
=======
  var init = function(trigger) {
=======
  const init = function(trigger) {
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
    // Create a link element
    const link = document.querySelector('.book-mark-link');
    // Scroll event
<<<<<<< HEAD
    window.addEventListener('scroll', () => link.classList.toggle('book-mark-link-fixed', window.scrollY === 0));
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
    window.addEventListener('scroll', () => link.classList.toggle('book-mark-link-fixed', window.scrollY === 0), { passive: true });
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
    // Register beforeunload event when the trigger is auto
    if (trigger === 'auto') {
      // Register beforeunload event
      window.addEventListener('beforeunload', doSaveScroll);
<<<<<<< HEAD
<<<<<<< HEAD
      document.addEventListener('pjax:send', doSaveScroll);
=======
      window.addEventListener('pjax:send', doSaveScroll);
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
      document.addEventListener('pjax:send', doSaveScroll);
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
    }
    // Save the position by clicking the icon
    link.addEventListener('click', () => {
      doSaveScroll();
      window.anime({
        targets : link,
        duration: 200,
        easing  : 'linear',
        top     : -30,
        complete: () => {
          setTimeout(() => {
            link.style.top = '';
          }, 400);
        }
      });
    });
    scrollToMark();
<<<<<<< HEAD
<<<<<<< HEAD
    document.addEventListener('pjax:success', scrollToMark);
=======
    window.addEventListener('pjax:success', scrollToMark);
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
    document.addEventListener('pjax:success', scrollToMark);
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
  };

  init(CONFIG.bookmark.save);
});
