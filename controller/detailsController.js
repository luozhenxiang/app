angular.module('app')
	.controller('addressController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		$scope.gohistory = $rootScope.gohistory;
	}])