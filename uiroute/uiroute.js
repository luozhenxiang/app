angular.module('app')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/lead1');

		$stateProvider
			//引导页1
			.state('lead1',{
				url:'/lead1',
				templateUrl:'./view/lead1.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('lead');
					}]
				}
			})
			//引导页2
			.state('lead2',{
				url:'/lead2',
				templateUrl:'./view/lead2.html',	
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('lead');
					}]

				}
			})
			//引导页3
			.state('lead3',{
				url:'/lead3',
				templateUrl:'./view/lead3.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('lead');
					}]

				}
			})
			//引导页4
			.state('lead4',{
				url:'/lead4',
				templateUrl:'./view/lead4.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('lead');
					}]

				}
			})
			//注册页
			.state('register',{
				url:'/register',
				templateUrl:'./view/register.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('register');
					}]
				}
			})
			//登录页
			.state('login',{
				url:'/login',
				templateUrl:'./view/login.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('login');
					}]
				}
			})
			
			//菜单栏
			.state('menu',{
				url:'',
				abstract:true,
				templateUrl:'./view/homemenu.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('menu4');
					}]
				}
			})

			//个人中心
			.state('menu.user',{
				url:'/menu/user',
				templateUrl:'./view/user.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('user');
					}]
				}
			})

				//购物车
			.state('menu.Shopping',{
				url:'/menu/Shopping',
				templateUrl:'./view/Shopping.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('Shopping');
					}]
				}
			})

			//主页
			.state('menu.home',{
				url:'/menu/home',
				templateUrl:'./view/home.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('home');
					}]
				}
			})

			//商品分类
			.state('menu.classify',{
				url:'/menu/classify',
				templateUrl:'./view/classify.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('classify');
					}]
				}
			})

			//修改个人信息
			.state('data',{
				url:'/data',
				templateUrl:'./view/data.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('data');
					}]
				}
				
			})
			//待收货
			.state('payment',{
				url:'/payment',
				templateUrl:'./view/payment.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('payment');
					}]
				}
			})
		
			//购物车菜单栏
			// .state('Shopping.menu',{
			// 	url:'/Shopping/menu',
			// 	controller:'SmenuController',
			// 	templateUrl:'./view/menu.html',
			// 	resolve:{
			// 		des:['$ocLazyLoad',function($ocLazyLoad){
			// 			return $ocLazyLoad.load('menu3');
			// 		}]
			// 	}
			// })
			//待收货
			.state('Greceipt',{
				url:'/Greceipt',
				templateUrl:'./view/Greceipt.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('Greceipt');
					}]
				}
			})
			//待评价
			.state('evaluate',{
				url:'/evaluate',
				templateUrl:'./view/evaluate.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('evaluate');
					}]
				}
			})
			//我的订单
			.state('yishouh',{
				url:'/yishouh',
				templateUrl:'./view/yishouh.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('yishouh');
					}]
				}
			})
			//我的收藏
			.state('Collection',{
				url:'/Collection',
				templateUrl:'./view/Collection.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('Collection');
					}]
				}
			})
			//购买记录
			.state('record',{
				url:'/record',
				templateUrl:'./view/record.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('record');
					}]
				}
			})
			//我的评论
			.state('comments',{
				url:'/comments',
				templateUrl:'./view/comments.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('comments');
					}]
				}
			})
			//我的收货地址
			.state('address',{
				url:'/address',
				templateUrl:'./view/address.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('address');
					}]
				}
			})
			//我的余额
			.state('balance',{
				url:'/balance',
				templateUrl:'./view/balance.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('balance');
					}]
				}
			})
			//我的银行卡
			.state('bank',{
				url:'/bank',
				templateUrl:'./view/bank.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('bank');
					}]
				}
			})
			//充值
			.state('Recharge',{
				url:'/Recharge',
				templateUrl:'./view/Recharge.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('Recharge');
					}]
				}
			})
			//提现
			.state('withd',{
				url:'/withd',
				templateUrl:'./view/withd.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('withd');
					}]
				}
			})
			
			// //主页菜单栏
			// .state('home.menu',{
			// 	url:'/home/menu',
			// 	templateUrl:'./view/menu.html',
			// 	controller:'HmenuController',
			// 	resolve:{
			// 		des:['$ocLazyLoad',function($ocLazyLoad){
			// 			return $ocLazyLoad.load('menu1');
			// 		}]
			// 	}
			// })
			
			//商品分类菜单栏
			// .state('menu.classify',{
			// 	url:'menu/classify',
			// 	controller:'CmenuController',
			// 	templateUrl:'./view/menu.html',
			// 	resolve:{
			// 		des:['$ocLazyLoad',function($ocLazyLoad){
			// 			return $ocLazyLoad.load('menu2');
			// 		}]
			// 	}
			// })
			
			//详情页
			.state('shmenu.details',{
				url:'/shmenu/details',
				// controller:'CmenuController',
				templateUrl:'./view/details.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('details');
					}]
				}
			})

			//详情页
			.state('shmenu',{
				url:'',
				abstract:true,
				templateUrl:'./view/detailsmenu.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('shmenu');
					}]
				}
			})


			//确认订单
			.state('Order',{
				url:'/Order',
				// controller:'CmenuController',
				templateUrl:'./view/Order.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('Order');
					}]
				}
			})
			//茶具系列
			.state('series',{
				url:'/series',
				templateUrl:'./view/series.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('series');
					}]
				}
			})
			//搜索
			.state('search',{
				url:'/search',
				templateUrl:'./view/search.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('search');
					}]
				}

			})

	}])