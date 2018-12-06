<template>
    <div class="home">
        <div class="layui-fluid">
            <div class="layui-row">
                <div class="layui-col-xs12 top_img">
                    <div class="all">
		                <div class="top-img">
			                <div class="activeimg">
                                <img src="../common/img/HomeImg/Home01.jpg">
                                <img src="../common/img/HomeImg/Home02.jpg">
                                <img src="../common/img/HomeImg/Home03.jpg">
                                <img src="../common/img/HomeImg/Home04.jpg">
                            </div>
                            <div class="left"><img src="../common/img/HomeImg/left.png"> </div>
                            <div class="right"><img src="../common/img/HomeImg/right.png"></div>
		                </div>
	                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@media screen and(min-width:300px){
    div{
        padding: 0;
    }
    // .all{
    //     width: 100%;
    //     height: auto;
    //     margin: 60px auto;
    //     overflow: hidden;
    // }
    .top-img{
        width: 100%;height: auto;font-size: 0;position: relative;
    }
    .activeimg{
        overflow: hidden;height: 200px;position: relative;
    }
    .top-img .activeimg img{
        width: 100%;height: 200px;
    }
    .top-img .left{
        width: 40px;height: 100px;position: absolute;left: 0;top: 50px;text-align: center;line-height: 300px;
        cursor: pointer;
    }
    .top-img .right{
        width: 40px;height: 100px;position: absolute;right:0;top: 50px;text-align: center;line-height: 300px;
        cursor: pointer;
    }
    .top-img .left:hover,.top-img .right:hover{
        background: rgba(0,0,0,0.5);
    }

    .bot-img{
        height: 90px;width: 500px;margin-top: 15px
    }
    .bot-img ul{
        width: 100%;height: 100px;
    }
    .bot-img ul li{
        width: 90px;margin-right: 10px;float: left;border: 1px solid #fff;cursor: pointer;font-size: 0;
    }
    .bot-img ul li.active{
        border: 1px solid #ff6600;
    }
    .bot-img ul li img{
        width: 100%;
    }
    .bot-img ul li:last-child{
        margin-right: 0;
    }
}
</style>
