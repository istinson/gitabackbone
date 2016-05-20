<<<<<<< 028987435129839dd3a4df380daf5714f94d6753
var app = angular.module('kirk');
=======

var express = require('express');
var app = express();

var app = angular.module('');

>>>>>>> erver.js

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: '/Search/searchTemplate.html',
      controller: 'searchCtrl',
      controllerAs: 'search'
    })

});