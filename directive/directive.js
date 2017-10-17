angular.module('app')
	.directive('homeDirective',['$rootScope','$location','myFactory','$state',function($rootScope,$location,myFactory,$state){
		return{
			restrict:'ECMA',
			templateUrl:'./view/menu.html',
			link:function($scope,$element,$attrs){
				var arr =window.location.href.split('/');
				var arrUrl1 = arr.pop();
				var arrUrl2 = arr.pop();
				arrUrl = arrUrl2 + '.' + arrUrl1;

				$scope.urlA = myFactory.urlA;
				$scope.imgUrl = myFactory.imgUrl;
				// $scope.font = myFactory.font;
				var q = $scope.urlA(arrUrl);

				$scope.imgUrl = q.imgUrl;
				// $scope.font = q.font;
				$scope.goState = function(url){

					var q = $scope.urlA(url);

					$scope.imgUrl = q.imgUrl;
					// $scope.font = q.font;	

					$state.go(url);
				
				}

			},

		};


	}]);