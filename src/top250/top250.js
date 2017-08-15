(function(angular){
    var app = angular.module("movieApp_top250",["ngRoute","hmService"]);
// ,"hmService"
        app.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/top250/:page?",{
                templateUrl:"./top250/top250.html",
                controller:"top250Controller"
            })
        }]);


        app.controller("top250Controller",[
            "$scope",
            "$routeParams",
            "$route",
            "$window",
            "hmJsonp",
            function($scope,$routeParams,$route,$window,hmJsonp){

                $scope.isShow = true;

                $scope.pageSize = 5 ;
                $scope.pageIndex = ($routeParams.page || "1") - 0;
                // 发送跨域访问获取数据
            hmJsonp.jsonp({
                url:"http://api.douban.com/v2/movie/top250",
                params:{
                    count:$scope.pageSize,
                    start:($scope.pageIndex-1)*$scope.pageSize
                },
                callback:function(data){
                    
                    console.log(data);
                    $scope.movies=data;
                    $scope.totalPage = $window.Math.ceil(data.total / $scope.pageSize);
                    $scope.isShow = false;

                    $scope.$apply();
                }
            });
            // 获取当前页
            $scope.getPage = function(pageIndex){
                if(pageIndex<1 || pageIndex > $scope.totalPage) return;
                $route.updateParams({
                    page:pageIndex
                });
            }
        }])
})(angular)