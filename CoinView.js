class CoinView {
  _parentEl = document.querySelector('.coin');
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  _generateMarkup() {
    const price = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    }).format(this._data.tickers[0].last);
    return `
          <div class="row">
            <div class="coin-main col-md-4">
              <h1>${this._data.name}</h1>
              <div class="coin-img">
                <img src="${this._data.image.large}" alt="" />
              </div>
            </div>
            <div class="coin-desc col-md-8">
              <div class="coin-info d-flex justify-content-between">
                <p>Rank: #${this._data.market_cap_rank}</p>
                <p>24h Change: <span class =${
                  this._data.market_data.market_cap_change_percentage_24h > 0
                    ? 'positive'
                    : 'negative'
                }>${this._data.market_data.market_cap_change_percentage_24h.toFixed(
      2
    )}%</span></p>
                <p>Price: <span class="positive-pr">${price}</span></p>
                <p>
                  <a href="${
                    this._data.links.homepage[0]
                  }"><i class="fa-solid fa-house"></i></a>
                </p>
              </div>
              <p class="desc">
                ${this._data.description.en}
              </p>
            </div>
          </div>
    `;
  }

  renderSpinner() {
    const spinner = `
    <div class="spinner-5"></div>
    `;
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', spinner);
  }
}

const coinView = new CoinView();
