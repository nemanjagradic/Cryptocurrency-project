import View from './View.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagination-btn');
      if (!btn) return;
      const page = +btn.dataset.goto;
      handler(page);
    });
  }

  _generateMarkup() {
    const numOfPages = this._data.coins.length / this._data.resultPerPage;
    const pagesArr = [...Array(numOfPages)].map((page, i) => (page = i + 1));
    return pagesArr
      .map(page => {
        return `<button data-goto = ${page} class="pagination-btn ${
          this._data.page === page ? 'btn-active' : ''
        }">${page}</button>
        `;
      })
      .join('');
  }
}

export default new PaginationView();
