(function(angular){

    var app = angular.module("movieApp_home",["ngRoute"]);
    // 去除开头的！
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);
    // 配置路由
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/home",{
            templateUrl:"./home/home.html",
            // controller:"homeController"
        }).when("/",{
            redirectTo:"/home"
        })
    }])
    // app.controoller("homeController",["$scope",function($scope){

    // }])

})(angular)