angular.module('app')
	.controller('rootController',['$rootScope','$scope','$state',function($rootScope,$scope,$state){
		$rootScope.goState = function(url){
			$state.go(url);
		}

		$rootScope.gohistory = function(){
			history.go(-1);
		}
		// $scope.HmenuUrl='./image/homepage.png';
		// $scope.CmenuUrl='./image/list.png';
		// $scope.SmenuUrl='./image/shopping.png';
		// $scope.UmenuUrl='./image/my.png';
		// // $scope.jump = $rootScope.jump;
	}])