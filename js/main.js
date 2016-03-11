require.config({
  paths: {
    // vendor区域
    jquery: './vendor/jquery-1.12.1.min', 
    validate : './vendor/jquery.validate.min',

    // plugin区域
    layer : '../plugin/layer/layer',

    // 自编写 components 区域

  },
  shim: {
  	validate : {
  		deps :['jquery']
  	}
  }
});

require(['jquery','header','login','setting','help','register','retrieve'],function(){

})