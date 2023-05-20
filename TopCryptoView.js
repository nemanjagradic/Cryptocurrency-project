import View from './View.js';

class TopCryptoView extends View {
  _parentEl = document.querySelector('.top-crypto-items');
  _generateMarkup() {
    return this._data
      .map(item => {
        const price = new Intl.NumberFormat('en-us', {
          style: 'currency',
          currency: 'USD',
        }).format(item.current_price);
        return `
        <div class="top-crypto-item col-md-3">
          <a data-name=${item.id} href='' >
            <div class="top-crypto-img">
              <img src="${item.image}" alt="" />
            </div>
            <h3>${item.name} <span class = ${
          item.market_cap_change_percentage_24h > 0 ? 'positive' : 'negative'
        }>${item.market_cap_change_percentage_24h.toFixed(2)}%</span></h3>
            <p>${price}</p>
          </a>
        </div>
        `;
      })
      .join('');
  }

  getCoinName(callback) {
    const cryptoItems = document.querySelectorAll('.top-crypto-item');
    cryptoItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const item = e.target.closest('.top-crypto-item');
        const tag = item.querySelector('a');
        const itemName = tag.dataset.name;
        callback(itemName);
      });
    });
  }
}

export default new TopCryptoView();
