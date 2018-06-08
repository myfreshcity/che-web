<template lang="html">
  <div class="main" v-if="datas">
    <h2>{{datas.aside[tabIndex].title}}</h2>
    <ul>
      <li v-for="(k,i) in datas.aside[tabIndex].list" style="width: 100%;" @click='changeIndex(i)'>
        <router-link :to="{name:'车型列表页'}">
          <img v-lazy="k.img_url" style="width: 98%;"><span>{{k.full_name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
  props:['datas'],
  computed:{
    // 获取当前aside栏选择的是第几个
    tabIndex(){
      return this.$store.state.category.tabIndex
    }
  },
  methods:{
    changeIndex(i) {
      this.$store.commit('SET_ITEMS',this.datas.aside[this.tabIndex].list[i].cars)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 9.8;
  height: 100%;
  &::-webkit-scrollbar {display:none}
  >h2 {
    font-size: 24px;
    padding: 2vw 4vw;
    color:#333;
    letter-spacing: 2px;
    background-color: rgb(247, 247, 247);
  }
  >ul {
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgb(247, 247, 247);

    li {
      background-color: rgb(247, 247, 247);
      width: 33%;
      text-align: center;
      a {
        color: #666;
        display: block;
        img {
          display: block;
          width: 60%;
          margin: 4vw auto;
        }
        span {
          text-align: center;
        }
      }
    }
  }
}
</style>
