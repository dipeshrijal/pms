var app = angular.module('app', ['ngRoute','task']);



app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/pms/projectlist.html',
            controller: 'HomeController'
        })
        .when('/project-create', {
            templateUrl: 'app/pms/projectcreate.html',
            controller: 'ProjectCreateController'
        })
        .when('/project-edit/:id', {
            templateUrl: 'app/pms/projectedit.html',
            controller: 'ProjectEditController'
        });

}]);




app.controller('appCtrl', ['$scope', function($a) {

    $a.post = {
        name: 'babin boss',
        intrest: ['programming', 'designing']
    };

}]);


app.controller('HomeController', ['$scope', '$http', function($scope, $http) {


    $scope.listProject = function() {

        var url = '/listProject'
        $http.get(url).
        success(function(data, headers, config) {
            $scope.projects = data;
        });
    };

    $scope.listProject();


}]);

app.controller('ProjectCreateController', ['$scope', '$http', function($scope, $http) {
    $scope.createProject = function(project) {
        $http.post('/pms', {
            data: project
        }).success(function(data, status, headers, config) {});
    };

}]);


app.controller('ProjectEditController', ['$scope', '$http', '$routeParams','$location',
    function($scope, $http, $routeParams,$location) {

        var id = $routeParams.id;
        var url = '/pms/' + id + '/edit';

        $http.get(url).
        success(function(data, headers, config) {
            $scope.project = data;
        });

        $scope.createProject = function(project) {

            $http.put('/pms/' + project.id, {
                data:project,
            }).success(function(data, status, headers, config) {
                $location.path('/');
            });
        };

    }
]);
