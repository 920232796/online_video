<template>
  <div class="course">
    <div class="add_course">
       <el-button type="success">添加课程</el-button>
    </div>
     <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="课程编号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.user }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="课程名"
      width="200">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

     <!-- <el-table-column
      label="课程交互次数"
      width="160"> -->
      <!-- <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.gender }}</span>
      </template>
    </el-table-column>

     <el-table-column
      label="课程访问天数"
      width="160">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="章节数"
      width="160">
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.chapter }}</span>
      </template> -->
    <!-- </el-table-column> -->

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="pagination">
    <div class="text">显示1到7，共16条</div>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="16">
    </el-pagination>
  </div>

  </div>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String
  },
  data () {
    return {
        tableData: [{
          date: '02',
          name: '计算机科学导论',
          address: '上海市普陀区金沙江路 1518 弄',
          gender: "109",
          user: "CS50x",
          chapter: "12"
        }, {
          date: '06',
          name: '力学回顾',
          address: '上海市普陀区金沙江路 1517 弄',
          user: "8.MReV",
          gender: "97",
          chapter: "10"
        }, {
          date: '12',
          name: '生物学导论-生命的意义',
          address: '上海市普陀区金沙江路 1519 弄',
          user: "7.00x",
          gender: "33",
          chapter: "8"
        }, {
          date: '03',
          name: '计算机编程导论',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "6.00x",
          gender: "209",
          chapter: "15"
        }, {
          date: '03',
          name: '结构原件',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "2.01x",
          gender: "209",
          chapter: "15"
        }, {
          date: '03',
          name: '正义',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "ER22x",
          gender: "209",
          chapter: "15"
        }, {
          date: '03',
          name: '固态化学导论',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "3.091x",
          gender: "209",
          chapter: "15"
        }
        ]
    }
  }, 
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>

<style scoped>

    
    .course {
        width: 600px;
        height: 500px;
        position: absolute;
        top: 150px;
        left: 600px;
        /* border: 1px solid red; */
    }
    .pagination {
      width: 950px;
      height: 60px;
      /* border: 1px solid red; */
      margin: 20px auto;
    }
    .text {
      font-size: 12px;
      margin-top: 5px;
      float: left;
    }
    .add_course {
      position: absolute;
      width: 150px;
      height: 50px;
      left: 600px;
      top:10px;
    }
</style>
