var app=angular.module("AngularDemo", ["ngRoute"]);
app.config(function ($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "app/components/home/homeView.html",
            controller: "homeController"
        })
        .when("/table", {
            templateUrl: "app/components/table/tableView.html",
            controller: "tableController"
        })
});
