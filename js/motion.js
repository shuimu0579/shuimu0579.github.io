<<<<<<< HEAD
/* global NexT, CONFIG */
=======
/* global NexT, CONFIG, Velocity */

if (window.$ && window.$.Velocity) window.Velocity = window.$.Velocity;
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245

NexT.motion = {};

NexT.motion.integrator = {
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
    this.queue = [];
    this.cursor = -1;
    return this;
  },
  add: function(fn) {
    this.queue.push(fn);
    return this;
  },
  next: function() {
    this.cursor++;
    var fn = this.queue[this.cursor];
    typeof fn === 'function' && fn(NexT.motion.integrator);
  },
  bootstrap: function() {
    this.next();
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
  }
};

NexT.motion.middleWares = {
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

    function getMistLineSettings(element, translateX) {
      return {
        e: element,
        p: {translateX},
        o: {
          duration     : 500,
          sequenceQueue: false
        }
      };
    }

    function pushImageToSequence() {
      sequence.push({
        e: image,
        p: {opacity: 1, top: 0},
        o: {duration: 200}
      });
    }

    CONFIG.scheme === 'Mist' && logoLineTop && logoLineBottom
    && sequence.push(
      getMistLineSettings(logoLineTop, '100%'),
      getMistLineSettings(logoLineBottom, '-100%')
    );

    CONFIG.scheme === 'Muse' && image && pushImageToSequence();

    title && sequence.push({
      e: title,
      p: {opacity: 1, top: 0},
      o: {duration: 200}
    });

    subtitle && sequence.push({
      e: subtitle,
      p: {opacity: 1, top: 0},
      o: {duration: 200}
    });

    (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && image && pushImageToSequence();

    if (sequence.length > 0) {
      sequence[sequence.length - 1].o.complete = function() {
        integrator.next();
      };
      Velocity.RunSequence(sequence);
    } else {
      integrator.next();
    }

    if (CONFIG.motion.async) {
      integrator.next();
    }
  },

  menu: function(integrator) {
    Velocity(document.querySelectorAll('.menu-item'), 'transition.slideDownIn', {
      display : null,
      duration: 200,
      complete: function() {
        integrator.next();
      }
    });

    if (CONFIG.motion.async) {
      integrator.next();
    }
  },

  subMenu: function(integrator) {
    var subMenuItem = document.querySelectorAll('.sub-menu .menu-item');
    if (subMenuItem.length > 0) {
      subMenuItem.forEach(element => {
        element.style.opacity = 1;
      });
    }
    integrator.next();
  },

  postList: function(integrator) {
    var postBlock = document.querySelectorAll('.post-block, .pagination, .comments');
    var postBlockTransition = CONFIG.motion.transition.post_block;
    var postHeader = document.querySelectorAll('.post-header');
    var postHeaderTransition = CONFIG.motion.transition.post_header;
    var postBody = document.querySelectorAll('.post-body');
    var postBodyTransition = CONFIG.motion.transition.post_body;
    var collHeader = document.querySelectorAll('.collection-header');
    var collHeaderTransition = CONFIG.motion.transition.coll_header;

    if (postBlock.length > 0) {
      var postMotionOptions = window.postMotionOptions || {
        stagger : 100,
        drag    : true,
        complete: function() {
          integrator.next();
        }
      };

      if (CONFIG.motion.transition.post_block) {
        Velocity(postBlock, 'transition.' + postBlockTransition, postMotionOptions);
      }
      if (CONFIG.motion.transition.post_header) {
        Velocity(postHeader, 'transition.' + postHeaderTransition, postMotionOptions);
      }
      if (CONFIG.motion.transition.post_body) {
        Velocity(postBody, 'transition.' + postBodyTransition, postMotionOptions);
      }
      if (CONFIG.motion.transition.coll_header) {
        Velocity(collHeader, 'transition.' + collHeaderTransition, postMotionOptions);
      }
    }
    if (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') {
      integrator.next();
    }
  },

  sidebar: function(integrator) {
    var sidebarAffix = document.querySelector('.sidebar-inner');
    var sidebarAffixTransition = CONFIG.motion.transition.sidebar;
    // Only for Pisces | Gemini.
    if (sidebarAffixTransition && (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini')) {
      Velocity(sidebarAffix, 'transition.' + sidebarAffixTransition, {
        display : null,
        duration: 200,
        complete: function() {
          // After motion complete need to remove transform from sidebar to let affix work on Pisces | Gemini.
          sidebarAffix.style.transform = 'initial';
        }
      });
    }
    integrator.next();
>>>>>>> b2be23d79bc8802262aa827f59c5e1f082493245
  }
};
