angular.module('app')
	.factory('myFactory',function(){
		return{
			urlA:function(arrUrl){
				switch(arrUrl){
					case "menu.home":
						return {
							imgUrl:['./image/homepage1.png','./image/list.png','./image/shopping.png','./image/my2.png']
							// font['active','','','']
						}
			
					case "menu.classify":
						return {
							imgUrl:['./image/homepage.png','./image/list1.png','./image/shopping.png','./image/my2.png']
							// font['','active','','']
						}
					
					case "menu.Shopping":
						return {
							imgUrl:['./image/homepage.png','./image/list.png','./image/shopping1.png','./image/my2.png']
							// font['','','active','']
						}
				
					default :
						return {
							imgUrl:['./image/homepage.png','./image/list.png','./image/shopping.png','./image/my1.png']
							// font['','','','active']
						}
				

				}
			}
		}
	})




