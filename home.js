$(document).ready(function(){

$(".leftBtn").click(function(){
  $("img").animate({
    top :'-550px',
    width:"500px",
    border:"10px" ,
    height:'500px',
  },20000,function(){
    $(".leftBtn").animate({top:"500px"},"fast");
  });
});

});
