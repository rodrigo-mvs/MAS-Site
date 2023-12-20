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


        {
            name: 'Python Crash Course (2nd Edition)',
            type: 'E-Book',
            image: 'https://static.fnac-static.com/multimedia/Images/PT/NR/da/cb/50/5295066/1507-1.jpg',
            categorie: 'Programming',
            price: 43,
            description: 'Python Crash Course, 2nd Edition is a straightforward introduction to the core of Python programming. Author Eric Matthes dispenses with the sort of tedious, unnecessary information that can get in the way of learning how to program, choosing instead to provide a foundation in general programming concepts, Python fundamentals, and problem solving. Three real world projects in the second part of the book allow readers to apply their knowledge in useful ways. ',
            author: 'Eric Matthes',
            id:5
        },
        {
            name: 'Cloud Native DevOps with Kubernetes',
            type: 'E-Book',
            image: 'https://static.fnac-static.com/multimedia/Images/PT/NR/57/eb/79/7990103/1540-1.jpg',
            categorie: 'Programming',
            price: 78,
            description: 'Kubernetes is the operating system of the cloud native world, providing a reliable and scalable platform for running containerized workloads. In this friendly, pragmatic book, cloud experts John Arundel and Justin Domingus show you what Kubernetes can do―and what you can do with it.',
            author: 'Justin Domingus',
            id:6
        },
        {
            name: 'The Science of Cooking',
            type: 'E-Book',
            image: 'https://static.fnac-static.com/multimedia/Images/PT/NR/7d/5c/14/1334397/1540-1/tsp20180321132214/The-Science-of-Cooking.jpg',
            categorie: 'Cooking',
            price: 24,
            description: 'Which vegetables should you eat raw? How do you poach the perfect egg? And should you keep your eggs in the fridge? Food scientist Dr Stuart Farrimond answers all these questions - and many more like them - equipping you with the scientific know-how to take your cooking to new levels.',
            author: 'Stuart Farrimond',
            id:7
        },
        {
            name: 'Improve Your Communication Skills - (Creating Success)',
            type: 'E-Book',
            image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61i+pxO8E0L._AC_UF1000,1000_QL80_.jpg',
            categorie: 'Talks',
            price: 14,
            description: 'Improve Your Communication Skills is your practical guide to effective verbal, non-verbal and written communication in business. Full of proven tips and techniques, it will help you keep the interest of a large audience, impress a potential employer or simply win the argument at an important meeting.',
            author: 'Alan Barker',
            id:8
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
