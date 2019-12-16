<template>
  <div class="student">

     <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="用户id"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.user }}</span>
      </template>
    </el-table-column>

    <!-- <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column> -->

     <el-table-column
      label="性别"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.gender }}</span>
      </template>
    </el-table-column>

     <el-table-column
      label="学历"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

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
    <div class="text">显示1到7，共23条</div>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="23">
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
          date: '本科',
          name: '小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          gender: "男",
          user: "201511010"
        }, {
          date: '本科',
          name: '小王',
          address: '上海市普陀区金沙江路 1517 弄',
          user: "201511030",
          gender: "男",
        }, {
          date: '本科',
          name: '小李',
          address: '上海市普陀区金沙江路 1519 弄',
          user: "201511012",
          gender: "女",
        }, {
          date: '本科',
          name: '小张',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "201511011",
          gender: "男",
        }, {
          date: '硕士',
          name: '小张',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "201511011",
          gender: "男",
        }, {
          date: '专科',
          name: '小张',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "201511011",
          gender: "男",
        }, {
          date: '硕士',
          name: '小张',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "201511011",
          gender: "男",
        }, 
        
        
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
    .student {
        width: 900px;
        height: 500px;
        position: absolute;
        top: 150px;
        left: 500px;
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
</style>
