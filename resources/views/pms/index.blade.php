<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PMS</title>

	<style>

	[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
	  display: none !important;
	}

	</style>

  <script type="text/javascript" src="/vendor/angular/angular.js"></script>
  <script type="text/javascript" src="/vendor/angular/angular-route.js"></script>
  <script type="text/javascript" src="/vendor/angular/angular-resource.js"></script>


  <script type="text/javascript" src="/app/pms/app.js"></script>
  <script type="text/javascript" src="/app/pms/task/task.js"></script>
  <script type="text/javascript" src="/app/common/resources/task.js"></script>

</head>

<body>

	<h2>This is Project Management soft.</h2>

	<a href="#/project-create">Create</a>

	<a href="#/">List</a>

	<div ng-app="app" ng-controller="appCtrl">

		<div ng-view>

		</div>

	</div>



</body>
</html>