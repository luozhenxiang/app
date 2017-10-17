angular.module('app')
	.controller('bankController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;

	}])