<template>
  <div class="login-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        var vm = this;
        if (valid) {
          // alert('submit!');
          console.log(vm.form.name);
          this.axios({
            method: "get",
            url: "http://127.0.0.1:8091/login",
            params: this.form
          })
            .then(function(resp) {
              if (resp.data == "success") {
                //登录成功
                this.$message({
                  type: "success",
                  message: "登录成功"
                });
                vm.$router.push("/Home");
              } else {
                return false;
              }
            })
            .catch(err => {
              vm.$message({
                type: "error",
                message: err
              });
            });
        } else {
          this.$message({
            type: "warning",
            message: "用户名或密码格式不正确"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-box {
  width: 500px;
  height: 300px;
  border: 1px solid #dcdfe6;
  margin: 150px auto;
  padding: 20px 50px 20px 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #dcdfe6;
}
.login-title {
  text-align: center;
  margin-bottom: 40px;
}
</style>
