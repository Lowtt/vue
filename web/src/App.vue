<template>
    <div class="public">
        <div id="header">
            <div class="layui-fluid public_header">
                <div class="layui-row">
                    <div class="layui-col-xs8 welecome" style="text-align:center">欢迎登录绵阳市融资担保小额贷款行业协会网站</div>
                    <div class="layui-col-xs4 loginRegiste" style="text-align:center">
                        <i class="iconfont icon-denglu"></i>
                        <a href="#"><span>登录|</span></a>
                        <a href="#"><span>注册</span></a>
                    </div>
                </div>
            </div>
            <div class="layui-fluid public_top">
                <div class="layui-row">
                    <div class="layui-col-xs4 layui-col-xs-offset2 LogoImg">
                        <img src="./common/img/logo.jpg" alt="logo图">
                    </div>
                    <div class="layui-col-xs3 connection">
                        <div class="layui-row contact">
                            <div class="layui-col-xs12 tel">
                            <span>联系电话:12345678&nbsp;&nbsp;|
                                    邮箱:100000@qq.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="layui-col-xs2 search">
                        <p class="font">服务&nbsp;协调&nbsp;维权&nbsp;自律</p>
                        <div id="searchtxt" style="width:134px; height:33px; float:left">
                            <form action="#" method="get" name="searchForm" onsubmit="">
                                <label>
                                    <input type="text" placeholder="搜索" class="txt"/>
                                </label>
                            </form>
                        </div>
                        <div id="btn">
                            <a href="#">
                                <img src="./common/img/soso.jpg" width="50%" height="50%" alt="搜索">
                            </a>
                        </div>
                        <!-- <input results="ss" type="search" placeholder="搜索"> -->
                        <i class="iconfont icon-sousuo"></i>
                    </div>
                </div>
            </div>
            <div class="layui-fluid">
                <div class="layui-row">
                    <div class="layui-col-xs6 layui-col-xs-offset4 public_topnav">
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item"><a href="#">首页</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="">移动模块</a></dd>
                                    <dd><a href="">后台模版</a></dd>
                                    <dd><a href="">电商平台</a></dd>
                                </dl>
                            </li>
                            <li class="layui-nav-item"><a href="#">关于我们</a></li>
                            <li class="layui-nav-item"><a href="#">行业动态</a></li>
                            <li class="layui-nav-item"><a href="#">政策法规</a></li>
                            <li class="layui-nav-item"><a href="#">会员福利</a></li>
                            <li class="layui-nav-item"><a href="#">会员风采</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-fluid foot">
            <div class="layui-row footer">
                <div class="layui-col-xs3 layui-col-xs-offset4 writing">
                    <div class="layui-row fooLogo">
                        <div class="layui-col-xs12 foo">
                            <p>绵阳市融资担保小额贷款行业协会<br>
                                <span>Mianyang small loans secured financing industry associations</span> 
                            </p>
                        </div>
                    </div>
                    <div class="layui-row address">
                        <div class="layui-col-xs12 add"></div>
                            <p class="add">
                                <i class="icon iconfont icon-house"></i>绵阳市绵兴东路111号繁华广场 军民融合科技支行3楼<br>
                                <i class="icon iconfont icon-dianhua"></i>联系电话:(0816) 2244127&nbsp;&nbsp;&nbsp;
                                <i class="icon iconfont icon-chuanzhen"></i>传真:(0816) 2244127
                            </p>
                    </div>
                </div>
             
                <div class="layui-col-xs3 layui-col-xs-offset1">
                    <img src="./common/img/qrcode.jpg" alt="">
                </div>
            </div>
            <div class="layui-row end">
                <div class="layui-col-xs12">
                    <p>&copy;2009.All rights reserved.蜀ICP备00000000号&nbsp;&nbsp;&nbsp;
                        绵阳市融资担保小额贷款行业协会</p>
                </div>
            </div>
        </div>   
        <router-view></router-view>
    </div>
</template>
<script lang='ts'>
import { Component,Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
declare let layui:any;
// import { RouterPath } from "./router";
// import { G_PERMISSION_MENUS } from "common/store/base/Menu"; 
@Component({})
export default class Admin extends Vue {
    created(){
        layui.use('element', function(){
        var element = layui.element;
        })
    };

}
</script>

<style lang="less" scoped>
.public_header{
    padding: 0;
    width: 100%;
    height: 25px;
    line-height: 25px;
    background: #ccc;
}
.public_top{
    height: 100px;
    padding: 0;
}
// .LogoImg img{
//     margin-right: 0;
//      width:50%;
//      height:10%;
// }
// @media screen and (max-width: 767px){
//     .header{
//         font-size: 50%;
//     }
// }
// @media screen and (min-width:768px) and (max-width:991px){
//     .header{
//         font-size: 90%;
//     }
// }
@media screen and (min-width: 300px) {
   .LogoImg img{
       margin-left:15%;
       width: 80%;
       height: 90px;
   }
   .connection{
       font-size: 90%;
       height: 90px;
    //    line-height: 100px;
   }
    .connection .contact{
        color: red;
        margin: 50px 0 0 50px;
    }
   .search{
       margin-left: 60px;
   }
   .search p{
       color: blue;
       margin-top: 10px;
       font-size: 16px;
   }
   .search  form{
        width:150px;
        height:33px;
    }
    .search .txt{
        width:150px;
        height:20px;
        background: #ccc;
        // margin-top:6px;
    }
    #btn{
        width:38px;
        height:32px;
        float:left;
    }
    .public_topnav ul{
        padding: 0;
        background:#ccc;
    }
    .public_topnav ul li{
        width: 16.66%;
        text-align: center;
    }
    .public_topnav ul li:hover{
        background: blue;
    }
    .public_topnav ul li a:hover{
        font-size: 17px;
        // color: blue;
    }
    .foot{
        width: 100%;
        height: 215px;
        position: absolute;
        bottom: 0;
        background: rgb(122, 122, 224);
        padding: 0;
    }
    .foo{
        margin: 20px 0 20px 0;
        border-bottom: 3px solid white;
    }
    .foo p{
        font-size: 20px;
    }
    .foo p span{
        font-size: 11px;
    }
    .end{
        width: 100%;
        position: absolute;
        bottom: 0;
        background: rgb(111, 72, 156);
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    

}
// @media screen and (min-width: 1200px){
    
// }
</style>