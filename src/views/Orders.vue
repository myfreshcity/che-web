<template lang="html">

  <div class="pay">
    <v-header>
      <h1 slot="title">订单列表</h1>
    </v-header>

    <div class="pay-product">
      <ul>
        <li v-for="k in carList">
          <a>
            <div>
              <h2>{{k.contact_person}} | {{k.contact_way}}</h2>
              <p>支付金额 {{k.pay_amt}} 元</p>
              <p>支付时间 {{k.pay_time}}</p>
              <p>备注 {{k.remark}}</p>
            </div>
          </a>
        </li>
      </ul>

    </div>



  </div>
</template>

<script>
import Util from '../util/common'
import Header from '@/common/_header.vue'
import {
  MessageBox,Toast
} from 'mint-ui';
export default {
  components: {
    'v-header': Header
  },
  data() {
    return {
      carList: []
    }
  },
  mounted() {
    this.$api({
      method:'get',
      url:'/orders'
    }).then((res)=>{
      this.carList = res.data.result;
    }).catch((error)=>{
      console.log(error);
    })
  },
  computed: {

  },

  methods: {
    forwardHome(){
      this.$router.replace({
        path: '/user'
      })
    }
  }

}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
.pay {
    width: 100%;
    background-color: #F7F7F7;

    .pay-address {
        background-color: #fff;
        border-bottom: 1*10vw/75 solid #DEDEDE;
        padding: 30*10vw/75;

        > div {
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            justify-content: space-between;

            p {
                color: #868686;
                .fz(font-size,32px);
            }
        }

        > p {
            .fz(font-size,28px);
            color: #868686;
            padding-top: 30*10vw/75;
            letter-spacing: 3*10vw/75;
            line-height: 45*10vw/75;
        }
    }
    .pay-product {
        background-color: #fff;
        overflow: auto;

        li {
            a {
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                box-sizing: border-box;
                padding: 20*10vw/75 30*10vw/75;
                color: #4D4D4D;
                .fz(font-size,30px);
                border-bottom: 1*10vw/75 solid #DEDEDE;

                > img {
                    display: block;
                    width: 2.5*10vw;
                    height: 2.5*10vw;
                }

                > div {
                    box-sizing: border-box;
                    padding-left: 50*10vw/75;
                    width: 98%;
                    h2 {
                        padding-top: 0.09*10vw;
                        overflow: hidden;
                        word-break: keep-all;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    p {
                        text-align: right;
                        .fz(font-size,24px);
                        padding-top: 1vw;
                    }
                }
            }
        }
    }

    .pay-allpay {
        text-align: right;
        margin-top: 6vw;
        padding: 4vw 5vw;
        .fz(font-size,32px);
        color: #999999;
        background-color: #fff;
        i,
        span {
            color: @cl;
        }
    }

    .pay-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 4vw;
        span {
            display: block;
            width: 85%;
            background-color: #fd729c;
            border-radius: 1.3vw;
            color: #fff;
            font-size: 17px;
            padding: 4vw;
            margin: 0 auto;
            text-align: center;
            &:active {
                background-color: @cl;
            }
        }

    }

    .pay-confirm {
        padding: 20px 0;
        background-color: @cl;
        text-align: center;
        color: #fff;
        line-height: 30px;
        .fz(font-size,40);
    }
}
</style>
