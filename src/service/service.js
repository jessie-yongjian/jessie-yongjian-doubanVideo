(function(angular){
    //自定义1个模块,再这个模块中我再自定义1个服务.
    var app = angular.module("hmService",[]);

    app.service("hmJsonp",["$window",function($window){

        this.jsonp = function(opts){
            //1.先拼接url
            var url = opts.url + "?";
            for(var key in opts.params){
                url += (key+"="+opts.params[key]+"&");
            }
            //2.生成1个随机的名字来保存回调函数.
            //  angularJS中有一个服务 $window 和全局的window一样.
            //                               0-1   0.12121212
            var callbakcName = "hmjsonp_"+ $window.Math.random().toString().slice(2);
            $window[callbakcName] = opts.callback;
            url += "callback="+callbakcName;
            //http://xuanwen.wang/index.aspx?city=深圳&date=2017-12-12&callback=hmjsonp_121213245

            //3. 生成script标签.
            var script = $window.document.createElement("script");
            script.src = url;
            $window.document.body.appendChild(script);
        }

        

    }]);

})(angular);