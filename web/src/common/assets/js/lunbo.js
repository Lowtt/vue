var num=0;
var timer=null;
var timeout=null;
// 设置鼠标悬浮在按钮切换事件
$(".groom>ul li a").mouseenter(function(event){
    //设置定时器前应先判断有没有定时器，有就清除
    if(timeout){
        clearTimeout(timeout);
        timeout=null;
    }
    num=$(this).parent().index();
    //设置悬浮时500毫秒时切换，不足500毫秒时不会切换
    timeout=setTimeout(changgeMg,500);
    return false;
})
//悬浮在窗口时停止轮播
$(".pic").mouseenter(function(){
    //清除定时器
    clearInterval(timer);
})
//鼠标移除窗口时开始轮播
$(".pic").mouseleave(function(){
    timer=setInterval(changeTab,2000);
})
//轮播定时器
timer=setInterval(changeTab,2000);
//移动盒子和给当前索引上色
function changgeMg(){
    var movePx=num*-300+"px";
    $(".inner").animate({"marginLeft":movePx},500);
    $(".groom>ul li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
}
//定时器函数    
function changeTab(){            
    if (num<4){                
        num++;
    }else{
        num=0;
    }
        changgeMg();
}