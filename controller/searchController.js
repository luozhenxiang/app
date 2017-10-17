angular.module('app')
	.controller('searchController',['$scope',function($scope){
		$scope.State = $rootScope.State;
		$scope.gohistory = $rootScope.gohistory;
	}])