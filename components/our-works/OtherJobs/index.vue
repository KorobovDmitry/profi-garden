<template>
  <section class="other-jobs">
    <app-block-title>
      <template v-slot:title>Другие наши работы</template>
      <template v-slot:subtitle>Мы делаем мир красивее</template>
    </app-block-title>

    <div class="other-jobs-slider__container">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in 4" :key="index" class="swiper-slide">
              <img class="image" :src="`images/index/our-works/${index + 1}.jpg`">
            </div>
        </div>
        <div class="other-jobs-slider__pagination"></div>
    </div>
  </section>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css';

export default {
  components: {
    AppBlockTitle
  },
  mounted () {
    var mySwiper = new Swiper('.other-jobs-slider__container', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        600: {
          slidesPerView: 2
        },
        800: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
      },

      pagination: {
        el: '.other-jobs-slider__pagination',
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

.other-jobs {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: $white;
  .other-jobs-slider__container {
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
    .other-jobs-slider__pagination {
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
}

</style>
