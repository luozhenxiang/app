(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{ //引导页
		 			name: 'lead',
		 			files: [
		 				'./controller/leadController.js',
		 				'./assets/css/lead.css'
		 				
		 			]
		 		},

		 		{	//登陆
		 			name: 'login',
		 			files: [
		 				'./controller/loginController.js',
		 				'./assets/css/login.css' 				
		 			]
		 		},
		 		{	//个人中心
		 			name: 'user',
		 			files: [
		 				'./controller/userController.js',
						'./assets/css/user.css' 		
		 			]
		 		},
		 		{	//修改个人信息
		 			name: 'data',
		 			files:[
		 				'./controller/dataController.js',
		 				'./assets/css/data.css' 
		 			]

		 		},
		 		{	//注册
		 			name: 'register',
		 			files:[
		 				'./controller/registerController.js'
		 			]

		 		},
		 		{	//购物车
		 			name:'Shopping',
		 			files:[
		 				'./controller/ShoppingController.js',
		 				'./assets/css/Shopping.css'
		 			]
		 		},
				{	//待收货
		 			name:'Greceipt',
		 			files:[
		 				'./controller/GreceiptController.js',
		 				'./assets/css/Greceipt.css'
		 			]
		 		},
		 		{	//待收货
		 			name:'payment',
		 			files:[
		 				'./controller/paymentController.js',
		 				'./assets/css/payment.css'
		 			]
		 		},
		 		{	//待评价
		 			name:'evaluate',
		 			files:[
		 				'./controller/evaluateController.js',
		 				'./assets/css/evaluate.css'
		 			]
		 		},
		 		{	//我的订单
		 			name:'yishouh',
		 			files:[
		 				'./controller/yishouhController.js',
		 				'./assets/css/yishouh.css'
		 			]
		 		},
		 		{	//我的收藏
		 			name:'Collection',
		 			files:[
		 				'./controller/CollectionController.js',
		 				'./assets/css/Collection.css'
		 			]
		 		},
		 		{	//购买记录
		 			name:'record',
		 			files:[
		 				'./controller/recordController.js',
		 				'./assets/css/record.css'
		 			]
		 		},
		 		{	//我的评论
		 			name:'comments',
		 			files:[
		 				'./controller/commentsController.js',
		 				'./assets/css/comments.css'
		 			]
		 		},
		 		{	//我的收货地址
		 			name:'address',
		 			files:[
		 				'./controller/addressController.js',
		 				'./assets/css/address.css'
		 			]
		 		},
		 		{	//我的余额
		 			name:'balance',
		 			files:[
		 				'./controller/balanceController.js',
		 				'./assets/css/balance.css'

		 			]
		 		},
		 		{	//我的银行卡
		 			name:'bank',
		 			files:[
		 				'./controller/bankController.js',
		 				'./assets/css/bank.css'
		 			]
		 		},
		 		{	//充值
		 			name:'Recharge',
		 			files:[
		 				'./controller/RechargeController.js',
		 				'./assets/css/recharge.css'
		 			]
		 		},
		 		{	//提现
		 			name:'withd',
		 			files:[
		 				'./controller/withdController.js',
		 				'./assets/css/withd.css'
		 			]
		 		},
		 		{	//菜单栏
		 			name:'menu4',
		 			files:[
		 				'./controller/UmenuController.js',
		 				'./assets/css/menu.css'


		 				
		 			]
		 		},
		 		// {	//购物车菜单栏
		 		// 	name:'menu3',
		 		// 	files:[
		 		// 		'./controller/SmenuController.js',
		 		// 		// './service/urlserive.js'
		 		// 	]
		 		// },
		 		//主页
		 		{
		 			name:'home',
		 			files:[
		 			'./controller/homeController.js',
		 			'./directive/head.js',
		 			'./assets/css/home.css'
		 			]
		 		},
		 		//主页菜单栏
		 		// {
		 		// 	name:'menu1',
		 		// 	files:[
		 		// 	'./controller/HmenuController.js',
		 		// 	// './service/urlserive.js'
		 		// 	]
		 		// },
		 		//商品分类
		 		{
		 			name:'classify',
		 			files:[
		 			'./controller/classifyController.js',
		 			'./directive/head.js',
		 			'./assets/css/classify.css'		 			
		 			]
		 		},
		 		//商品分类菜单栏
		 		// {
		 		// 	name:'menu2',
		 		// 	files:[
		 		// 	'./controller/CmenuController.js',
		 		// 	// './service/urlserive.js'
		 		// 	]
		 		// },
		 		{	//商品详情
		 			name:'details',
		 			files:[
		 			'./controller/detailsController.js',
		 			'./directive/shdirective.js',
		 			'./assets/css/details.css'
		 			]
		 		},
		 		{	//商品详情
		 			name:'shmenu',
		 			files:[
		 			'./controller/detailsController.js',
		 			// './directive/shdirective.js',
		 			'./assets/css/shmenu.css'
		 			]
		 		},


		 		{	//确认订单
		 			name:'Order',
		 			files:[
		 			'./controller/OrderController.js',
		 			'./assets/css/Order.css'
		 			]
		 		},
		 		{	//茶具系列
		 			name:'series',
		 			files:[
		 			'./controller/seriesController.js',
		 			'./assets/css/series.css'
		 			]
		 		},
		 		{	//搜索
		 			name:'search',
		 			files:[
		 			'./controller/searchController.js',
		 			'./assets/css/search.css'
		 			]
		 		}
	 		]
 		});
	}]);
	
})();