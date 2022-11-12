

document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html');
  const modalButton = document.getElementById('modal-button');
  const modalAboutMe = document.getElementById('modal-about-me')


  modalButton.addEventListener('click', () => {
    modalAboutMe.classList.toggle('is-active');
    html.classList.toggle('is-clipped');
  });

  // Get all modal-background elements
  const $modalBackgrounds = Array.prototype.slice.call(document.querySelectorAll('.modal-background'), 0);

  $modalBackgrounds.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      $target.classList.remove('is-active')
      html.classList.remove('is-clipped')
    });
  });

  // Get all modal-background elements
  const $modalClose = Array.prototype.slice.call(document.querySelectorAll('.modal-close'), 0);

  $modalClose.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      $target.classList.remove('is-active')
      html.classList.remove('is-clipped')
    });
  });
});
