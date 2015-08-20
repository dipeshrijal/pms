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
        when('/list', {
            templateUrl: 'app/pms/projectlist.html',
            controller: 'ProjectListController'
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

app.controller('ProjectListController', ['$scope','$http',
    function($scope,$http) {

        $scope.createProject = function(project) {

            var url = '/pms'

            $http.post(url, {

                project: project,

            }).success(function(data, status, headers, config) {
                project.name = '';
            });
        };
    }
]);
