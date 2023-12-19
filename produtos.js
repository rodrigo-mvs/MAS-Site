/*
var vm = function () {
    console.log('ViewModel initiated...');
    //---Variáveis locais
    var self = this;
    self.products = ko.observableArray([])


    self.products = [
        {
            name: 'Python Online Course',
            type: 'Online Course',
            image: 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg',
            categorie: 'Programming',
            price: 50,
            description: 'Learn Python programming through this comprehensive online course.',
            author: 'CodeTeach'
            
        },
        {
            name: 'JavaScript E-Book',
            type: 'E-Book',
            image: 'https://firmbee.com/wp-content/uploads/ebook-cover-javascript-from-beginner-to-advanced.png',
            categorie: 'Programming',
            price: 20,
            description: 'Dive into JavaScript with this comprehensive e-book, suitable for all levels.',
            author: 'Sarah Codington'
        },
        {
            name: 'Piano Tutoring',
            type: 'Tutoring',
            image: 'https://musicteacher.com/wp-content/uploads/2021/02/in-person-music-lessons.jpg',
            categorie: 'Music',
            price: 60,
            description: 'Receive personalized piano tutoring from experienced professionals.',
            author: 'Miss Tiles'
        },
        {
            name: 'Guittar Online Course',
            type: 'Course',
            image: 'https://s3.amazonaws.com/guitareo/gl-sales/og-image.jpg',
            categorie: 'Course',
            price: 50,
            description: 'Master the guitar with this comprehensive online course covering various styles and techniques.',
            author: 'John Doe'
        },
    
    
    ];
}; */




var vm = function () {
    console.log('ViewModel initiated...');
    var self = this;
    self.products = ko.observableArray([]);
    self.selectedProductId = ko.observable(null);

    self.productsData = ko.observableArray([
        {
            name: 'Python Online Course',
            type: 'Online Course',
            image: 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg',
            categorie: 'Programming',
            price: 50,
            description: 'Learn Python programming through this comprehensive online course.',
            author: 'CodeTeach',
            id:1
        },
        {
            name: 'JavaScript E-Book',
            type: 'E-Book',
            image: 'https://firmbee.com/wp-content/uploads/ebook-cover-javascript-from-beginner-to-advanced.png',
            categorie: 'Programming',
            price: 20,
            description: 'Dive into JavaScript with this comprehensive e-book, suitable for all levels.',
            author: 'Sarah Codington',
            id:2
        },
        {
            name: 'Piano Tutoring',
            type: 'Tutoring',
            image: 'https://musicteacher.com/wp-content/uploads/2021/02/in-person-music-lessons.jpg',
            categorie: 'Music',
            price: 60,
            description: 'Receive personalized piano tutoring from experienced professionals.',
            author: 'Miss Tiles',
            id:3
        },
        {
            name: 'Guittar Online Course',
            type: 'Course',
            image: 'https://s3.amazonaws.com/guitareo/gl-sales/og-image.jpg',
            categorie: 'Course',
            price: 50,
            description: 'Master the guitar with this comprehensive online course covering various styles and techniques.',
            author: 'John Doe',
            id:4
        },
    
    
    ]);

    self.initiate = function (productId) {
        console.log(productId)
        self.productsData(self.productsData().filter(function (element) {
            return element.id === productId;
        }))
    }

    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        console.log("sPageURL=", sPageURL);
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    self.initiate(parseInt(getUrlParameter('id')))
};

$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
