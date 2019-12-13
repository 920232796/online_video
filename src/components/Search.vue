<template>
  <div class="search">
      <el-row class="search_btn">
          <div class="input_content">
              <el-input placeholder="请输入搜索内容" size="medium"></el-input>
          </div>
            
            <el-button class="btn" type="primary">搜索</el-button>
      </el-row>
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

    }
  }
}
</script>

<style scoped>
    .search {
        float: left;
    }
    .search_btn {
        margin-top: 8px;
        margin-left: 350px;
        /* margin: 20 auto; */
    }
    .input_content {
        float: left;
        margin-top: 2px;
        width: 300px;
    }
    .btn {
        margin-left: 20px;
        width: 150px;
    }
</style>
