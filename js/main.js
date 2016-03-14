require.config({
  paths: {
    // vendor区域
    jquery: './vendor/jquery-1.12.1.min', 
    validate : './vendor/jquery.validate.min',

    // plugin区域
    layer : '../plugin/layer/layer',

    // 自编写 components 区域
    tab : './components/tab',
    suggest : './components/suggest',

  },
  shim: {
  	validate : {
  		deps :['jquery']
  	},
    suggest : {
      deps : ['jquery']
    }
  }
});

require(['common','header','login','index','setting','register','retrieve'],function(){
  
})