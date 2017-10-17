angular.module('app')
	.controller('loginController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;

	}])