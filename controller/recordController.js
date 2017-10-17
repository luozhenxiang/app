angular.module('app')
	.controller('recordController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		$scope.gohistory = $rootScope.gohistory;
	}])