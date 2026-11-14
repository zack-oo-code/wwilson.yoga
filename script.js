const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
let menuCloseTimer;

function setMenuState(isOpen) {
  window.clearTimeout(menuCloseTimer);
  menu?.classList.toggle('open', isOpen);
  header?.classList.toggle('menu-open', isOpen);
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  const menuLabel = menuButton?.querySelector('.sr-only');
  if (menuLabel) menuLabel.textContent = isOpen ? 'Close menu' : 'Open menu';

  if (isOpen) {
    document.body.classList.add('menu-open');
    return;
  }

  // Keep the page locked until the closing transition has finished.
  menuCloseTimer = window.setTimeout(() => {
    document.body.classList.remove('menu-open');
  }, 280);
}

menuButton?.addEventListener('click', () => {
  setMenuState(!menu?.classList.contains('open'));
});

function scrollToTop(event) {
  event.preventDefault();

  // `document.scrollingElement` is more reliable than window scrolling on
  // mobile Safari. Keeping the #top destination also provides a no-script
  // fallback for the footer link.
  const scrollRoot = document.scrollingElement || document.documentElement;
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  scrollRoot.scrollTo({ top: 0, left: 0, behavior });
  window.scrollTo({ top: 0, left: 0, behavior });
  history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', scrollToTop);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', (event) => {
  const destination = link.getAttribute('href');

  // On mobile, the full-screen menu temporarily locks page scrolling while it
  // dissolves away. Handle in-page links after that transition so the target
  // section is never left behind the fixed navigation bar.
  if (destination?.startsWith('#')) {
    event.preventDefault();
    const target = document.querySelector(destination);
    setMenuState(false);

    window.setTimeout(() => {
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', destination);
    }, 300);
    return;
  }

  setMenuState(false);
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.documentElement.classList.add('js');

const revealTargets = document.querySelectorAll([
  '.hero-copy > *',
  '.hero-image',
  '.section-label',
  '.intro-heading',
  '.intro-note p',
  '.practice-heading > h2',
  '.practice-heading > p',
  '.offering',
  '.ritual-content > div',
  '.ritual-list li',
  '.join > :not(.join-photo)',
  '.instagram > div',
  '.instagram-link',
  '.contact > *',
  '.faq-heading',
  '.faq details',
  '.site-footer > *',
].join(','));
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    requestAnimationFrame(() => entry.target.classList.add('is-visible'));
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

revealTargets.forEach((target, index) => {
  target.classList.add('scroll-reveal');
  if (target.matches('.section-label, .intro-heading, .practice-heading > h2, .ritual-content > div, .join > :not(.join-photo), .contact > :not(.contact-copy), .faq-heading')) {
    target.classList.add('reveal-left');
  }
  if (target.matches('.intro-note p, .practice-heading > p, .ritual-list li, .instagram-link, .contact-copy, .faq details')) {
    target.classList.add('reveal-right');
  }
  target.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
  revealObserver.observe(target);
});
