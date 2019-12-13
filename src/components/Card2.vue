<template>
  <el-carousel :interval="4000" type="card" height="250px">
    <el-carousel-item v-for="each of list" :key="each.id">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <div class="left_img">
        <img :src="each.url" alt="">
      </div>
      <div class="right_content">
        <div class="title">
          {{each.title}}
        </div>
        <div class="content">
          {{each.content}}
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import axios from 'axios'
    export default {
        name: '',
        data () {
            return {
                list: [{id: 0, url: require("@/assets/电与磁.png"), title: "电磁学经典课程", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"},
                {id: 1, url: require("@/assets/电路与电子学.png"), title: "电路学基础教程", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"},
                {id: 2, url: require("@/assets/汇编语言程序设计.png"), title: "汇编语言深度讲解课程", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"}, 
                {id: 3, url: require("@/assets/c++程序设计.png"), title: "c++程序设计", content: "电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程电磁学经典课程"}
                ],
              
            }
        },
      created(){
      },
        methods: {
          
        }
    }
</script>


<style>
  .left_img {
    float: left;
  }
  .title {
    margin-top: 20px;
    font-size: 25px;

  }
  .content {
    width: 550px;
    height: 180px;
    margin-left: 220px;
    margin-top: 20px;
    line-height: 30px;
    /* border: 1px solid red; */
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>