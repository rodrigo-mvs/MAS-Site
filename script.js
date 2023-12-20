$(document).ready(function(){
    $(".dropbtn").click(function(){
      $(this).next(".dropdown-content").slideToggle("fast");
    });
  });

  var vm = function () {
    console.log('ViewModel initiated...');
    var self = this;
    self.products = ko.observableArray([]);

    // Add an 'id' property to each product
    var idCounter = 1;
    self.productsData = [
        // ... (existing product data remains the same)
    ];

    // Loop through the existing products and assign an id to each
    self.productsData.forEach(function (product) {
        product.id = idCounter;
        idCounter++;
    });

    // Set products array to observable
    self.products(self.productsData);
};

$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});



let price = parseFloat(0)
let numitems = parseInt(0)

$('.cart').on('click', function(){ //quando clicam em qqlr botão c a class .cart isto tudo acontece
    price = parseFloat(price) + parseFloat(10.79) //o 10,79 é o preco dos meus artigos todos ent fica mais facil, senao era preciso ires uscar o id de cada um dos artigos(onde tens o preço) e somares isso á variavel
    numitems = parseFloat(numitems) + parseFloat(1)
    $('#numItem').text(parseFloat(numitems)) // o #numitem é o id do sitio onde tou a meter o numero de artigos
    $('#price').text(parseFloat(price)) // o #price é o id do sitio onde tou a meter o preço total
    console.log("clicouuuuu")
})


