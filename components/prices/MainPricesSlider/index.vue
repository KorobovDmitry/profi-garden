<template>
  <section class="main-prices-slider">

    <div class="main-prices-slider__container">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in 3" :key="index" class="swiper-slide">
              <div class="images__wrapper">
                <img :src="`/images/index/our-services/${index + 1}.jpg`" class="main-image" />
              </div>
              <div class="price__wrapper">
                <p class="price__title">Устройство газона</p>
                <p class="price__value">от 800 ₽/м<sup>2</sup></p>
              </div>
            </div>
        </div>
        <div class="main-prices-slider__pagination"></div>
    </div>

  </section>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  mounted () {
    var mySwiper = new Swiper('.main-prices-slider__container', {
      direction: 'horizontal',
      slidesPerView: 3,
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
      },

      pagination: {
        el: '.main-prices-slider__pagination',
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

.main-prices-slider {
  // border: 1px solid red;
  padding: 0 20px 80px 20px;
  .main-prices-slider__container {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    overflow: hidden;
    .swiper-wrapper {
      .swiper-slide {
        // border: 1px solid red;
        .images__wrapper {
          position: relative;
          .main-image {
            position: relative;
            width: 100%;
          }
        }
        .price__wrapper {
          .price__title {
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
          }
          .price__value {
            margin-top: 15px;
            text-align: center;
            color: $accentDark;
            font-size: 18px;
            font-weight: 600;
            sup {
              vertical-align: super
            }
          }
        }
      }
    }
    .main-prices-slider__pagination {
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
