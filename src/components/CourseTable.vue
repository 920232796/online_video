<template>
  <div class="course">

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
      width="160">
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

     <el-table-column
      label="课程交互次数"
      width="160">
      <template slot-scope="scope">
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
          name: '电路技术',
          address: '上海市普陀区金沙江路 1518 弄',
          gender: "109",
          user: "101511010",
          chapter: "12"
        }, {
          date: '06',
          name: 'c++程序设计基础',
          address: '上海市普陀区金沙江路 1517 弄',
          user: "101511030",
          gender: "97",
          chapter: "10"
        }, {
          date: '12',
          name: '计算机科学概论',
          address: '上海市普陀区金沙江路 1519 弄',
          user: "101511012",
          gender: "33",
          chapter: "8"
        }, {
          date: '03',
          name: '电与磁',
          address: '上海市普陀区金沙江路 1516 弄',
          user: "101511011",
          gender: "209",
          chapter: "15"
        }]
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
        width: 1000px;
        height: 500px;
        position: absolute;
        top: 150px;
        left: 460px;
        /* border: 1px solid red; */
    }
</style>
