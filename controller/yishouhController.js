angular.module('app')
	.controller('yishouhController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		$scope.gohistory = $rootScope.gohistory;
	}])