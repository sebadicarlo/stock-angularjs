'use strict';
var app=angular.module('stockApp', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.html"
  })
  .when("/add", {
    templateUrl : "add.html"
  });
});
