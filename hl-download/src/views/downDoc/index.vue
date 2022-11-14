<template>
  <div class="doc_container">
      <div class="page_header">
          <div class="back_btn" @click="appRouter.go(-1)"><img src="../../assets/halan/docImg/back.png" alt=""></div>
          <div class="header_title">APP下载安装教程</div>
      </div>
      <div class="top_tab_part">
          <div class="download_type">
              <div :class="{'tf_type': true, 'activeType': activeDownType*1 === 1 ? true : false}" @click="changedownType(1)"> T F 签 下 载</div>
              <div :class="{'qy_type': true, 'activeType': activeDownType*1 === 2 ? true : false}" @click="changedownType(2)"> 企 业 签 下 载</div>
          </div>
          <div v-if="activeDownType*1 === 1" class="testFlight_group">
              <div :class="{'left_btn': true, 'activeTab': activeTab*1 === 1 ? true : false}" @click="changeTab(1)">未安装TestFlight</div>
              <div :class="{'right_btn': true, 'activeTab': activeTab*1 === 2 ? true : false}" @click="changeTab(2)">已安装TestFlight</div>
          </div>
      </div>
      <div class="center_doc_part">
          
          <img v-if="activeDownType*1 === 1 && activeTab*1 === 1" src="../../assets/halan/docImg/002.jpg" alt="">
          <img v-if="activeDownType*1 === 1 && activeTab*1 === 2" src="../../assets/halan/docImg/003.jpg" alt="">
          <img v-if="activeDownType*1 === 2" src="../../assets/halan/docImg/001.jpg" alt="">
      </div>
      <div class="downLoadNow_btn"> 下 载 哈 兰 直 播 APP</div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const appRouter = useRouter();
const appRoute = useRoute();
const modules: any = [Pagination, Autoplay];
const activeDownType = ref<number|any>(1);
const activeTab: any = ref(1);
const changedownType = (type: number) => {
    activeDownType.value = type;
}
const changeTab = (type: number) => {
    activeTab.value = type;
}
onMounted(() => {
    activeDownType.value = appRoute.query.tab;
})

</script>
<style lang="scss" scoped>
.doc_container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .page_header {
      height: 80px;
      line-height: 80px;
      width: 100%;
      background: url('../../assets//halan/docImg/headerBg.png')  no-repeat 10% #0b253e;
      .back_btn {
          position: absolute;
          left: 20px;
          width: 80px;
          height: 80px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          img {
              width: 40px;
              height: 40px;
              object-fit: contain;
          }
      }
      .header_title {
          width: 100%;
          text-align: center;
          height: 100%;
          color: #fff;
          font-size: 25px;
          font-weight: 500;
      }
  }
  .top_tab_part {
      height: 250px;
      padding-top: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: #fbfbfb;
      .download_type {
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          width: 80%;
          justify-content: space-between;
          div {
              width: 45%;
              height: 55px;
              line-height: 55px;
              text-align: center;
              color: #000;
              background: white;
              border-radius: 30px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              color: #7e8daa;
              font-size: 26px;
          }
          .activeType {
              background: url('../../assets/halan/docImg/btnBg.png') no-repeat center;
              background-size: cover;
              color: #fff;
          }
      }
      .testFlight_group {
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          width: 80%;
          justify-content: center;
          div {
              flex: 1;
              height: 50px;
              line-height: 50px;
              text-align: center;
               color: #7e8daa;
              border: 1px solid #7989a7;
              box-sizing: border-box;
              font-size: 16px;
          }
          .left_btn {
              border-right: none;
              border-radius: 30px 0px 0px 30px;
          }
          .right_btn {
              border-left: none;
              border-radius: 0px 30px 30px 0px;
          }
          .activeTab {
              background: #7787a5;
              color: #fff;
          }
      }
  }
  .center_doc_part {
      width: 100%;
      height: calc(100% - 330px);
      overflow-y: scroll;
      img {
          width: 100%;
          object-fit: contain;
      }
  }
  .downLoadNow_btn {
      position: fixed;
      width: 80%;
      bottom: 80px;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      height: 80px;
      line-height: 80px;
      background: url('../../assets/halan/docImg/btnBg.png');
      background-size: cover;
      border-radius: 35px;
      font-size: 30px;
      font-weight: 500;
      color: #fff;
  }
}
</style>
