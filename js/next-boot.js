<<<<<<< HEAD
<<<<<<< HEAD
/* global NexT, CONFIG */
=======
/* global NexT, CONFIG, Velocity */
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
/* global NexT, CONFIG */
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00

NexT.boot = {};

NexT.boot.registerEvents = function() {

  NexT.utils.registerScrollPercent();
  NexT.utils.registerCanIUseTag();

  // Mobile top menu bar.
<<<<<<< HEAD
<<<<<<< HEAD
  document.querySelector('.site-nav-toggle .toggle').addEventListener('click', event => {
    event.currentTarget.classList.toggle('toggle-close');
    const siteNav = document.querySelector('.site-nav');
    if (!siteNav) return;
    siteNav.style.setProperty('--scroll-height', siteNav.scrollHeight + 'px');
    document.body.classList.toggle('site-nav-on');
  });

  document.querySelectorAll('.sidebar-nav li').forEach((element, index) => {
    element.addEventListener('click', () => {
      NexT.utils.activateSidebarPanel(index);
    });
  });

  window.addEventListener('hashchange', () => {
    const tHash = location.hash;
    if (tHash !== '' && !tHash.match(/%\S{2}/)) {
      const target = document.querySelector(`.tabs ul.nav-tabs li a[href="${tHash}"]`);
=======
  document.querySelector('.site-nav-toggle .toggle').addEventListener('click', () => {
=======
  document.querySelector('.site-nav-toggle .toggle').addEventListener('click', event => {
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
    event.currentTarget.classList.toggle('toggle-close');
    const siteNav = document.querySelector('.site-nav');
    if (!siteNav) return;
    siteNav.style.setProperty('--scroll-height', siteNav.scrollHeight + 'px');
    document.body.classList.toggle('site-nav-on');
  });

  document.querySelectorAll('.sidebar-nav li').forEach((element, index) => {
    element.addEventListener('click', () => {
      NexT.utils.activateSidebarPanel(index);
    });
  });

  window.addEventListener('hashchange', () => {
    const tHash = location.hash;
    if (tHash !== '' && !tHash.match(/%\S{2}/)) {
<<<<<<< HEAD
      var target = document.querySelector(`.tabs ul.nav-tabs li a[href="${tHash}"]`);
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
      const target = document.querySelector(`.tabs ul.nav-tabs li a[href="${tHash}"]`);
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
      target && target.click();
    }
  });
};

NexT.boot.refresh = function() {

  /**
   * Register JS handlers by condition option.
<<<<<<< HEAD
<<<<<<< HEAD
   * Need to add config option in Front-End at 'scripts/helpers/next-config.js' file.
   */
  CONFIG.prism && window.Prism.highlightAll();
  CONFIG.mediumzoom && window.mediumZoom('.post-body :not(a) > img, .post-body > img', {
    background: 'var(--content-bg-color)'
  });
=======
   * Need to add config option in Front-End at 'layout/_partials/head.swig' file.
   */
  CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox();
  CONFIG.mediumzoom && window.mediumZoom('.post-body :not(a) > img, .post-body > img');
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
   * Need to add config option in Front-End at 'scripts/helpers/next-config.js' file.
   */
  CONFIG.prism && window.Prism.highlightAll();
  CONFIG.mediumzoom && window.mediumZoom('.post-body :not(a) > img, .post-body > img', {
    background: 'var(--content-bg-color)'
  });
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
  CONFIG.lazyload && window.lozad('.post-body img').observe();
  CONFIG.pangu && window.pangu.spacingPage();

  CONFIG.exturl && NexT.utils.registerExtURL();
<<<<<<< HEAD
<<<<<<< HEAD
  NexT.utils.wrapTableWithBox();
  NexT.utils.registerCopyCode();
=======
  CONFIG.copycode.enable && NexT.utils.registerCopyCode();
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
  NexT.utils.wrapTableWithBox();
  NexT.utils.registerCopyCode();
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
  NexT.utils.registerTabsTag();
  NexT.utils.registerActiveMenuItem();
  NexT.utils.registerLangSelect();
  NexT.utils.registerSidebarTOC();
<<<<<<< HEAD
<<<<<<< HEAD
  NexT.utils.registerPostReward();
=======
  NexT.utils.wrapTableWithBox();
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
  NexT.utils.registerPostReward();
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
  NexT.utils.registerVideoIframe();
};

NexT.boot.motion = function() {
  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    NexT.motion.integrator
<<<<<<< HEAD
<<<<<<< HEAD
      .add(NexT.motion.middleWares.header)
      .add(NexT.motion.middleWares.postList)
      .add(NexT.motion.middleWares.sidebar)
      .add(NexT.motion.middleWares.footer)
=======
      .add(NexT.motion.middleWares.logo)
      .add(NexT.motion.middleWares.menu)
      .add(NexT.motion.middleWares.postList)
      .add(NexT.motion.middleWares.sidebar)
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
      .add(NexT.motion.middleWares.header)
      .add(NexT.motion.middleWares.postList)
      .add(NexT.motion.middleWares.sidebar)
      .add(NexT.motion.middleWares.footer)
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
      .bootstrap();
  }
  NexT.utils.updateSidebarPosition();
};

document.addEventListener('DOMContentLoaded', () => {
  NexT.boot.registerEvents();
  NexT.boot.refresh();
  NexT.boot.motion();
});
