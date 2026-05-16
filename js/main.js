/* ================================================
   小料理 とりこ — main.js
   ================================================ */

(function () {
  'use strict';

  /* ---- Hero: 左右の枝が中央で重なる → ほどいてロゴ露出（ロゴは早め） ---- */
  window.addEventListener('load', function () {
    var hero    = document.querySelector('.hero');
    var content = document.querySelector('.hero__content');
    var scroll  = document.querySelector('.hero__scroll');

    if (!hero) return;

    requestAnimationFrame(function () {
      hero.classList.add('is-intro');
    });

    setTimeout(function () {
      hero.classList.add('is-open');
    }, 900);

    setTimeout(function () {
      if (content) content.classList.add('is-visible');
    }, 1600);

    setTimeout(function () {
      if (scroll) scroll.classList.add('is-shown');
    }, 4500);

    setTimeout(function () {
      hero.classList.add('hero--veil-done');
    }, 5200);
  });

  /* ---- Navigation ---- */
  var nav       = document.getElementById('nav');
  var hamburger = document.getElementById('navHamburger');
  var navList   = document.getElementById('navList');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  if (hamburger && navList) {
    hamburger.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });

    navList.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'メニューを開く');
      });
    });
  }

  /* ---- Scroll Reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

})();
