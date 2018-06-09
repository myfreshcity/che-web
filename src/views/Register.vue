<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">注册</h1>
    </v-header>
    <section>
      <mt-field
       label="账号"
        placeholder="请输入手机号码"
        type = "text"
        v-model = "username"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
        ></mt-field>
    </section>
    <mt-button
     plain
     size="large"
     @click="register"
     v-if='toggle'>注册</mt-button>


     <div class="reg_link">已有账号？<router-link :to="{ path: '/login', params: {} }">去登录</router-link></div>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      username:'',
      password:'',
      toggle:!this.$store.state.login.token
    }
  },
  computed: {

  },
  methods:{
    validation() {
      var patt1 = /^[1][3,4,5,7,8,9]\d{9}$/;
      var patt2 = /^(?!(?:\d*$))(?!(?:[a-zA-Z]*$))[A-Za-z0-9]{6,20}$/;
      return (patt1.test(this.username)) && patt2.test(this.password)
    },

    register(){
      if(!this.validation()){
        Toast('无效的账号或密码,密码应为6-20位数字与字母混合')
        return
      }

      this.$api({
        method:'post',
        url:'/register',
        data:{
          username: this.username,
          password: this.password,
        }
      }).then((response) => {
        if(response.data.status != 200){
          Toast(response.data.message)
        }else{
          Toast('注册成功');
          this.toggle = false;
          this.$store.commit('CHANGE_TOKEN',1)

          setTimeout(()=>{
            this.$router.replace({
              path: 'user'
            })
          },1000)
        }
      }).catch((response) => {
        Toast('注册出错了！ ')
      })
    },

  }
}

</script>

<style lang="less" scoped>
.login {
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }

  .reg_link {
    text-align: center;
    padding: 4vw 0;
  }
}
</style>
