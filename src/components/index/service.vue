<template lang="html">

  <div class="service">
    <ul>
      <li><i class="icon-ok"></i><span>正品保障</span></li>
      <li><i class="icon-ok"></i><span>全网最低</span></li>
      <li><i class="icon-ok"></i><span>快速提车</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .service {
    .bd();
    ul {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;

      li {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        align-items: center;
        padding: 3.3vw 0;
        span {
          .fz(font-size,28);
          padding-left: 1vw;
        }
        i {
          .fz(font-size,36);
        }
      }
    }
  }

</style>
