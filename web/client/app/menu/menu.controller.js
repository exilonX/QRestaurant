'use strict';

angular.module('webApp')
  .controller('MenuCtrl', function ($scope, $translate) {
    $scope.message = 'Hello';

    $scope.menuItems = [
      {
        translateName : "ICE_CREAM",
        name : "Ice cream",
        image_name : "../../assets/images/menu_items/ice51.png",
        background : "#73dda5;"
      },
      {
        translateName : "BEER",
        name : "Beer",
        image_name : "../../assets/images/menu_items/alcohol65.png",
        background : "#bd84d6"
      },
      {
        translateName : "WINES",
        name : "Wines",
        image_name : "../../assets/images/menu_items/wine65.png",
        background : "#9cb4f0"
      },
      {
        translateName : "SOUPS",
        name : "Soups",
        image_name : "../../assets/images/menu_items/cook4.png",
        background : "#f3ba71"
      },
      {
        translateName : "BURGERS",
        name : "Burgers",
        image_name : "../../assets/images/menu_items/burger17.png",
        background : "#ff85a7"
      },
      {
        translateName : "CAKES",
        name : "Cakes",
        image_name : "../../assets/images/menu_items/dessert4.png",
        background : "#7beced",
      },
      {
        translateName : "HARD_LIQUORS",
        name : "Hard Liquors",
        image_name : "../../assets/images/menu_items/alcohol40.png",
        background : "#b2dc77"
      }
    ];

  });
