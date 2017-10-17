angular.module('app')
	.controller('leadController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;

	}])