angular.module('app')
	.controller('HmenuController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		// $scope.HmenuUrl='./image/homepage1.png';
		// $scope.CmenuUrl='./image/list.png';
		// $scope.SmenuUrl='./image/shopping.png';
		// $scope.UmenuUrl='./image/my2.png';
	}])