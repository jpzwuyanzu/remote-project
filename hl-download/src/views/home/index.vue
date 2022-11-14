<template>
  <div class="home_container">
    <div class="headerLogo">
        <img class="logo" src="../../assets/halan/logo.png" alt="">
        <div class="team_icon">
            <div class="icon_item">
                <img src="../../assets/halan/01.png" alt="">
            </div>
            <div class="icon_item">
                <img src="../../assets/halan/02.png" alt="">
            </div>
            <div class="icon_item">
                <img src="../../assets/halan/03.png" alt="">
            </div>
            <div class="icon_item">
                <img src="../../assets/halan/04.png" alt="">
            </div>
            <div class="icon_item">
                <img src="../../assets/halan/05.png" alt="">
            </div>
            <div class="icon_item">
                <img src="../../assets/halan/06.png" alt="">
            </div>
        </div>
    </div>
    <div class="center-swiper">
        <swiper
      :pagination="true"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="swiper_box_container"
    >
      <swiper-slide>
        <div class="swiper_img_container">
          <img class="swiper_img" src="../../assets/1.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper_img_container">
          <img class="swiper_img" src="../../assets/2.jpg" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    </div>
    <div class="center_bg">
        <img src="../../assets/halan/002.png" alt="">
    </div>
    <div class="footer_btn_group">
        <div class="android_btn"><img src="../../assets/halan/android.png" alt=""><span> 安 卓 下 载</span></div>
        <div class="center_btn-group">
            <div class="tf-btn" @click="linkPage(1)"><img src="../../assets/halan/ios.png" alt=""><span> T F 签 下 载</span></div>
            <div class="qiye-btn" @click="linkPage(2)"><img src="../../assets/halan/ios.png" alt=""><span> 企 业 签 下 载</span></div>
        </div>
        <!-- <div class="download_doc" @click="linkPage(1)">下载教程</div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const appRouter = useRouter();
const modules: any = [Pagination, Autoplay];
const linkPage = (type: number) => {
    appRouter.push(`/downDoc?tab=${type}`)
}
</script>
<style lang="scss" scoped>
.home_container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('../../assets/halan/bg.png') no-repeat center;
  background-size: 100% 100%;
  .headerLogo {
      height: 420px;
      background: url('../../assets/halan/001.png') no-repeat center;
      background-size: 100% 100%;
      position: relative;
      .logo {
          object-fit: contain;
          width: 230px;
          height: 100px;
          z-index: 1;
          margin-top: 10px;
          margin-left: 20px;
      }
      .team_icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 135px;
          left: 0;
          right: 0;
          margin: 0 auto;
          z-index: 3;
          .icon_item {
              background: url('../../assets/halan/circle.png') no-repeat center;
              background-size: contain;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 14px;
              margin-right: 14px;
              img {
                  object-fit: contain;
                  width: 78px;
              }
          }
      }
  }
  .center-swiper {
    position: absolute;
    width: 85%;
    top: 310px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    z-index: 3;
    opacity: 0.9;
    .swiper_box_container {
        border-radius: 15px;
    }
  }
  .center_bg {
      width: 85%;
      position: absolute;
      top: 600px;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 2;
      height: 500px;
    img {
        width: 100%;
        // height: 450px;
        height: 100%;
        object-fit: cover;

    }
  }
  .footer_btn_group {
      position: fixed;
      bottom: 0px;
      width: 100%;
      height: 250px;
      padding-top: 30px;
      box-sizing: border-box;
      z-index: 4;
      .android_btn {
          width: 80%;
          text-align: center;
          height: 65px;
          line-height: 65px;
          background: url('../../assets/halan/btn.png') no-repeat center;
          background-size: cover;
          border-radius: 30px;
          color: white;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          img {
              width: 40px;
              height: 40px;
              object-fit: contain;
              margin-right: 20px;
          }
      }
      .center_btn-group {
          margin: 0 auto;
          width: 80%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          margin-bottom: 40px;
          div {
              width: 47%;
              text-align: center;
              color: white;
              height: 65px;
              line-height: 65px;
              border-radius: 30px;
              background: url('../../assets/halan/btn.png') no-repeat center;
              background-size: cover;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              img {
              width: 40px;
              height: 40px;
              object-fit: contain;
              margin-right: 20px;
          }
          }
      }
      .download_doc {
          margin: 0 auto;
          width: 80%;
          text-align: center;
          height: 65px;
          line-height: 65px;
          background: url('../../assets/halan/btn.png') no-repeat center;
          background-size: cover;
          border-radius: 30px;
          color: white;
      }
  }
}
.swiper_img_container {
    border-radius: 15px;
  .swiper_img {
    width: 100%;
    height: 330px;
    border-radius: 15px;
  }
}
:deep(.swiper-pagination-bullet-active) {
    color: #b3001b !important;
}

/* iphoneX 适配 */
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .center_bg {
    top: 660px !important;
    height: 600px !important;
  }
}
/* iphone11 适配 */
@media only screen and (device-width: 414px) and (device-height: 896px){
  .center_bg {
    top: 660px !important;
    height: 600px !important;
  }
}
</style>
