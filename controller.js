import coin from './coin.html';
import * as model from './model.js';
import topCryptoView from './TopCryptoView.js';
import cryptoItemsView from './CryptoItemsView.js';
import paginationView from './PaginationView.js';
import pageView from './PageView.js';

const renderClickedCoin = function (view) {
  view.getCoinName(async function (itemName) {
    await model.fetchCurrentCoin(itemName);
    window.location.href = coin;
  });
};

const topCryptoRender = async function () {
  try {
    topCryptoView.renderSpinner();

    await model.getCoins();

    topCryptoView.render(model.state.topCoins);

    renderClickedCoin(topCryptoView);
  } catch (err) {
    console.log(err);
  }
};

const renderCryptoItems = async function () {
  try {
    cryptoItemsView.renderSpinner();

    await model.getCoins();

    cryptoItemsView.render(model.coinsPage());

    renderClickedCoin(cryptoItemsView);

    paginationView.render(model.state);
  } catch (err) {
    alert('Failed to fetch. Too many request in small time.');
  }
};

const controlPagination = function (page) {
  cryptoItemsView.render(model.coinsPage(page));

  paginationView.update(model.state);

  renderClickedCoin(cryptoItemsView);
};

const init = function () {
  paginationView.addHandlerClick(controlPagination);
  topCryptoRender();
  renderCryptoItems();
  pageView;
};

init();
