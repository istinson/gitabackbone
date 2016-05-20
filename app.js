var app = angular.module('kirk');

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: '/Search/searchTemplate.html',
      controller: 'searchCtrl',
      controllerAs: 'search'
    })
<<<<<<< 21827d559bd9ae4d865319250d6300875be6c31a

=======
  
>>>>>>> added index and set up router
});