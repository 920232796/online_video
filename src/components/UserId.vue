<template>
  <div class="userid">
      <div class="avater">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
      <div class="id">
        用户Id：130149644
      </div>
      <el-button type="primary" class="btn">退出登陆</el-button>
  </div>
  
</template>

<script>
export default {
  name: 'userid',
  props: {

  },
  data () {
    return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  }
}
</script>

<style scoped>
    .userid {
        height: 50px;
        width: 380px;
        margin-left: 5px;
        margin-top: 10px;
    }
    .avater {
      float: left;
    }
    .id {

        float: left;
        width: 150px;
        height: 30px;
        margin-top:15px;
        margin-left: 5px;
        /* border: 1px solid red; */
    }
    .block {
        float: left;
    }
    .btn {
      margin-top:5px;
    }
</style>
