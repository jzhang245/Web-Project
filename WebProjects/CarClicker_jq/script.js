
var model = {
	currentCar: null,
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


var control = {

    init: function() {
        model.currentCar = model.cars[0];
        carListView.init();
        carImageView.init();
    },

    getCarAll: function() {
        return model.cars;
    },

    setCurrentCar: function(car) {
        model.currentCar = car;
    },

    getCurrentCar: function() {
        return model.currentCar;
    },

    increaseClick: function() {
        model.currentCar.clickCount++;
        carImageView.render();
    }
};


var carListView = {

    init: function() {
        this.render();
    },

    render: function() {
        var addHTML = ''
        var cars = control.getCarAll();

        for (var i=0; i<cars.length; i++) {
            elem = document.createElement('li');
            elem.textContent = cars[i].name;

            var clickfunction = function(car) {
                return function() {
                    control.setCurrentCar(car);
                    carImageView.render();
                };
            }

            elem.addEventListener('click', clickfunction(cars[i]));


           $('#car-list').append(elem);
        }
    }
};

var carImageView = {

    init: function() {
        $('#car-img').bind('click', function() {
            control.increaseClick();
        });

        this.render();
    },

    render: function() {
        var currentCar = control.getCurrentCar();
        $('#car-count').html(currentCar.clickCount);
        $('#car-name').html(currentCar.name);
        $('#car-img').attr("src",currentCar.imgSrc);
    }

};

control.init();
