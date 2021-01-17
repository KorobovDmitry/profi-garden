<template>
  <section class="our-works-slider">

    <app-block-title>
      <template v-slot:title>Наши работы</template>
      <template v-slot:subtitle>Всегда довольные клиенты</template>
    </app-block-title>

    <div class="our-works-slider__container">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in 4" :key="index" class="swiper-slide">
              <img class="image" :src="`/images/index/our-works/${index + 1}.jpg`">
            </div>
        </div>
        <div class="our-works-slider__pagination"></div>
    </div>

    <nuxt-link to="our-works" class="more-btn">
      <app-button accentDark>Все наши работы</app-button>
    </nuxt-link>
  </section>
</template>

<script>
// import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css';

export default {
  components: {
    // AppBlockTitle,
    AppButton
  },
  mounted () {
    var mySwiper = new Swiper('.our-works-slider__container', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },

      pagination: {
        el: '.our-works-slider__pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        }
      },
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.our-works-slider {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  .our-works-slider__container {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    width: 100%;
    overflow: hidden;
    .swiper-wrapper {
      // border: 1px solid red;
      .swiper-slide {
        // border: 1px solid red;
        box-sizing: border-box;
        .image {
          width: 100%;
        }
      }
    }
    .our-works-slider__pagination {
      // border: 1px solid red;
      align-self: center;
      margin-top: 50px;
      transform: translateX(0);
      .swiper-pagination-bullet {
        background: $accentLight;
      }
      .swiper-pagination-bullet-active-next,
      .swiper-pagination-bullet-active-prev {
        opacity: .4;
      }
    }
  }
  .more-btn {
    margin-top: 50px;
  }
}

</style>
