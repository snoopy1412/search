require.config({
  paths: {
    // vendor区域
    jquery: './vendor/jquery-1.12.1.min', //经典

    // plugin区域
    layer : '../plugin/layer/layer',

    // 自编写 components 区域

  },
  shim: {

  }
});

require(['jquery','header','login'],function(){

})