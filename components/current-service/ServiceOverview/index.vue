<template>
  <section class="service-overview">
    <div class="service-overview__content">
      <div class="top-text">
        <p><b>Озелене́ние</b> — совокупность работ, связанных с созданием и использованием растительных насаждений; в более широком смысле — работы, направленные на улучшение экологического состояния окружающей среды и благоустройство территории.</p>
        <p>В услугу озеленения входят:</p>
        <ul class="list">
          <li>Уборка территории</li>
          <li>Планировка грунта</li>
          <li>Удаление нежелательной растительности</li>
          <li>Устройство автополива</li>
          <li>Поиск и закупка растений и иного материала</li>
          <li>Посадки древесных культур</li>
          <li>Разбивка цветников</li>
          <li>Отсыпка и мульчирование</li>
          <li>Устройство газона</li>
          <li>Генеральная уборка участка</li>
        </ul>
      </div>

      <div class="service-overview__slider">
        <div class="service-overview__slider-container">
          <div class="swiper-wrapper">
              <div v-for="(item, index) in 3" :key="index" class="swiper-slide">
                <img class="image" :src="`/images/current-service/${index + 1}.jpg`">
              </div>
          </div>

          <div class="service-overview__slider-pagination"></div>

          <div class="service-overview__slider-button-next">
            <svg-icon name="arrow-next" class="icon" />
          </div>
          <div class="service-overview__slider-button-prev">
            <svg-icon name="arrow-prev" class="icon" />
          </div>
        </div>
      </div>

      <div class="bottom-text">
        <p>Одним из этапов благоустройства загородного дома является озеленение прилежащей к нему территории. Плодовый сад и ягодные кустарники высаживаются как можно раньше, чтобы получать с них урожай уже через 2-3 года. А вот посадка декоративной растительности проводится после разбивки участка на зоны, прокладки дорожек и подготовки почвы.</p>
        <p>Крупные деревья придают ландшафту объемность, защищают территорию от ветра и пыли, а летом под ними можно укрыться от солнца. Под их кронами нередко устраиваются уютные места отдыха. Лучше всего использовать низкие или среднерослые породы деревьев с компактными кронами: рябина обыкновенная, ясень плакучий, акация желтая, клен зеленокорый, боярышник колючий.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css';

export default {
  mounted () {
    const swiper = new Swiper('.service-overview__slider-container', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.service-overview__slider-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        }
      },
      navigation: {
        nextEl: '.service-overview__slider-button-next',
        prevEl: '.service-overview__slider-button-prev',
      },
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.service-overview {
  // border: 1px solid red;
  padding: 0 20px 60px 20px;
  .service-overview__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    .top-text, .bottom-text {
      margin: 0 auto;
      width: 100%;
      max-width: 750px;
    }
    p {
      margin-bottom: 20px;
      text-align: center;
      font-size: 16px;
      line-height: 27px;
    }

    .service-overview__slider {
      // border: 1px solid red;
      position: relative;
      display: flex;
      justify-content: center;
        .service-overview__slider-container {
        // border: 1px solid red;
        align-self: center;
        margin-top: 35px;
        margin-bottom: 55px;
        max-width: 1400px;
        overflow: hidden;

        .swiper-wrapper {
          // border: 1px solid red;
          .swiper-slide {
            // border: 1px solid red;
            box-sizing: border-box;
            .image {
              width: 100%;
              height: auto;
              max-height: 600px;
              object-fit: contain;
              object-position: center;
            }
          }
        }

        .service-overview__slider-pagination {
          // border: 1px solid red;
          align-self: center;
          margin: 50px auto 0 auto;
          transform: translateX(0);
          .swiper-pagination-bullet {
            background: $accentLight;
          }
          .swiper-pagination-bullet-active-next,
          .swiper-pagination-bullet-active-prev {
            opacity: .4;
          }
        }

        .service-overview__slider-button-next,.service-overview__slider-button-prev {
          // border: 1px solid red;
          position: absolute;
          top: calc(50% - 70px);
          padding: 10px;
          z-index: 8000;
          cursor: pointer;
          .icon {
            width: 20px;
            height: 20px;
          }
        }
        .service-overview__slider-button-next {
          right: 0;
        }
        .service-overview__slider-button-prev {
          left: 0;
        }
      }
    }
    
  }
}

</style>
