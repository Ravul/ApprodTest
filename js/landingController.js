(function() {
    
var app = angular.module('app', [])
    .controller('LandingCtrl', function() {
        var docOptions = [
            {first:"PFA", second:"Înființare"},
            {first:"II", second:"Înființare"},
            {first:"SRL", second:"Înființare"},
            {first:"ANAF", second:"220"},
            {first:"ANAF", second:"600"},
            {first:"Alte", second:"Formulare"}
        ]; 
        this.docOptions = docOptions;
    })
;
    
}());