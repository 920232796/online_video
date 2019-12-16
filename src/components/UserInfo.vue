<template>
  <div class="userinfo">
    <div class="left_navi">
        <div class="img_name">
            <el-avatar :size=80 src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

            <!-- <div class="name">
                xhy
            </div> -->
        </div>
        <div class="divider">
            <div class="text_divider">个人信息中心</div>
            <el-divider class="img_divider"></el-divider>
        </div>
        
        <div class="person_info">个人信息</div>
        <div class="history">课程选择记录</div>
        <div class="group">所在学习群组</div>
    </div>

    <div class="right_info">
        <div class="top_info">
            <div class="person_info_right">个人信息</div>
            <el-button type="primary" class="edit_btn">编辑</el-button>
             <el-divider class="img_divider"></el-divider>
        </div>

        <div class="info_div">
            <div align="left" class="user_name">用户id：130149644</div>
            <div align="left" class="user_name">性别： 女</div>
            <div align="left" class="user_name">国家： 中国</div>
            <div align="left" class="user_name">学历： 本科</div>
            <!-- <div align="left" class="user_name">职位： 学生</div> -->
        </div>
    </div>

    

  </div>
  
</template>

<script>
export default {
  name: 'userinfo',
  props: {

  },
  data () {
    return {
       
    }
  }
}
</script>

<style scoped>
    .left_navi {
        float: left;
        margin-left: 30px;
        margin-top: 20px;
        width: 400px;
        height: 800px;
        /* border: 1px solid red; */
        background-color: #f6f6f6;
    }
    .name {
        margin-top: 30px;
        font-size: 25px;
    }
    .text_divider {
        width: 200px;
        font-weight: bold;
        margin-top: 30px;
        height: 20px;
        margin-left: 10px;
        font-size:25px;
        /* margin-bottom: 20px; */
    }
    .img_divider {
        margin-top: 20px;
        height: 4px;
       
    }
    .person_info {
        font-size: 30px;
        margin-top: 60px;
    }
    .history {
        font-size: 30px;
        margin-top: 40px;
    }
    .group {
        font-size: 30px;
        margin-top: 40px;
    }
    .right_info {
        width: 1000px;
        float: left;
        height: 800px;
        /* border: 1px solid red; */
         margin-left: 20px;
    }
    .person_info_right {
        float: left;
        font-size: 40px;
        font-weight: bold;
       
    }
    .edit_btn {
        margin-top: 10px;
        margin-left: 700px;
    }
    .info_div {
        width: 400px;
        height: 300px;
        margin-left: 350px;
        margin-top: 80px;
    }
    .user_name {
        font-size: 25px;
        width: 300px;
        height: 50px;
        margin-top: 20px;
        /* border: 1px solid red; */
        
    }
</style>
