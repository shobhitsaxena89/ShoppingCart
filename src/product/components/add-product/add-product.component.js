angular.module('localAmazon.product')
.controller('addProductCtrl', ['productService', 
function(productService){
    this.newProduct = {};

    this.onFormSubmit= function(e,form){
        console.log(form);
        if(form.valid){
        e.preventDefault();
        console.log(this.newProduct);
        productService.addProduct(this.newProduct)
        .then(function(){
            alert('added successfully');
        });
    }
    else{
        alert('form invalid');
    }
    };
}])
    .component('addProduct', {
        templateUrl: 'src/product/components/add-product/add-product.component.html',
        controller: 'addProductCtrl'
    })