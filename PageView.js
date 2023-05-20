class PageView {
  constructor() {
    this._showAndHideParagraph();
    this._showNavigation();
    this._navScroll();
    this._responsiveNav();
  }

  _showAndHideParagraph() {
    const faqItems = document.querySelector('.faq-items');
    faqItems.addEventListener('click', function (e) {
      const faqItem = e.target.closest('.faq-item');
      const iconClass = faqItem.querySelector('.faq-icon');
      if (!faqItem) return;
      const paragraph = faqItem.querySelector('p');
      if (paragraph.classList.contains('hidden')) {
        paragraph.classList.remove('hidden');
        iconClass.innerHTML = '';
        iconClass.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      } else {
        paragraph.classList.add('hidden');
        iconClass.innerHTML = '';
        iconClass.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      }
    });
  }

  _showNavigation() {
    const nav = document.querySelector('nav');

    const intersectionCallback = function (entries) {
      const [entry] = entries;
      console.log(entry);

      if (!entry.isIntersecting) {
        nav.classList.add('sticky');
        nav.classList.remove('container');
      } else {
        nav.classList.remove('sticky');
        nav.classList.add('container');
      }
    };

    const intersectionOptions = {
      root: null,
      threshold: 0,
    };

    const navObserver = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    const introduction = document.querySelector('.introduction');
    navObserver.observe(introduction);
  }

  _navScroll() {
    const responsiveMenu = document.querySelector('.resposnive-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behaviour: 'smooth' });
        responsiveMenu.style.left = '0'
          ? (responsiveMenu.style.left = '-100%')
          : (responsiveMenu.style.left = '0');
      });
    });
  }

  _responsiveNav() {
    const menuBtn = document.querySelector('.menu-icon');
    const closeBtn = document.querySelector('.close-btn');
    const responsiveMenu = document.querySelector('.resposnive-menu');

    menuBtn.addEventListener('click', function () {
      responsiveMenu.style.left = '0';
    });
    closeBtn.addEventListener('click', function () {
      responsiveMenu.style.left = '-100%';
    });
  }
}

export default new PageView();
