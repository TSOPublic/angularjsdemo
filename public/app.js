var app=angular.module("AngularDemo", ["ngRoute"]);
app.config(function ($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "src/home/home.html",
            controller: "homeCtrl"
        })
        .when("/table", {
            templateUrl: "src/table/table.html",
            controller: "tableCtrl"
        })
});
