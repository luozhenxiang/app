angular.module('app')
	.controller('balanceController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		$scope.gohistory = $rootScope.gohistory;
	}])