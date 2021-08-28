<template>
  <div class="test">
    <el-form ref="name" :model="form" label-width="80px">
      <el-input class="inputTest" v-model="form.input" placeholder="请输入用户名"></el-input>
      <el-button type="success" @click="queryName('name')">查询</el-button>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="姓名"
        prop="name"
        width="180">
      </el-table-column>
      <el-table-column
        label="密码"
        prop="pwd"
        width="180">
<!--        <template slot-scope="scope">-->
<!--          <el-popover trigger="hover" placement="top">-->
<!--            <p>姓名: {{ scope.row.name }}</p>-->
<!--            <div slot="reference" class="name-wrapper">-->
<!--              <el-tag size="medium">{{ scope.row.pwd }}</el-tag>-->
<!--            </div>-->
<!--          </el-popover>-->
<!--        </template>-->
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
    data() {
      return {
        tableData: [{
          name: 'czy',
          pwd: '0000'
        }
        ],
        form:{
          input: ''
        },
      }
    },
    methods: {
     queryName(name){
       this.$refs[name].validate(valib=>{
         //因为axios内部的then内部的this是指的axios对象，而不是当前vue的对象，因此把当前Vue的对象用vm声明，这样this就不会冲突
         var  vm = this;
         if (valib){
           console.log(vm.tableData.name);
           this.axios({
             method:"get",
             url:"http://localhost:8080/api/queryName?name="+this.form.input
           }).then(res => {
             console.log(res)
             this.tableData = res.data.data;
             console.log(this.tableData,'ss');
           }).catch(err => {
           })
         }
       })
     }
    }
  }
</script>
<style scoped>
  .inputTest{
    width: 200px;
  }
</style>
