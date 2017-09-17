'use strict';
var app = angular.module('vrsApp', ['ngResource']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", { templateUrl: "views/home.html"});
    $routeProvider.when("/company-profile", { templateUrl: "views/companyprofile.html" });
    $routeProvider.when("/board-of-directors", { templateUrl: "views/board.html" });
    $routeProvider.when("/awards", { templateUrl: "views/awards.html" });
    $routeProvider.when("/finished-leather", { templateUrl: "views/finishedleather.html" });
    $routeProvider.when("/leather-products", { templateUrl: "views/leatherproducts.html" });
    $routeProvider.when("/events", { templateUrl: "views/events.html" });
    $routeProvider.when("/gallery", { templateUrl: "views/photogallery.html" });
    $routeProvider.when("/contact", { templateUrl: "views/contact.html", controller:"ContactUsCtrl" });
    $routeProvider.when("/flatly", { templateUrl: "/index-flatly.html" });
    $routeProvider.when("/slate", { templateUrl: "/index-slate.html" });
    $routeProvider.otherwise({ redirectTo: "notfound" });
});

