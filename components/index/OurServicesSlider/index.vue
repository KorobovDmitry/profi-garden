<template>
  <section class="our-services-slider">

    <app-block-title>
      <template v-slot:title>Актуальные услуги</template>
      <template v-slot:subtitle>Мы многое умеем</template>
    </app-block-title>

    <div class="our-services-slider__static">
      <div class="static__item">
        <div class="images__wrapper">
          <img :src="`/images/index/our-services/1.jpg`" class="main-image">
          <img :src="`/images/index/our-services/2.jpg`" class="second-image">
        </div>
        <div class="price__wrapper">
          <p class="price__title">Устройство газона</p>
          <p class="price__value">от 800 ₽/м<sup>2</sup></p>
        </div>
      </div>

      <div class="static__item">
        <p class="item__text">«Ателье Зеленных Решений Анжелики Ефремовой» предлагает широкий спектр услуг по проектированию, благоустройству, озеленению, реконструкции, сезонному обслуживанию, формированию, лечению сада.</p>

        <nuxt-link to="/prices" class="item__link">
          <app-button accentDark>Весь прайс</app-button>
        </nuxt-link>
      </div>

      <div class="static__item">
        <div class="images__wrapper">
          <img :src="`/images/index/our-services/2.jpg`" class="main-image">
          <img :src="`/images/index/our-services/1.jpg`" class="second-image">
        </div>
        <div class="price__wrapper">
          <p class="price__title">Устройство газона</p>
          <p class="price__value">от 800 ₽/м<sup>2</sup></p>
        </div>
      </div>
    </div>

    <div class="our-services-slider__container">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in 3" :key="index" class="swiper-slide">
              <div class="images__wrapper">
                <img :src="`/images/index/our-services/${index + 1}.jpg`" class="main-image">
                <img :src="`/images/index/our-services/${index + 2}.jpg`" class="second-image">
              </div>
              <div class="price__wrapper">
                <p class="price__title">Устройство газона</p>
                <p class="price__value">от 800 ₽/м<sup>2</sup></p>
              </div>
            </div>
        </div>
        <div class="our-services-slider__pagination"></div>
    </div>

  </section>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    AppButton
  },
  mounted () {
    var mySwiper = new Swiper('.our-services-slider__container', {
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
        el: '.our-services-slider__pagination',
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

.our-services-slider {
  // border: 1px solid red;
  padding: 80px 20px;

  .our-services-slider__static {
    // border: 1px solid red;
    display: flex;
    margin: 55px auto 0 auto;
    width: 100%;
    max-width: 1400px;
    .static__item {
      display: flex;
      flex-direction: column;
      width: 100%;
      .images__wrapper {
        position: relative;
        .main-image {
          position: relative;
          width: 100%;
        }
        .second-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: $tr-04;
          opacity: 0;
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
      .item__text {
        padding: 0 20px;
        text-align: center;
      }
      .item__link {
        align-self: center;
        margin-top: 50px;
      }
    }
    .static__item:first-child {
      margin-right: 20px;
    }
    .static__item:last-child {
      margin-left: 20px;
    }
    .static__item:hover {
      .images__wrapper {
        .second-image {
          opacity: 1;
        }
      }
    }
  }

  .our-services-slider__container {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin: 55px auto 0 auto;
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
          .second-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: $tr-04;
            opacity: 0;
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
      .swiper-slide:hover {
        .images__wrapper {
          .second-image {
            opacity: 1;
          }
        }
      }
    }
    .our-services-slider__pagination {
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

@include for (1000) {
  .our-services-slider {
    .our-services-slider__static {
      .static__item {
        .images__wrapper {
          .main-image {}
          .second-image {}
        }
        .price__wrapper {
          .price__title {}
          .price__value {}
        }
        .item__text {
          padding: 0;
        }
        .item__link {}
      }
      .static__item:first-child {
        display: none;
      }
      .static__item:last-child {
        display: none;
      }
    }

    .our-services-slider__container {
      .swiper-wrapper {
        .swiper-slide {
          .images__wrapper {
            .main-image {}
            .second-image {}
          }
          .price__wrapper {
            .price__title {}
            .price__value {}
          }
        }
      }
      .our-services-slider__pagination {
        .swiper-pagination-bullet {}
        .swiper-pagination-bullet-active-next,
        .swiper-pagination-bullet-active-prev {}
      }
    }
  }
}

</style>
