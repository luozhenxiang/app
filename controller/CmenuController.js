angular.module('app')
	.controller('CmenuController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		// $scope.CmenuUrl='./image/list1.png';
		// $scope.UmenuUrl='./image/my2.png';
		// $scope.HmenuUrl='./image/homepage.png';
		// $scope.SmenuUrl='./image/shopping.png';
	}])