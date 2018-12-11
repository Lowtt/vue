<template>
    <div class="home">
        <div class="layui-fluid">
            <div class="layui-row">
                <div class="layui-col-xs12 top_img">
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
        <div class="layui-fluid">
            <div class="layui-row">
                <div class="layui-col-xs6 layui-col-xs-offset4 SocialNews">
                    <p><b>社会新动态：</b><a href="#"><small>热烈庆祝绵阳市融资担保小额贷款</small></a></p>
                </div>
            </div>
        </div>
        <div class="layui-fluid">
            <div class="layui-row">
                <div class="layui-col-md3 layui-col-xs8 layui-col-md-offset4 layui-col-xs-offset4 introduce">
                    <div class="layui-row top-nav">
                        <div class="layui-col-sm12 layui-col-md4 brief">协会简介</div>
                        <div class="layui-col-sm12 layui-col-md4 ad">最新公告</div>
                        <div class="layui-col-sm12 layui-col-md4 rule">政策法规</div>
                    </div>
                    <div class="layui-row container">
                        <div class="layui-col-md3 cont">这里是内容</div>
                    </div>
                    <div class="layui-row">
                        <a href="#">了解更多&gt;&gt;</a>
                    </div>
                </div>
                <!-- 为您推荐 -->
                <div class="layui-col-md3 layui-col-xs12 groom">
                    <div class="layui-row ForYou">
                        <div class="layui-md12">
                            <a href="#">为您推荐&gt;&gt;</a>
                        </div>
                    </div>
                    <div class="layui-row">
                        <div class="layui-col-xs12 pic">
                            <div class="inner">
                                <a href="#"><img src="../common/img/01.jpg" alt="" height="120px" width="300px"></a>
                                <a href="#"><img src="../common/img/02.jpg" alt="" height="120px" width="300px"></a>
                                <a href="#"><img src="../common/img/03.jpg" alt="" height="120px" width="300px"></a>
                                <a href="#"><img src="../common/img/04.jpg" alt="" height="120px" width="300px"></a>
                                <a href="#"><img src="../common/img/05.jpg" alt="" height="120px" width="300px"></a>
                            </div>
                            <ul>
                                <li><a href="#" class="active"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <div class="layui-row">
            <div class="layui-col-xs6 layui-col-xs-offset4 member">
                <a href="#"><img src="../common/img/h1.jpg" alt="" height="120px" width="32.5%"></a>
                <a href="#"><img src="../common/img/h2.jpg" alt="" height="120px" width="32.5%"></a>
                <a href="#"><img src="../common/img/h3.jpg" alt="" height="120px" width="32.5%"></a>
                <!-- <a href="#"><img src="../common/img/h1.jpg" alt="" height="120px" width="23%"></a> -->
                <div class="_left"><a href="#"><img src="../common/img/HomeImg/left.png" width="20px"></a></div>
                <div class="_right"><a href="#"><img src="../common/img/HomeImg/right.png" width="20px"></a></div>
            </div>
        </div>
    </div>
</template>
<script>
export default class Home extends Vue{
    
    }
</script>
<style lang="less" scoped>
@media screen and(min-width:300px){
    a{
        text-decoration: none;
    }
    div{
        padding: 0;
    }
    .top-img{
        width: 100%;
        height: auto;
        font-size: 0;
        position: relative;
    }
    .activeimg{
        overflow: hidden;
        height: 200px;
        position: relative;
    }
    .top-img .activeimg img{
        width: 100%;
        height: 200px;
    }
    .top-img .left,.top-img .right{
        width: 40px;
        height: 100px;
        position: absolute;
        top: 50px;
        text-align: center;
        line-height: 100px;
    }
    .top-img .left{
        left: 0;
    }
    .top-img .right{
        right:0;
    }
    .top-img .left:hover,.top-img .right:hover{
        background: rgba(0,0,0,0.5);
    }
    .bot-img{
        height: 90px;
        width: 500px;
        margin-top: 15px
    }
    .bot-img ul{
        width: 100%;
        height: 100px;
    }
    .SocialNews{
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-indent: 20px;
    }
    .introduce{
        margin-top: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .container{
        height: 100px;
        border-top:1px solid #ccc;
        border-bottom: 1px solid #ccc;
        width: 100%;
        text-indent: 32px;
    }
    .cont{
        width: 100%;
    }
    .brief,.ad,.rule{
        text-align: center;
    }
    .brief:hover,.ad:hover,.rule:hover{
        color: white;
        background: blue;
    }
    .groom{
        margin:15px 0 0 40px;
        border-radius:10%; 
    }
    .groom .ForYou{
        font-weight: bold;
        color: blue;
    }
    .groom ul{
        list-style: none;
        position: absolute;
        top: 100px;
        left: 100px;
    }
    .groom ul li{
        float: left;
    }
    .groom ul li a{
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ffbeaa;
        margin-left: 5px;
        opacity: 0.8;
    }
    .groom ul li a.active{
        background-color: red;
    }
    .inner{
        width: 1500px;
        height: 150px;
    }
    .inner img{
        display: block;
        float: left;
    }
    .pic{
        width: 300px;
        overflow: hidden;
    }
    .memeber{
        // margin-left: 50px;
    }
    .member>a img{
        // margin:0 20px 0 10px;
        // margin-left: 20px;
    }
    .member ._left,.member ._right{
        width: 20px;
        height: 120px;
        position: absolute;
        top: 0;
        text-align: center;
        line-height: 120px;
        background: rgba(0, 0, 0, .5)
    }
     .member ._left{
        left: 0;
    }
    .member ._right{
        right:0;
    }
}
</style>
