/**
 * Task module..
 */

var task = angular.module('task', ['resources.task']);


app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/task-list', {
            templateUrl: 'app/pms/task/task-list.html',
            controller: 'TasklistController'
        })
        .when('/task-create', {
            templateUrl: 'app/pms/task/task-create.html',
            controller: 'TaskCreateController'
        })
        .when('/task-edit/:id', {
            templateUrl: 'app/pms/task/task-edit.html',
            controller: 'TaskEditController'
        });

}]);


task.controller('TasklistController', ['$scope', 'Task', function($scope, Task) {

    Task.query({}, {}, function(response) {

        $scope.tasks = response;
    }, function(error) {

    });
}]);


task.controller('TaskCreateController', ['$scope', 'Task', function($scope, Task) {

    $scope.createTask = function(task) {

        Task.save({
            task
        }, function(response) {

        }, function(error) {

        });
    }
}]);


task.controller('TaskEditController', ['$scope', 'Task', '$routeParams', function($scope, Task, $routeParams) {

    var taskId = $routeParams.id;


    Task.get({id:taskId}, {

    }, function(response) {
        $scope.task=response;
    }, function(error) {

    });


    $scope.createTask = function(task) {

            Task.update({
                id: task.id,
                data: task
            }, function(response) {


            }, function(error) {
                if (422 == error.status) {
                    console.log('validation error occoured!!');
                }
            });
    }
}]);
