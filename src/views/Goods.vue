<template lang="html">
  <div class="goods">
   <v-header>
        <h1 slot="title">车型列表</h1>
      </v-header>
   <div>
   <ul>
      <li v-for="k in content">
        <mt-cell :title="k.full_name" :label="'降 ' +(k.offset_price/10000).toFixed(2)+'万'" :to="{path:'/detail/'+k.id}" is-link ></mt-cell>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import { Lazyload,Cell } from 'mint-ui'
import Header from '@/common/_header.vue'
export default {
  components:{
    'v-header':Header
  },
  computed:{
    content(){
      return JSON.parse(this.$store.state.detail.itemDatas)
    }
  }
}
</script>

<style lang="less" scoped>
  .goods {
    width: 100%;
    padding-bottom: 14vw;
  }
</style>
