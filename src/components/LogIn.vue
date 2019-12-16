<template>

    <div class="container">

        <div class="title">
            在线学习系统
        </div>
        <div class="wrapper-user">
            <div class="username">账号:</div>
            <div class="input-username">
                <el-input v-model="inputUsername" placeholder="请输入账号" size="medium"></el-input>
            </div>
        </div>
        <div class="wrapper-password">
            <div class="password">密码:</div>
            <div class="input-password">
                <el-input v-model="inputPassword" placeholder="请输入密码" size="medium"></el-input>
            </div>
            <div class="forget">忘了密码?</div>
        </div>

        <el-row class="logBtn">
            <el-button class="btn" type="primary">注册</el-button>
            <el-button class="btn" type="primary">登陆</el-button>
        </el-row>

        <div class="error">{{errorMessage}}</div>

    </div>

</template>

<script>
  import axios from 'axios'
    export default {
        name: '',
        data () {
            return {
                inputUsername: '',
                inputPassword: '',
                errorMessage: ""
            }
        },
      created(){
      },
        methods: {
          
        }
    }
</script>

<style scoped>

    .container {
        width: 1000px;
        /* border: 1px solid red; */

        /* height: 900px; */
        /* background-image: url("~@/assets/background.jpg"); */
    }
    .title {
        /* border: 1px solid red; */
        width: 400px;
        height: 60px;
        font-size: 50px;
        /* margin: 100px auto; */
        
        margin: 0 auto;
        margin-top: 100px;
    }
    .wrapper-user {
        /*border: 1px solid blue;*/
        width: 390px;
        height: 50px;
        margin: 0 auto;
        padding-top: 15%;

    }
    .username {
        float: left;
        font-size: 15px;
        text-align: center;
        line-height: 35px;
        padding-right: 10px;
    }
    .container {
        width: 100%;
        height: 100%;
        /*border: 1px solid red;*/
    }
    .input-username {
        float: left;
        width: 250px;
    }



    .wrapper-password {
        /*border: 1px solid blue;*/
        width: 390px;
        height: 50px;
        padding-top: 1.5%;
        margin: 0 auto;
        /*display:flex;*/
        /*justify-content:center;*/
        /*align-items:center;*/
    }
    .password {
        float: left;
        font-size: 15px;
        text-align: center;
        line-height: 35px;
        padding-right: 10px;
    }
    .input-password {
        float: left;
        width: 250px;
    }
    .forget {
        font-size: 13px;
        margin-top: 10px;
    }


    .logBtn {
        width:550px;
        margin-left: 530px;
        padding-top: 2%;
        padding-left: 0px;
    }
    .btn {
        width: 110px;
        margin-left: 5px;
    }
    .error{
      width: 130px;
      margin: 0 auto;
      margin-top: 20px;
      color: orangered;
    }
</style>
