export const state = {
  coins: [],
  topCoins: [],
  coin: {},
  page: 1,
  resultPerPage: 10,
};

export const getCoins = async function () {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'
    );

    const data = await res.json();
    state.coins = data;
    state.topCoins = state.coins.slice(0, 4);
  } catch (err) {
    throw err;
  }
};

export const coinsPage = function (page = state.page) {
  state.page = page;

  const start = (page - 1) * state.resultPerPage;
  const end = page * state.resultPerPage;
  return state.coins.slice(start, end);
};

export const fetchCurrentCoin = async function (name) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${name}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    );

    const data = await res.json();
    state.coin = data;
  } catch (err) {
    throw err;
  }
  console.log(state.coin);

  localStorage.setItem('currentCoin', JSON.stringify(state.coin));
};
