/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';

  const select = {
    templateOf: {
      menuProduct: '#template-menu-product',
    },
    containerOf: {
      menu: '#product-list',
      cart: '#cart',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    menuProduct: {
      clickable: '.product__header',
      form: '.product__order',
      priceElem: '.product__total-price .price',
      imageWrapper: '.product__images',
      amountWidget: '.widget-amount',
      cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
      amount: {
        input: 'input[name="amount"]',
        linkDecrease: 'a[href="#less"]',
        linkIncrease: 'a[href="#more"]',
      },
    },
  };

  const classNames = {
    menuProduct: {
      wrapperActive: 'active',
      imageVisible: 'active',
    },
  };

  const settings = {
    amountWidget: {
      defaultValue: 1,
      defaultMin: 1,
      defaultMax: 9,
    }
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  };

  const app = {
    initMenu: function () {
      const thisApp = this;

      console.log('thisApp.data:', thisApp.data);

      /*Tworzenie instancji dla każdego produktu(w pętli) po obiekcie thisApp.data.products*/
      for (let productData in thisApp.data.products) {
        new Product(productData, thisApp.data.products[productData]);
      }
      // const testProduct = new Product();
      // /*uruchomienie w metodzie app.initMenu*/
      // console.log('testProduct:', testProduct);

    },
    /*Instancja dla każdego produktu*/
    initData: function () {
      const thisApp = this;

      thisApp.data = dataSource;
    },
    init: function () {
      const thisApp = this;
      console.log('*** App starting ***');
      console.log('thisApp:', thisApp);
      console.log('classNames:', classNames);
      console.log('settings:', settings);
      console.log('templates:', templates);
      /*dodawanie delkaracji*/
      thisApp.initData();
      /*dodawanie delkaracji przed app init*/
      thisApp.initMenu();
    },
  };
  class Product {
    constructor(id, data) {
      const thisProduct = this;
      /*tworzenie in i obiektu data w instancji Product*/
      thisProduct.id = id;
      thisProduct.data = data;
      /*Renderowanie*/
      thisProduct.renderInMenu();
      /*Akordeon*/
      thisProduct.initAccordion();

      /*Wyświetlanie przez konstruktor klasy*/
      console.log('new Product:', thisProduct);
    }
    renderInMenu() {
      const thisProduct = this;
      /* generate HTML based on template - wygenerować kod HTML pojedynczego produktu (za pomocą handlebarsa templates ktory bierze wartosci z obiektu templateOf )*/
      const generatedHTML = templates.menuProduct(thisProduct.data);
      /* create element using utils.createElementFromDOM - stworzyć element DOM na podstawie tego kodu produktu (pobierane z utils z functions.js) */
      thisProduct.element = utils.createDOMFromHTML(generatedHTML);
      /* find menu container - znaleźć na stronie kontener menu,*/
      const menuContainer = document.querySelector(select.containerOf.menu);
      /* add element to menu - wstawić stworzony element DOM do znalezionego kontenera menu (za pomocą metody appendChild)*/
      menuContainer.appendChild(thisProduct.element);
    }
    initAccordion() {
      //   /* find the clickable trigger (the element that should react to clicking) */
      //   const thisProduct = select.menuProduct(thisProduct.clickable);
      //   /* START: click event listener to trigger */
      //   const buttonTest = document.getElementById('button-test');
      //   buttonTest.addEventListener('click', function () {
      //     console.log('clicked');
      //   });
      //   /* prevent default action for event */
      //   event.preventDefaut();
      //   /* toggle active class on element of thisProduct */
      //   // const activeProduct = thisProduct.menuProductsActive;
      //   /* find all active products *//*Chodzi tutaj o classNames.menuProduct.wrapperActive???*/

      //   /* START LOOP: for each active product */

      //   /* START: if the active product isn't the element of thisProduct */

      //   /* remove class active for the active product */

      //   /* END: if the active product isn't the element of thisProduct */

      //   /* END LOOP: for each active product */

      //   /* END: click event listener to trigger */

    }
  }
  /*DEKLARACJA APP*/
  app.init();
  app.initData();
}
