<template>
    <div >
        <div class="layui-fluid main">
            <div class="layui-row row">
                <div class="layui-col-xs12 Login">
                    <div class="layui-col-xs6 layui-col-xs-offset5 LoginBox">
                        <div class="layui-col-xs6 logi">
                            <a href="#">登录</a>
                        </div>
                        <div class="layui-col-xs6 regis">
                            <a href="#">注册</a>
                        </div>
                        <div class="layui-row">
                            <div class="layui-col-xs6 container">
                                <form action="">
                                    <input type="text" placeholder="请输入账号">
                                    <input type="text" placeholder="请输入密码">
                                    <input type="checkbox">记住用户名
                                    <button>登录</button>
                                     
                                </form> 
                            </div>
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
<style scoped>
@media screen and (min-width:962px){
    a{
        text-decoration: none;
    }
    .main{
        padding: 0;
        width: 100%;
        height: 575px;
        background: url("../common/img/LoginBg.jpg") no-repeat;
    }
    .LoginBox{
        width: 400px;
        height: 250px;
        border: 1px solid #ccc;
        margin-top: 150px ;
    }
    .logi{
        border-right: 2px solid #ccc;
    }
    .logi,.regis{
        font-size: 25px;
        text-align: center;
        border-bottom: 2px solid #ccc;
        box-sizing:border-box;
    }
    .logi a,.regis a{
        display: block;
        width: 100%;
    }
    .logi a:hover,.regis a:hover{
        color: white;
        background: blue;
    }
    .comtainer{
        width: 100%;
    }
    form{
        width: 100%;
    }
    input{
        width: 100px;
    }
}
</style>
