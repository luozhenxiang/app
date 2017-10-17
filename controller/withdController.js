angular.module('app')
	.controller('withdController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;

	}])