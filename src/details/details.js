(function(angular){
    var app = angular.module("movieApp_details",["ngRoute","hmService"]);
// "hmService","ngRoute"
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"./details/details.html",
            controller:"detailsController"
        })
    }]);

    app.controller("detailsController",["$scope","$routeParams","hmJsonp",function($scope,$routeParams,hmJsonp){
        $scope.isShow = true;
         var id = $routeParams.id;
        console.log(id);
        
        hmJsonp.jsonp({
             url:"http://api.douban.com/v2/movie/subject/"+id,
            parmams:{},
            callback:function(data){
                console.log(data);
                
                $scope.movieData = data;
                $scope.isShow = false;
                $scope.$apply();
            }
        })
    }])
})(angular)