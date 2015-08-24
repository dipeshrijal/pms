/**
 *  Resourse for flat creates read update delte request for flat.
 */
angular.module('resources.task', ['ngResource', 'ngRoute'])

    .factory('Task', function($resource) {
        return $resource('/task/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                transformResponse: function(data, headerFn) {
                    // Return modified data for the response
                    return JSON.parse(data);
                }
            },
            // query: {
            //     method: 'GET',
            //     isArray: false,
            // }
        });

    });
