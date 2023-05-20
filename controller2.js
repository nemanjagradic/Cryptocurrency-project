const currentCoin = JSON.parse(localStorage.getItem('currentCoin'));

const renderCoin = function () {
  coinView.renderSpinner();

  coinView.render(currentCoin);
};

renderCoin();

const responsiveNav = function () {
  const menuBtn = document.querySelector('.menu-icon');
  const closeBtn = document.querySelector('.close-btn');
  const responsiveMenu = document.querySelector('.resposnive-menu');

  menuBtn.addEventListener('click', function () {
    responsiveMenu.style.left = '0';
  });
  closeBtn.addEventListener('click', function () {
    responsiveMenu.style.left = '-100%';
  });
};

responsiveNav();
