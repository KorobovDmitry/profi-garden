<template>
  <section class="main-slider">

    <div class="main-slider__container">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in 4" :key="index" class="swiper-slide">
              <img src="images/index/main-slide-01.jpg" class="swiper-slide__image">

              <div class="info">
                <div class="info__top">
                  <p style="text-align: center; font-size: 43px; font-weight: 600;">При заключении</p>
                  <p style="text-align: center; font-size: 64px; font-weight: 600; text-transform: uppercase;">договора на</p>
                </div>

                <div class="info__bottom">
                  <p style="color: #ff7e00; font-size: 53px; font-weight: 600; text-transform: uppercase;">экспресс проект в подарок</p>
                  <nuxt-link to="/" class="action-btn">Хочу подарок!</nuxt-link>
                </div>
              </div>
            </div>
        </div>

        <div class="main-slider__button-prev">
          <svg-icon name="arrow-prev" class="icon" />
        </div>
        <div class="main-slider__button-next">
          <svg-icon name="arrow-next" class="icon" />
        </div>

        <div class="main-slider__pagination"></div>
    </div>

  </section>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css';

export default {
  data () {
    return {}
  },
  mounted () {
    var mySwiper = new Swiper('.main-slider__container', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },

      navigation: {
        nextEl: '.main-slider__button-next',
        prevEl: '.main-slider__button-prev',
      },

      pagination: {
        el: '.main-slider__pagination',
        type: 'progressbar',
      },
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.main-slider {
  // border: 1px solid red;
  overflow: hidden;
  .main-slider__container {
    position: relative;
    height: 700px;
    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        .swiper-slide__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .info {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          .info__top {
            position: absolute;
            top: -100%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 850px;
            color: $white;
            transition: $tr-06;
            transition-delay: .1s;
          }
          .info__bottom {
            position: absolute;
            bottom: -100%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 850px;
            color: $white;
            transition: $tr-06;
            transition-delay: .1s;
            .action-btn {
              margin-top: 45px;
              padding: 20px 45px;
              background: $white;
              text-transform: uppercase;
              color: $accentDark;
              font-size: 18px;
              font-weight: 600;
              color: $accentDark;
              border: 2px solid $accentDark;
              border-radius: 30px;
              transition: $tr-02;
            }
            .action-btn:hover {
              box-shadow: $btnHover;
            }
            .action-btn:active {
              box-shadow: $btnActive;
            }
          }
        }
      }
      .swiper-slide-active {
        .info {
          .info__top {
            top: 115px;
          }
          .info__bottom {
            bottom: 120px;
          }
        }
      }
    }

    .main-slider__button-prev, .main-slider__button-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 30px;
      background: $white80;
      z-index: 20;
      cursor: pointer;
      .icon {
        width: 20px;
        height: 20px;
      }
    }
    .main-slider__button-prev {
      left: 0;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    .main-slider__button-next {
      right: 0;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    .main-slider__pagination {
      // border: 1px solid red;
      position: absolute;
      top: calc(100% - 4px);
      bottom: 0;
      width: 100%;
      height: 4px;
      z-index: 2;
      .swiper-pagination-progressbar-fill {
        background: $accentLight;
      }
    }
  }
}

@include for (1200) {
  .main-slider {
    display: none;
  }
}

</style>
