import View from './View.js';

class CryptoItemsView extends View {
  _parentEl = document.querySelector('.crypto-all-items');
  _generateMarkup() {
    return this._data
      .map(item => {
        const price = new Intl.NumberFormat('en-us', {
          style: 'currency',
          currency: 'USD',
        }).format(item.current_price);
        let marketCap = new Intl.NumberFormat('en-us', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(item.market_cap);

        return `
            <div class="crypto-item">
              <a href ='' data-name=${item.id}>
                <div class='crypto-content'>
                <div class='crypto-img-title'>
                  <div class="crypto-image">
                    <img src="${item.image}" alt=""/>
                  </div>
                  <p>${item.name}</p>
                </div>
                  <div class='crypto-price'>${price}</div>
                  <div class='crypto-change'><span class = ${
                    item.market_cap_change_percentage_24h > 0
                      ? 'positive'
                      : 'negative'
                  }>${item.market_cap_change_percentage_24h.toFixed(
          2
        )}%</span></div>
                  <div class='crypto-cap'><p>${marketCap}</p></div>
                </div>
              </a>
            </div>
            `;
      })
      .join('');
  }

  getCoinName(callback) {
    const cryptoItems = document.querySelectorAll('.crypto-item');
    cryptoItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const item = e.target.closest('.crypto-item');
        const tag = item.querySelector('a');
        const itemName = tag.dataset.name;
        console.log(tag);
        console.log(itemName);
        callback(itemName);
      });
    });
  }
}

export default new CryptoItemsView();
