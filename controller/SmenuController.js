angular.module('app')
	.controller('SmenuController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		// $scope.HmenuUrl='./image/homepage.png';
		// $scope.CmenuUrl='./image/list.png';
		// $scope.SmenuUrl='./image/shopping1.png';
		// $scope.UmenuUrl='./image/my2.png';
	}])