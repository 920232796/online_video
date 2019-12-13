<template>
  <div class="video">
    <div class="img">
        <img :src="url" alt="" height="500px" width="700px">
    </div>
    <div class="word">

    <div class="discrip">
        <div class="title">
            课程简介：
        </div>
        模拟电子电路是培养电子通信类工程从业人员的基础课程。在数字时代，
        模拟电路是现实世界与数字世界之间的硬件桥梁，是人们与各种电子产品交互的接口。模拟电子技术广泛应用于各类硬件开发和集成电路设计中。
        本课程侧重理论与实际结合，适合普通高校电子信息类专业学生、社会相关从业人员学习。
    </div>
    <div class="target">
        <div class="title">
            课程目标：
        </div>
        目标（1）：能够应用二极管、场效应管、三极管等半导体器件和放大器基础知识，分析工程问题中器件的工作状态，能够选择相应合适的模型，进行问题分析；<br>

        目标（2）：能够结合器件手册，运用半导体器件和放大器相关基础知识，对复杂模拟电路系统进行分解和对比，能够识别小信号放大电路、功率放大电路、滤波电路、振荡电路、稳压电路等模拟单元电路，并根据工程条件进行合理建模，计算分析其性能参数；<br>

        目标（3）：能够根据电路基本原理，结合偏置、小信号等效、负反馈等科学方法，分析和解决放大器失真、放大器自激、振荡、滤波等相关复杂工程问题。<br>
        
    </div>
  </div>

  <div class="btn">
      <div class="left">
         <el-button type="primary">立即测试</el-button>
      </div>
      
       <div class="right">
            <el-button type="primary">下一节</el-button>
       </div>
        
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'video',
  props: {

  },
  data () {
    return {
        url: require("@/assets/video_img.png"),
    }
  }
}
</script>

<style scoped>  
    .img {
        width: 800px;
        height: 400px;
        float: left;
        margin-top: 50px;
        /* border: 1px solid red; */

    }
    .word {
        height: 570px;
        float: left;
        width: 600px;
        /* border: 1px solid red; */
    }
    .discrip {
        width: 700px;
        height: 200px;
        /* border: 1px solid red; */
        line-height: 40px;
        /* float: left; */

    }
    .target {
        width: 700px;
        line-height: 38px;
        height: 400px;
    }
    .btn {
        float: left;
        width: 400px;
        height: 50px;
        margin-top: 30px;
    }
    .left {
        float: left;
        margin-left: 20px;
    }

    .right {
        width: 80px;
        height: 40px;
        /* border: 1px solid red; */
        margin-left: 690px;
    }
    
</style>
