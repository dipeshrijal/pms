/**
 *   Starting point for rentex client app.
 */
angular.module('pms', ['ngRoute']);


/**
 *  Application level configuration.
 */
angular.module('pms').config(['$interpolateProvider', '$routeProvider',
    function($interpolateProvider, $routeProvider) {

        // Change the default expression layout style.
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');


        $routeProvider.
        when('/list', {
            templateUrl: 'app/pms/projectlist.html',
            controller: 'ProjectListController'
        });


    }
]);




/**
 *  Application Level controller.
 */
angular.module('pms').controller('appCtrl', ['$scope',
    function($scope) {

    }
]);

angular.module('pms').controller('ProjectListController', ['$scope','$http',
    function($scope,$http) {

        $scope.createProject = function(project) {

            var url = '/pms'

            $http.post(url, {

                project: project,

            }).success(function(data, status, headers, config) {
                debugger;
            });
        };
    }
]);
