'use strict'
var data = {
    cars: [
        {
            clickCount : 0,
            name : "BMW M5",
            imgSrc : 'img/car3.png',

        },
        {
            clickCount : 0,
            name : 'Nissan 370z',
            imgSrc : 'img/car2.jpg',

        },
        {
            clickCount : 0,
            name : 'Porsche 911 GT3',
            imgSrc : 'img/car8.jpg',

        },
        {
            clickCount : 0,
            name : 'Lamborghini Gallardo',
            imgSrc : 'img/car4.jpg',

        },
        {
            clickCount : 0,
            name : 'Maserati Granturismo',
            imgSrc : 'img/car5.png',

        },
        {
            clickCount : 0,
            name : 'Nissan GTR',
            imgSrc : 'img/car8.png',

        }
    ]
};

var LegoclickerControllers = angular.module('CarClicker', []);

    LegoclickerControllers.controller('CarClickerCtrl', function($scope) {
     $scope.cars = data.cars;
    $scope.currentCar = $scope.cars[0];

    $scope.listClicked = function(a) {
        $scope.currentCar = a;
    };
      $scope.imgClicked = function(b) {
        b.clickCount++;
    };
});
