<?php

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

resource('pms', 'PmsController');
resource('task', 'TasksController');
get('/listProject', 'PmsController@listProject');
