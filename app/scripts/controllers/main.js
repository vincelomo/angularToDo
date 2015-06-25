'use strict';

/**
 * @ngdoc function
 * @name angularToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularToDoApp
 */
angular.module('angularToDoApp')
	.controller('MainCtrl', ['$scope','$mdSidenav', function ($scope, $mdSidenav) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
	    ];
	}]);
