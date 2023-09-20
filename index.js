document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const navList = document.querySelector('.nav__link--list');
  
    burgerIcon.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  });
  