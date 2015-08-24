/**
 *   Starting point for rentex client app.
 */
var app = angular.module('pms', ['ngRoute']);
/**
 *  Application level configuration.
 */
app.config(['$interpolateProvider', '$routeProvider',
    function($interpolateProvider, $routeProvider) {

        // Change the default expression layout style.
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');


        $routeProvider.
        when('/create', {
            templateUrl: 'app/pms/projectcreate.html',
            controller: 'ProjectCreateController'
        })
        .when('/list', {
            templateUrl: 'app/pms/projectlist.html',
            controller: 'ProjectCreateController'
        });


    }
]);


/**
 *  Application Level controller.
 */
app.controller('appCtrl', ['$scope',
    function($scope) {

    }
]);

app.controller('ProjectCreateController', ['$scope','$http',
    function($scope,$http) {

        $scope.createProject = function(project) {

            var url = '/pms'

            $http.post(url, {

                project: project,

            }).success(function(data, status, headers, config) {
                project.name = '';
                project.category = '';
            });
        };

        $scope.getProject = function (project) {

            var url = '/listProject'

            $http.get(url, {
                project : project,
            }).success(function (data, status, headers, config ) {
                $scope.name = data.name;
                $scope.status = data.status;
            });
        };
    }
]);
