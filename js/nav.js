// highlights the current page's nav link and handles the mobile hamburger

document.addEventListener('DOMContentLoaded', () => {

  // active nav link
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentFile) {
      link.classList.add('active');
    }
  });

  // hamburger
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav   = document.querySelector('.main-nav');

  if (!navToggle || !mainNav) return;

  function openNav() {
    mainNav.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    navToggle.classList.contains('open') ? closeNav() : openNav();
  });

  // close when a link is tapped
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // close if resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeNav();
  });

});
