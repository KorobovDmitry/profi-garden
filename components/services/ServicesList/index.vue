<template>
  <section class="services-list">
    <div class="services-list__content">
      <ul class="services">
        <li
          v-for="(item, index) in ourServices"
          :key="index"
          class="services__item"
        >
          <nuxt-link :to="item.uri" class="item__link">
            <img
              :src="`/images/index/services/${index + 1}.jpg`"
              class="item__bg-image"
            />

            <ul class="item__options-list">
              <li
                v-for="(element, index) in item.serviceWorkSteps"
                :key="index"
                class="options-list__item"
              >{{ element }}</li>
            </ul>

            <p class="item__title">{{ item.title }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // data() {
  //   return {
  //     servicesList: [
  //       {
  //         resource: {
  //           id: 3,
  //           pagetitle: "Идея",
  //           longtitle: "",
  //           description: "",
  //           alias: "ideya",
  //           published: true,
  //           parent: 2,
  //           content: "",
  //           deleted: false,
  //           publishedon: 0,
  //           menutitle: "",
  //           uri: "services/ideya",
  //         },
  //         TVs: {
  //           serviceWorkSteps: [
  //             'Выезд на участок',
  //             'Фото и видеосъёмка',
  //             'Замеры',
  //             'Анализ почвы и иинсаляции',
  //             'Составление проектного задания',
  //             'Проект, эскизы видовых точек',
  //             'Дендроплан',
  //             'Карта освещения',
  //             'Ассортиментная ведомость',
  //             'Предварительная смета материалов и работ',
  //           ],
  //         },
  //       },
  //       {
  //         resource: {
  //           id: 10,
  //           pagetitle: "Благоустройство",
  //           longtitle: "",
  //           description: "",
  //           alias: "blagoustrojstvo",
  //           published: true,
  //           parent: 2,
  //           content: "",
  //           deleted: false,
  //           publishedon: 0,
  //           menutitle: "",
  //           uri: "services/blagoustrojstvo",
  //         },
  //         TVs: {
  //           serviceWorkSteps: [
  //             'Уборка территории от мусора, поросли, сорняка',
  //             'Разбивка участка',
  //             'Осуществление всех строительных мероприятий (бассейны, площадки, дорожки, тропинки, беседки, перголы, водоёмы, подпорные стены)'
  //           ],
  //         },
  //       },
  //       {
  //         resource: {
  //           id: 11,
  //           pagetitle: "Озеленение",
  //           longtitle: "",
  //           description: "",
  //           alias: "ozelenenie",
  //           published: true,
  //           parent: 2,
  //           content: "",
  //           deleted: false,
  //           publishedon: 0,
  //           menutitle: "",
  //           uri: "services/ozelenenie",
  //         },
  //         TVs: {
  //           serviceWorkSteps: [
  //             'Уборка территории',
  //             'Планировка грунта',
  //             'Удаление нежелательной растительности',
  //             'Устройство автополива',
  //             'Поиск и закупка растений и иного материала',
  //             'Посадки древесных культур',
  //             'Разбивка цветников',
  //             'Отсыпка и мульчирование',
  //             'Устройство газона',
  //             'Генеральная уборка участка'
  //           ],
  //         },
  //       },
  //       {
  //         resource: {
  //           id: 12,
  //           pagetitle: "Реконструкция или ремонт сада",
  //           longtitle: "",
  //           description: "",
  //           alias: "rekonstrukcziya-ili-remont-sada",
  //           published: true,
  //           parent: 2,
  //           content: "",
  //           deleted: false,
  //           publishedon: 0,
  //           menutitle: "",
  //           uri: "services/rekonstrukcziya-ili-remont-sada",
  //         },
  //         TVs: {
  //           serviceWorkSteps: [
  //             'Пересадка или удаление растений',
  //             'Придание новых форм разросшимся растениям путём стрижки, обрезки',
  //             'Формирование плодовых деревьев',
  //             'Ремонт и обновление газона',
  //             'Лечебные мероприятия'
  //           ],
  //         },
  //       },
  //       {
  //         resource: {
  //           id: 13,
  //           pagetitle: "Уход за садом",
  //           longtitle: "",
  //           description: "",
  //           alias: "uxod-za-sadom",
  //           published: true,
  //           parent: 2,
  //           content: "",
  //           deleted: false,
  //           publishedon: 0,
  //           menutitle: "",
  //           uri: "services/uxod-za-sadom",
  //         },
  //         TVs: {
  //           serviceWorkSteps: [
  //             'Весенняя уборка (чистка цветников, вычёсывание и аэрация газона, санитарная стрижка растений)',
  //             'Кошение и удобрение газона, удаление сорняков',
  //             'Отслеживание болезней и лечение',
  //             'Удобрение растений',
  //             'Прополка цветников',
  //             'Формирующая стрижка живой изгороди и отдельных растений',
  //             'Подготовка сада к зиме'
  //           ],
  //         },
  //       },
  //       {
  //         resource: {
  //           id: 14,
  //           pagetitle: "Интерьерное озеленение",
  //           longtitle: "",
  //           description: "",
  //           alias: "interernoe-ozelenenie",
  //           published: true,
  //           parent: 2,
  //           content: "",
  //           deleted: false,
  //           publishedon: 0,
  //           menutitle: "",
  //           uri: "services/interernoe-ozelenenie",
  //         },
  //         TVs: {
  //           serviceWorkSteps: [
  //             'Устройство экостен из живых растений с возможностью устройства автополива.',
  //             'Озеленение стабилизированными растениями (фитостены, деревья, композиции в кашпо и вазах)'
  //           ],
  //         },
  //       },
  //     ]
  //   }
  // },
  computed: {
    ...mapState({
      ourServices: state => state.ourServices
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";
@import "@/assets/scss/mixins.scss";

.services-list {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 20px 60px 20px;
  background: $background;
  .services-list__content {
    // border: 1px solid red;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    .services {
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      .services__item {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-bottom: 20px;
        width: calc(100% / 3 - 14px);
        height: 520px;
        overflow: hidden;
        .item__link {
          position: relative;
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          .item__bg-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: $tr-02;
            z-index: 1;
          }
          .item__options-list {
            position: relative;
            padding: 30px 25px;
            height: 100%;
            opacity: 0;
            transition: $tr-02;
            z-index: 2;
            .options-list__item {
              position: relative;
              padding: 5px 0 5px 15px;
              color: $white;
              font-style: 15px;
            }
            .options-list__item:before {
              position: absolute;
              content: "";
              top: 19px;
              left: 0;
              width: 4px;
              height: 4px;
              background: $white;
              border-radius: 50%;
            }
          }
          .item__title {
            position: relative;
            margin-top: auto;
            padding: 20px;
            background: $white;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            transition: $tr-02;
            z-index: 2;
          }
        }
      }
      .services__item:nth-child(3n) {
        margin-right: 0;
      }
      .services__item:hover {
        .item__link {
          .item__bg-image {
            transform: scale(1.1);
          }
          .item__options-list {
            background: rgba(120, 185, 38, 0.8);
            opacity: 1;
          }
          .item__title {
            background: $accentLight;
            color: $white;
          }
        }
      }
    }
  }
}

@include for(1100) {
  .services-list {
    .services-list__content {
      .services {
        .services__item {
          width: calc(100% / 2 - 10px);
          .item__link {
            .item__bg-image {
            }
            .item__options-list {
              .options-list__item {
              }
            }
            .item__title {
            }
          }
        }
        .services__item:nth-child(3n) {
          margin-right: 20px;
        }
        .services__item:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}

@include for(800) {
  .services-list {
    .services-list__content {
      .services {
        .services__item {
          width: 100%;
          .item__link {
            .item__bg-image {
            }
            .item__options-list {
              .options-list__item {
              }
            }
            .item__title {
            }
          }
        }
        .services__item:nth-child(2n) {
          margin-right: 20px;
        }
        .services__item:nth-child(1n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
