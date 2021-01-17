<template>
  <section class="work-overview">
    <div class="work-overview__content">
      <div class="work-overview__slider">

        <div class="work-overview__gallery-top">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in 10" :key="index" class="swiper-slide">
              <img :src="`/images/current-work/${index + 1}.jpg`" class="image">
            </div>
          </div>

          <div class="work-overview__slider-button-next">
            <svg-icon name="arrow-next" class="icon" />
          </div>
          <div class="work-overview__slider-button-prev">
            <svg-icon name="arrow-prev" class="icon" />
          </div>
        </div>
        <div class="work-overview__gallery-thumbs">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in 10" :key="index" class="swiper-slide">
              <img :src="`/images/current-work/${index + 1}.jpg`" class="thumb-image">
            </div>
          </div>
        </div>

      </div>

      <div class="work-overview__description">
        <p>Работа над проектом длилась два месяца. Общая площадь 120 м<sup>2</sup>.</p>
        <p>В итоге получился небольшой участок для отдыха, который включает в себя небольшой дворик площадью 20 м<sup>2</sup>, беседка и газон. Главной особенностью участка является беседка с видом на озеро, которую окружают растения и цветы.</p>
        <p>Теперь у дома можно не только прогуливаться по каменным дорожкам, проводить пикники на зеленном газоне, но и устраивать веселые вечера с друзьями или романтические свидания.</p>
      </div>

      <app-button
        accentDark
        class="order-btn"
        @click.native="setCallbackModalVisibility()"
      >+ Хочу такой же!</app-button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

import AppButton from '@/components/basic/AppButton'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    AppButton
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      setCallbackModalVisibility: 'setCallbackModalVisibility',
    }),
  },
  mounted () {
    const galleryThumbs = new Swiper('.work-overview__gallery-thumbs', {
      spaceBetween: 20,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 4
        }
      }
    })
    const galleryTop = new Swiper('.work-overview__gallery-top', {
      // spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      thumbs: {
        swiper: galleryThumbs,
      },
      navigation: {
        nextEl: '.work-overview__slider-button-next',
        prevEl: '.work-overview__slider-button-prev',
      },
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.work-overview {
  // border: 1px solid red;
  padding: 0 20px 80px 20px;
  background: $background;
  .work-overview__content {
    
      position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    // max-width: 1400px;
    .work-overview__slider {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 650px;
      overflow: hidden;
      .work-overview__gallery-top {
        .swiper-wrapper {
          .swiper-slide {
            display: flex;
            .image {
              flex: 1 1 auto;
              width: 100%;
              height: 500px;
              object-fit: cover;
              object-position: center;
            }
          }
        }

        .work-overview__slider-button-next, .work-overview__slider-button-prev {
          // border: 1px solid red;
          position: absolute;
          top: calc(50% - 330px);
          padding: 10px;
          z-index: 8000;
          cursor: pointer;
          .icon {
            width: 20px;
            height: 20px;
          }
        }
        .work-overview__slider-button-next {
          right: 0;
        }
        .work-overview__slider-button-prev {
          left: 0;
        }
      }
      .work-overview__gallery-thumbs {
        margin-top: 25px;
        .swiper-wrapper {
          display: flex;
          .swiper-slide {
            display: flex;
            background: $black;
            cursor: pointer;
            .thumb-image {
              flex: 1 1 auto;
              height: 140px;
              object-fit: cover;
              object-position: center;
              opacity: .5;
              transition: $tr-02;
            }
          }
          .swiper-slide-thumb-active {
            .thumb-image {
              opacity: 1;
            }
          }
        }
      }
    }
    .work-overview__description {
      display: flex;
      flex-direction: column;
      margin-top: 55px;
      width: 100%;
      max-width: 700px;
      text-align: center;
      p {
        margin-bottom: 20px;
        line-height: 27px;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
    .order-btn {
      margin-top: 55px;
    }
  }
}

@include for (700) {
  .work-overview {
    .work-overview__content {
      .work-overview__slider {
        .work-overview__gallery-top {
          .swiper-wrapper {
            .swiper-slide {
              .image {
                // height: auto;
              }
            }
          }
          .work-overview__slider-button-next, .work-overview__slider-button-prev {
            display: flex;
            align-items: center;
            justify-content: center;
            top: calc(50% - 350px);
            width: 50px;
            height: 50px;
            background: $white80;
            border-radius: 50%;
            .icon {
              fill: $accentDark;
            }
          }
          .work-overview__slider-button-next {
            right: 10px;
          }
          .work-overview__slider-button-prev {
            left: 10px;
          }
        }
        .work-overview__gallery-thumbs {
          .swiper-wrapper {
            .swiper-slide {
              .thumb-image {
                // height: auto;
              }
            }
          }
        }
      }
      .work-overview__description {}
      .order-btn {}
    }
  }
}

@include for (400) {
  .work-overview {
    .work-overview__content {
      .work-overview__slider {
        .work-overview__gallery-top {
          .swiper-wrapper {
            .swiper-slide {
              .image {
                // height: auto;
              }
            }
          }
          .work-overview__slider-button-next, .work-overview__slider-button-prev {
            top: calc(50% - 380px);
            .icon {}
          }
        }
        .work-overview__gallery-thumbs {
          .swiper-wrapper {
            .swiper-slide {
              .thumb-image {
                // height: auto;
              }
            }
          }
        }
      }
      .work-overview__description {}
      .order-btn {}
    }
  }
}

@include for (400) {
  .work-overview {
    .work-overview__content {
      .work-overview__slider {
        .work-overview__gallery-top {
          .swiper-wrapper {
            .swiper-slide {
              .image {
                // height: auto;
              }
            }
          }
          .work-overview__slider-button-next, .work-overview__slider-button-prev {
            top: calc(50% - 400px);
            .icon {}
          }
        }
        .work-overview__gallery-thumbs {
          .swiper-wrapper {
            .swiper-slide {
              .thumb-image {
                // height: auto;
              }
            }
          }
        }
      }
      .work-overview__description {}
      .order-btn {}
    }
  }
}

@include for (330) {
  .work-overview {
    .work-overview__content {
      .work-overview__slider {
        .work-overview__gallery-top {
          .swiper-wrapper {
            .swiper-slide {
              .image {
                // height: auto;
              }
            }
          }
          .work-overview__slider-button-next, .work-overview__slider-button-prev {
            top: calc(50% - 440px);
            .icon {}
          }
        }
        .work-overview__gallery-thumbs {
          .swiper-wrapper {
            .swiper-slide {
              .thumb-image {
                // height: auto;
              }
            }
          }
        }
      }
      .work-overview__description {}
      .order-btn {}
    }
  }
}

</style>
