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

  <script type="text/javascript" src="/app/pms/app.js"></script>
</head>

<body>

<h2>This is Project Management soft.</h2>
	<div ng-app="pms" ng-controller="appCtrl">

		<div ng-view></div>

	</div>



</body>
</html>