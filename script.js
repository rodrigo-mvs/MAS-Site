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




