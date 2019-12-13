<template>
  <div class="group">
    <div class="navi">
      <div class="word">
        群组推荐（以下课程根据群组推荐）
      </div>
          <el-button type="primary">换一组推荐</el-button>
    </div>
   

    <div class="wrapper">
      <div class="content" v-for="each of course" :key="each.id">
        <div class="title">
          {{each.title}}
        </div>
        <div class="img">
          <img :src="each.url" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data () {
    return {
        course: [{id: 0, url: require("@/assets/电与磁.png"), title: "电磁学经典课程", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"},
                {id: 1, url: require("@/assets/电路与电子学.png"), title: "电路学基础教程", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"},
                {id: 2, url: require("@/assets/汇编语言程序设计.png"), title: "汇编语言深度讲解课程", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"}, 
                {id: 3, url: require("@/assets/计算机科学概论.png"), title: "计算机导学重点课程"}
                ],
    }
  }
}
</script>

<style scoped>

    .group {
      margin-top: 30px;
    }
    .word {
      margin-left: 30px;
      float: left;
      margin-top: 5px;
    }
    .navi {
        width:520px;
        height: 100px;
        font-size: 20px;
        /* border: 1px solid red; */

    }
    .wrapper {
      width: 1600px;
      height: 500px;
      /* border: 1px solid blue; */
    }
    .title {
      margin-bottom: 20px;
      font-size: 25px;
    }
    .content {
      width: 300px;
      height: 400px;
      /* border: 1px solid red; */
      float: left;
      margin-left: 60px;
    }
</style>
