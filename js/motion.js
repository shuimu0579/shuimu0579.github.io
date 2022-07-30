<<<<<<< HEAD
<<<<<<< HEAD
/* global NexT, CONFIG */
=======
/* global NexT, CONFIG, Velocity */

if (window.$ && window.$.Velocity) window.Velocity = window.$.Velocity;
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
/* global NexT, CONFIG */
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00

NexT.motion = {};

NexT.motion.integrator = {
<<<<<<< HEAD
<<<<<<< HEAD
  queue: [],
  init : function() {
    this.queue = [];
    return this;
  },
  add: function(fn) {
    const sequence = fn();
    if (CONFIG.motion.async) this.queue.push(sequence);
    else this.queue = this.queue.concat(sequence);
    return this;
  },
  bootstrap: function() {
    if (!CONFIG.motion.async) this.queue = [this.queue];
    this.queue.forEach(sequence => {
      const timeline = window.anime.timeline({
        duration: 200,
        easing  : 'linear'
      });
      sequence.forEach(item => {
        if (item.deltaT) timeline.add(item, item.deltaT);
        else timeline.add(item);
      });
    });
=======
  queue : [],
  cursor: -1,
  init  : function() {
=======
  queue: [],
  init : function() {
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
    this.queue = [];
    return this;
  },
  add: function(fn) {
    const sequence = fn();
    if (CONFIG.motion.async) this.queue.push(sequence);
    else this.queue = this.queue.concat(sequence);
    return this;
  },
  bootstrap: function() {
<<<<<<< HEAD
    this.next();
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
    if (!CONFIG.motion.async) this.queue = [this.queue];
    this.queue.forEach(sequence => {
      const timeline = window.anime.timeline({
        duration: 200,
        easing  : 'linear'
      });
      sequence.forEach(item => {
        if (item.deltaT) timeline.add(item, item.deltaT);
        else timeline.add(item);
      });
    });
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
  }
};

NexT.motion.middleWares = {
<<<<<<< HEAD
<<<<<<< HEAD
  header: function() {
    const sequence = [];

    function getMistLineSettings(targets) {
      sequence.push({
        targets,
        scaleX  : [0, 1],
        duration: 500,
        deltaT  : '-=200'
      });
    }

    function pushToSequence(targets, sequenceQueue = false) {
      sequence.push({
        targets,
        opacity: 1,
        top    : 0,
        deltaT : sequenceQueue ? '-=200' : '-=0'
      });
    }

    pushToSequence('header.header');
    CONFIG.scheme === 'Mist' && getMistLineSettings('.logo-line');
    CONFIG.scheme === 'Muse' && pushToSequence('.custom-logo-image');
    pushToSequence('.site-title');
    pushToSequence('.site-brand-container .toggle', true);
    pushToSequence('.site-subtitle');
    (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && pushToSequence('.custom-logo-image');

    document.querySelectorAll('.menu-item').forEach(targets => {
      sequence.push({
        targets,
        complete: () => targets.classList.add('animated', 'fadeInDown'),
        deltaT  : '-=200'
      });
    });

    return sequence;
  },

  subMenu: function() {
    const subMenuItem = document.querySelectorAll('.sub-menu .menu-item');
    if (subMenuItem.length > 0) {
      subMenuItem.forEach(element => {
        element.classList.add('animated');
      });
    }
    return [];
  },

  postList: function() {
    const sequence = [];
    const { post_block, post_header, post_body, coll_header } = CONFIG.motion.transition;

    function animate(animation, selector) {
      if (!animation) return;
      document.querySelectorAll(selector).forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', animation),
          deltaT  : '-=100'
        });
      });
    }

    animate(post_block, '.post-block, .pagination, .comments');
    animate(coll_header, '.collection-header');
    animate(post_header, '.post-header');
    animate(post_body, '.post-body');

    return sequence;
  },

  sidebar: function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarTransition = CONFIG.motion.transition.sidebar;
    // Only for Pisces | Gemini.
    if (sidebarTransition && (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini')) {
      return [{
        targets : sidebar,
        complete: () => sidebar.classList.add('animated', sidebarTransition)
      }];
    }
    return [];
  },

  footer: function() {
    return [{
      targets: document.querySelector('.footer'),
      opacity: 1
    }];
=======
  logo: function(integrator) {
    var sequence = [];
    var brand = document.querySelector('.brand');
    var image = document.querySelector('.custom-logo-image');
    var title = document.querySelector('.site-title');
    var subtitle = document.querySelector('.site-subtitle');
    var logoLineTop = document.querySelector('.logo-line-before i');
    var logoLineBottom = document.querySelector('.logo-line-after i');

    brand && sequence.push({
      e: brand,
      p: {opacity: 1},
      o: {duration: 200}
    });
=======
  header: function() {
    const sequence = [];
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00

    function getMistLineSettings(targets) {
      sequence.push({
        targets,
        scaleX  : [0, 1],
        duration: 500,
        deltaT  : '-=200'
      });
    }

    function pushToSequence(targets, sequenceQueue = false) {
      sequence.push({
        targets,
        opacity: 1,
        top    : 0,
        deltaT : sequenceQueue ? '-=200' : '-=0'
      });
    }

    pushToSequence('header.header');
    CONFIG.scheme === 'Mist' && getMistLineSettings('.logo-line');
    CONFIG.scheme === 'Muse' && pushToSequence('.custom-logo-image');
    pushToSequence('.site-title');
    pushToSequence('.site-brand-container .toggle', true);
    pushToSequence('.site-subtitle');
    (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && pushToSequence('.custom-logo-image');

    document.querySelectorAll('.menu-item').forEach(targets => {
      sequence.push({
        targets,
        complete: () => targets.classList.add('animated', 'fadeInDown'),
        deltaT  : '-=200'
      });
    });

    return sequence;
  },

  subMenu: function() {
    const subMenuItem = document.querySelectorAll('.sub-menu .menu-item');
    if (subMenuItem.length > 0) {
      subMenuItem.forEach(element => {
        element.classList.add('animated');
      });
    }
    return [];
  },

  postList: function() {
    const sequence = [];
    const { post_block, post_header, post_body, coll_header } = CONFIG.motion.transition;

    function animate(animation, selector) {
      if (!animation) return;
      document.querySelectorAll(selector).forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', animation),
          deltaT  : '-=100'
        });
      });
    }

    animate(post_block, '.post-block, .pagination, .comments');
    animate(coll_header, '.collection-header');
    animate(post_header, '.post-header');
    animate(post_body, '.post-body');

    return sequence;
  },

  sidebar: function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarTransition = CONFIG.motion.transition.sidebar;
    // Only for Pisces | Gemini.
    if (sidebarTransition && (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini')) {
      return [{
        targets : sidebar,
        complete: () => sidebar.classList.add('animated', sidebarTransition)
      }];
    }
<<<<<<< HEAD
    integrator.next();
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
=======
    return [];
  },

  footer: function() {
    return [{
      targets: document.querySelector('.footer'),
      opacity: 1
    }];
>>>>>>> 952ca0cab08c9a62af43f720125430f99b387e00
  }
};
