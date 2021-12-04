'use strict';

try {
  angular.module('cartAppTranslations');
} catch (e) {
  angular.module('cartAppTranslations', ['pascalprecht.translate']);
}

angular.module('cartAppTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'CART_TABLE_TOTAL_TITLE': 'TOTAL',
      'SUBTOTAL_TITLE': 'Subtotal',
      'SKU_TITLE': 'SKU: {{ sku }}',
      'OUT_OF_STOCK_TITLE': 'Out of Stock',
      'REMOVE_PRODUCT_BUTTON_TITLE': 'Remove Item',
      'CART_WIDGET_CART_TITLE': 'Cart',
      'CART_WIDGET_CLOSE_BUTTON_TITLE': 'Close cart widget',
      'CART_WIDGET_VIEW_CART_BUTTON': 'View Cart',
      'CART_WIDGET_EMPTY_CART_MESSAGE': 'Cart is empty',
      'CART_WIDGET_QUANTITY_TITLE': 'QTY: ',
      'cartWidget': {
        'sr': {
          'PRODUCT_WAS_REMOVED': '{{ productName }} was removed from the cart',
          'PRODUCT_PRICE_BEFORE_DISCOUNT': 'Regular Price',
          'PRODUCT_PRICE_AFTER_DISCOUNT': 'Sale Price',
          'PRODUCT_PRICE_WHEN_THERE_IS_NO_DISCOUNT': 'Price'
        }
      },
      'CART_WIDGET_CLOSE_CTA': 'Close',
      'CART_WIDGET_CURRENCY_CONVERTER_DISCLAIMER': 'Processed in {{mainCurrency}}'
    };
    $translateProvider.translations('en', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('en');
  }
]);