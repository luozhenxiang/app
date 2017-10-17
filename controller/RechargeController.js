angular.module('app')
	.controller('RechargeController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;

	}])