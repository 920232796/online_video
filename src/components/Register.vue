<template>
    <div class="container">
        <div class="title">
            在线学习系统
        </div>

        <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="男" value="shanghai"></el-option>
                    <el-option label="女" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-col :span="24">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <!-- <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col> -->
                </el-form-item>
                <el-form-item label="学历">
                    <el-checkbox-group v-model="form.type">
                    <el-checkbox label="专科" name="type"></el-checkbox>
                    <el-checkbox label="本科" name="type"></el-checkbox>
                    <el-checkbox label="硕士" name="type"></el-checkbox>
                    <el-checkbox label="博士" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="国家">
                    <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="中国" value="shanghai"></el-option>
                    <el-option label="美国" value="beijing"></el-option>
                    <el-option label="俄罗斯" value="beijing"></el-option>
                    <el-option label="韩国" value="beijing"></el-option>
                    <el-option label="日本" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即注册</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
       
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
                errorMessage: "",
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
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
        margin: 0 auto;
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
        margin-top: 20px;
    }
    .form {
        margin: 90px auto;
        width: 500px;
        height: 800px;
        /* border: 1px solid red; */

    }
  
</style>
