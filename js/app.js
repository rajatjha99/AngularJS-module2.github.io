(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        var ctrl1 = this;
        ctrl1.items = ShoppingListCheckOffService.getItems();
        ctrl1.bought = function (item) {
            ShoppingListCheckOffService.boughtItem(item);
            ctrl1.items = ShoppingListCheckOffService.getItems();
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        var ctrl2 = this;
        ctrl2.items = ShoppingListCheckOffService.getBoughtItems();
    };

    function ShoppingListCheckOffService () {
        var service = this;
        var items = [
            {id: 1, name: "cookies", quantity: 5},
            {id: 2, name: "chocolates", quantity: 10},
            {id: 3, name: "mango", quantity: 15},
            {id: 4, name: "donuts", quantity: 20},
            {id: 5, name: "eggs", quantity: 25}];
        var boughtItems = [];

        service.boughtItem = function(item) {
          items = items.filter(function(element) {
            return element.id != item.id;
          });
          boughtItems.push(item);
        };

        service.getBoughtItems = function() {
          return boughtItems;
        };

        service.getItems = function() {
          return items;
        };

      };

})();
