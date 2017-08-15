(function (angular) {
    // "use strict";

    // start your ride
    var app = angular.module("movieApp",[
        "movieApp_home",
        "movieApp_theaters",
        "movieApp_details",
        "movieApp_coming_soon",
         "movieApp_top250"
    ]);

    app.controller("demoC",["$scope",function($scope){
        
    }])

})(angular);