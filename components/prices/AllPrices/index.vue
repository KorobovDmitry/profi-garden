<template>
  <div class="all-prices">
    <app-block-title>
      <template v-slot:title>Все цены</template>
      <template v-slot:subtitle>Мы лучшие в своем деле!</template>
    </app-block-title>

    <p class="all-prices__description">
      «Ателье Зеленных Решений Анжелики Ефремовой» предлагает широкий спектр
      услуг по проектированию, благоустройству, озеленению, реконструкции,
      сезонному обслуживанию, формированию, лечению сада.
    </p>

    <a href="media/price.xlsx" class="all-prices__price-link" target="_blank">
      <app-button accentDark class="dawnload-btn">Скачать прайс</app-button>
    </a>

    <div class="all-prices__list-wrapper">
      <p class="annotation">
        * Основные и дополнительные виды работ, их стоимость и сроки выполнения
        обсуждаются с заказчиком. Для реализации этих работ могут привлекаться
        субподрядчики.
      </p>

      <div v-for="(item, index) in pricesList" :key="index">
        <p class="all-prices__list-title">{{ item.name }}</p>
        <ul
          v-for="(item, index) in item.prices"
          :key="index"
          class="all-prices__list"
        >
          <li class="list__item">
            <div class="item__content">
              <p class="item__title">{{ item.name }}</p>
              <p class="item__value">{{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import AppBlockTitle from "@/components/basic/AppBlockTitle";

export default {
  components: {
    AppBlockTitle,
  },
  data() {
    return {
      pricesList: [
        {
          MIGX_id: "1",
          name: "Предпроектный этап",
          prices: [
            {
              MIGX_id: "1",
              name:
                "Выезд на участок, фотосъёмка, замеры, анализ почвы и инсоляции составление проектного задания совместно с заказчиком ",
              price: "1 час от 1000 ₽",
            },
          ],
        },
        {
          MIGX_id: "2",
          name: "Дизайн-проект участка",
          prices: [
            {
              MIGX_id: "1",
              name:
                "Генеральный план, совмещенный с дендрапланом, карта освещения, ассортиментная ведомость, эскизы или фотоколлаж видовых точек, предварительная смета на растения и предполагаемые работы",
              price: "100 м² х 1500 ₽",
            },
          ],
        },
        {
          MIGX_id: "3",
          name: "Разработка композиции",
          prices: [
            {
              MIGX_id: "1",
              name:
                "Фотоколлаж или эскиз композиции: схема, ассортимент, смета",
              price: "1 м² х 1000 ₽",
            },
            {
              MIGX_id: "2",
              name: "Разработка цветника",
              price: "1 м2 х 1500 р",
            },
          ],
        },
        {
          MIGX_id: "4",
          name: "Авторский надзор",
          prices: [
            {
              name: "Выезд на участок для организации работ силами заказчика",
              price: "1 час х 1500 ₽",
              MIGX_id: 1,
            },
          ],
        },
        {
          MIGX_id: "5",
          name: "Подготовительные работы",
          prices: [
            {
              name: "Уборка строительного мусора",
              price: "100 м² х 1000 ₽",
              MIGX_id: 1,
            },
            {
              name: "Удаление древесной поросли",
              price: "1 м² х 1000 ₽",
              MIGX_id: 2,
            },
            {
              name: "Удаление кустарников с разделкой и корчеванием пней",
              price: "",
              MIGX_id: 3,
            },
            {
              name: "Ø корневой шейки до 0,3 м",
              price: "400 ₽",
              MIGX_id: 4,
            },
            {
              name: "Ø корневой шейки до 0,3 м",
              price: "2000 ₽",
              MIGX_id: 5,
            },
            {
              name: "Ø корневой шейки до 0,3 м",
              price: "3000 ₽",
              MIGX_id: 6,
            },
            {
              name: "",
              price: "",
              MIGX_id: 7,
            },
            {
              name:
                "Удаление многоствольных деревьев с разделкой и корчеванием пней",
              price: "",
              MIGX_id: 8,
            },
            {
              name: "Ø корневой шейки до 0,5 м",
              price: "3000 ₽",
              MIGX_id: 9,
            },
            {
              name: "Ø корневой шейки до 0,7 м",
              price: "4000 ₽",
              MIGX_id: 10,
            },
            {
              name: "",
              price: "",
              MIGX_id: 11,
            },
            {
              name: "Удаление деревьев с разделкой и корчеванием пней",
              price: "",
              MIGX_id: 12,
            },
            {
              name: "от 4 м с Ø ствола 0,2 м",
              price: "3000 ₽",
              MIGX_id: 13,
            },
            {
              name: "от 5 м с Ø ствола 0,3 м",
              price: "4000 ₽",
              MIGX_id: 14,
            },
            {
              name: "от 5 м с Ø ствола 0,5 м",
              price: "6000 ₽",
              MIGX_id: 15,
            },
            {
              name: "",
              price: "",
              MIGX_id: 16,
            },
            {
              name: "Удаление крупномеров по согласованию со спецбригадой",
              price: "от 7000",
              MIGX_id: 17,
            },
            {
              name: "Удаление верхнего слоя грунта (до 15 см)",
              price: "1 м² х 300 ₽",
              MIGX_id: 18,
            },
            {
              name: "Снятие дернины",
              price: "1 м² х от 150 ₽",
              MIGX_id: 19,
            },
            {
              name: "Удаление сорняков",
              price: "1 м² х от 150 ₽",
              MIGX_id: 20,
            },
            {
              name: "Завоз плодородного грунта на участок (1 камаз)",
              price: "от 7000 ₽",
              MIGX_id: 21,
            },
            {
              name: "Разработка грунта (+ коэффициент плотности)",
              price: "1 м³ х от 1000 ₽",
              MIGX_id: 22,
            },
            {
              name:
                "Планировка грунта черновая (в зависимости от уплотн. грунта)",
              price: "1 м² х от 300 ₽",
              MIGX_id: 23,
            },
            {
              name: "Планировка привозным грунтом (до 20 см)",
              price: " 1 м² х от 400 ₽",
              MIGX_id: 24,
            },
            {
              name: "Перекопка",
              price: "1 м² х от 300 ₽",
              MIGX_id: 25,
            },
          ],
        },
        {
          MIGX_id: "6",
          name: "Благоустройство",
          prices: [
            {
              name: "Бетонирование ростверка забора, подпорных стен",
              price: "1 м³ х от 2000 ₽",
              MIGX_id: 1,
            },
            {
              name: "Армированное бетонирование под дорожки/площадки",
              price: "1 м² х от 700 ₽",
              MIGX_id: 2,
            },
            {
              name: "Установка бордюрного камня",
              price: "1 м/п х от 500 ₽",
              MIGX_id: 3,
            },
            {
              name: "Мощение брусчаткой",
              price: "1 м² х от 700 ₽",
              MIGX_id: 4,
            },
            {
              name: "Подпорные стены сухой кладки до 0,5 м",
              price: "1 п/м х 2000 ₽",
              MIGX_id: 5,
            },
            {
              name: " Наружное освещение",
              price: "Индивидуальное предложение",
              MIGX_id: 6,
            },
            {
              name: "Устройство декоративного водоёма/каскада/ручья/фонтана",
              price: "Индивидуальное предложение",
              MIGX_id: 7,
            },
            {
              name: "Устройство автополива",
              price: "Индивидуальное предложение",
              MIGX_id: 8,
            },
            {
              name: "Изготовление беседок/пергол/качелей",
              price: "Индивидуальное предложение",
              MIGX_id: 9,
            },
          ],
        },
        {
          MIGX_id: "7",
          name: "Поиск,закупка и доставка материала",
          prices: [
            {
              name:
                "Поездка в питомник растений (в зависимости от километража)",
              price: "1 час х 1000 ₽",
              MIGX_id: 1,
            },
            {
              name: "Подбор валунов, каменной крошки для отсыпки",
              price: "1 час х 1000 ₽",
              MIGX_id: 2,
            },
            {
              name: "Доставка (в зависимости от тоннажа и удаленности участка)",
              price: "от 700 ₽",
              MIGX_id: 3,
            },
          ],
        },
        {
          MIGX_id: "8",
          name: "Озеленение участка",
          prices: [
            {
              name: "Новый посадочный материал с ЗКС (без гарантии)",
              price: "50 % от стоимости",
              MIGX_id: 1,
            },
            {
              name: "Посадка крупномеров",
              price: "от 20000 ₽",
              MIGX_id: 2,
            },
            {
              name: "Устройство цветников",
              price: "1 м2 х от 2000 ₽",
              MIGX_id: 3,
            },
            {
              name: "Пересадка имеющихся растений",
              price: "",
              MIGX_id: 4,
            },
            {
              name: "Кустарники",
              price: "от 500 ₽",
              MIGX_id: 5,
            },
            {
              name: "Деревья",
              price: "от 1500 ₽",
              MIGX_id: 6,
            },
            {
              name: "Многолетники",
              price: "от 200 ₽",
              MIGX_id: 7,
            },
            {
              name: "Устройство живой изгороди",
              price: "1 м/п от 1000 ₽",
              MIGX_id: 9,
            },
          ],
        },
        {
          MIGX_id: "9",
          name: "Устройство газона",
          prices: [
            {
              name:
                "Посевной: подготовка почвы, распределение семян, землевание, укатка, полив, первое скашивание",
              price: "1 м² х 250 ₽",
              MIGX_id: 1,
            },
            {
              name:
                "Рулонный: выравнивание и укатка почвы, внесение удобрений, укладка рулонов, прикатывание, полив",
              price: "",
              MIGX_id: 2,
            },
            {
              name: "Без стоимости материала",
              price: "1 м² х 220 ₽",
              MIGX_id: 3,
            },
            {
              name: "Со стоимостью материала",
              price: "1 м² х 450 ₽",
              MIGX_id: 4,
            },
          ],
        },
        {
          MIGX_id: "10",
          name: "Элементы ландшафтного благоустройства",
          prices: [
            {
              name: "Затягивание геоспаном (без ст-ти мат-ла)",
              price: "1 м² х 150 ₽",
              MIGX_id: 1,
            },
            {
              name: " Укладка гибкого бордюра (без ст-ти мат-ла)",
              price: "1 м/п х 300 ₽",
              MIGX_id: 2,
            },
            {
              name: "Отсыпка гравием (без ст-ти мат-ла)",
              price: "1 м² х от 400 ₽",
              MIGX_id: 3,
            },
            {
              name: "Отсыпка корой (сосна/лиственница) (без ст-ти мат-ла)",
              price: "1 м² х 200 ₽",
              MIGX_id: 4,
            },
          ],
        },
        {
          MIGX_id: "11",
          name: "Работы по уходу за участком и растениями",
          prices: [
            {
              name:
                "Комлекс садовых мероприятий: прополка, санитарная обрезка, уборка мусора, чистка садовым пылесосом, удобрение, лечение",
              price: "1 чел/час х 700 ₽",
              MIGX_id: 1,
            },
            {
              name:
                "Комплексное обслуживание сада с выездом до 4 раз в месяц без ст-ти материалов,транспортных расходов и амортизации оборудования",
              price: "100 м² х от 2000 ₽",
              MIGX_id: 2,
            },
          ],
        },
        {
          MIGX_id: "12",
          name: "Уход за газоном",
          prices: [
            {
              name: "Покос",
              price: "100 м² х от 1000 ₽",
              MIGX_id: 1,
            },
            {
              name: "Стрижка каймы газона вручную",
              price: "1 п/м х 100 ₽",
              MIGX_id: 2,
            },
            {
              name: "Аэрация",
              price: "100 м² х от 1000 ₽",
              MIGX_id: 3,
            },
            {
              name: "Вычесывание",
              price: "100 м² х от 2000 ₽",
              MIGX_id: 4,
            },
            {
              name: "Внесение удобрениия",
              price: "100 м² х 400 ₽",
              MIGX_id: 5,
            },
            {
              name: "Удаление сорняков химическим способом",
              price: "100 м² х 500 ₽",
              MIGX_id: 6,
            },
            {
              name: "Реставрация: выравнивание, подсев, землевание",
              price: "1 м² х от 300 ₽",
              MIGX_id: 7,
            },
            {
              name: "Проведение лечебных мероприятий",
              price: "100 м² х от 800 ₽",
              MIGX_id: 8,
            },
          ],
        },
        {
          MIGX_id: "13",
          name: "Уход за цветниками",
          prices: [
            {
              name: "Прополка, чистка, стрижка, обрезка, удобрение, лечение",
              price: "1 м² х от 800 ₽",
              MIGX_id: 1,
            },
          ],
        },
        {
          MIGX_id: "14",
          name: "Уход за деревьями и кустарниками",
          prices: [
            {
              name: "Формирование живой изгороди",
              price: "",
              MIGX_id: 1,
            },
            {
              name: "",
              price: "1 п/м высота до 0,5 м х от 250 ₽",
              MIGX_id: 2,
            },
            {
              name: "",
              price: "1 п/м высота до 1 м х от 800 ₽",
              MIGX_id: 3,
            },
            {
              name: "",
              price: "1 п/м высота до 1,5 м х от 1500 ₽",
              MIGX_id: 4,
            },
            {
              name: "",
              price: "",
              MIGX_id: 5,
            },
            {
              name: "Формирование лиственных кустарников",
              price: "",
              MIGX_id: 6,
            },
            {
              name: "",
              price: "до 0,5 м 150 ₽",
              MIGX_id: 7,
            },
            {
              name: "",
              price: "до 1 м х 300 ₽",
              MIGX_id: 8,
            },
            {
              name: "",
              price: "до 1,5 м х 500 ₽",
              MIGX_id: 9,
            },
            {
              name: "",
              price: "до 2 м х 1000 ₽",
              MIGX_id: 10,
            },
            {
              name: "",
              price: "",
              MIGX_id: 20,
            },
            {
              name: "Формирование лиственных девревьев",
              price: "",
              MIGX_id: 11,
            },
            {
              name: "",
              price: "2 м х 1500 ₽",
              MIGX_id: 12,
            },
            {
              name: "",
              price: "4 м х 4000 ₽",
              MIGX_id: 13,
            },
            {
              name: "",
              price: "5 м х от 5000 ₽",
              MIGX_id: 14,
            },
            {
              name: "",
              price: "",
              MIGX_id: 21,
            },
            {
              name: "Формирующая стрижка туй",
              price: "",
              MIGX_id: 15,
            },
            {
              name: "",
              price: "до 1 м х 400 ₽",
              MIGX_id: 16,
            },
            {
              name: "",
              price: "до 2 м х 2000 ₽",
              MIGX_id: 17,
            },
            {
              name: "",
              price: "до 3 м х 3000 ₽",
              MIGX_id: 18,
            },
            {
              name: "",
              price: "до 5 м х 6000 ₽",
              MIGX_id: 19,
            },
            {
              name: "",
              price: "",
              MIGX_id: 22,
            },
            {
              name: "Формирование елей",
              price: "",
              MIGX_id: 23,
            },
            {
              name: "",
              price: "до 3 м х от 4000 ₽",
              MIGX_id: 24,
            },
            {
              name: "",
              price: "до 4 м х от 5000 ₽",
              MIGX_id: 25,
            },
            {
              name: "",
              price: " до 5 м х от 6000 ₽",
              MIGX_id: 26,
            },
            {
              name: "",
              price: " до 6 м х от 8000 ₽",
              MIGX_id: 27,
            },
            {
              name: "",
              price: "",
              MIGX_id: 28,
            },
            {
              name: "Формирование сосен",
              price: "",
              MIGX_id: 29,
            },
            {
              name: "",
              price: "до 1 м х 800 ₽",
              MIGX_id: 30,
            },
            {
              name: "",
              price: "до 2 м х 2000 ₽",
              MIGX_id: 31,
            },
            {
              name: "",
              price: "до 3 м х 4000 ₽",
              MIGX_id: 32,
            },
            {
              name: "",
              price: "до 4 м х 5000 ₽",
              MIGX_id: 33,
            },
            {
              name: "",
              price: "",
              MIGX_id: 34,
            },
            {
              name: "Изменение формы растения",
              price: "По договорённости",
              MIGX_id: 35,
            },
            {
              name: "Обработка лечебными препаратами",
              price: "1 раст. х от 300 ₽",
              MIGX_id: 36,
            },
            {
              name: "Обработка гербицидами (без ст-ти средства)",
              price: "1 сот х от 1000 ₽",
              MIGX_id: 37,
            },
            {
              name: "",
              price: "",
              MIGX_id: 38,
            },
            {
              name:
                "Накладные расходы: затраты, связанные с созданием условий, необходимых для выполнения работ",
              price: "15 % от общей ст-ти работ",
              MIGX_id: 39,
            },
            {
              name: "Амортизация оборудования и инструмента",
              price: "10 % от общей ст-ти работ",
              MIGX_id: 40,
            },
            {
              name:
                "Транспортные расходы (фактические расходы по доставке работников, материалов, оборудования и т.д.)",
              price: "от киллометража и тоннажа",
              MIGX_id: 41,
            },
          ],
        },
      ],
      fullPriceLink: "assets/medias/prices/price.xlsx",
    };
  },
  computed: {
    ...mapState({
      // pricesList: (state) => state.pageInfo.TVs.priceCategories,
      // fullPriceLink: (state) => state.pageInfo.TVs.fullPriceLink,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";
@import "@/assets/scss/mixins.scss";

.all-prices {
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  background: $background;
  .all-prices__description {
    margin: 55px auto;
    width: 100%;
    max-width: 700px;
    text-align: center;
    font-size: 16px;
    line-height: 27px;
  }
  .all-prices__price-link {
    align-self: center;
    .dawnload-btn {
    }
  }

  .all-prices__list-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    .annotation {
      margin: 0 auto;
      width: 100%;
      max-width: 1400px;
      color: $red;
      font-size: 12px;
      line-height: 27px;
    }
    .all-prices__list-title {
      margin: 20px auto 0 auto;
      width: 100%;
      max-width: 1400px;
      padding: 15px;
      background: $white;
      text-align: center;
    }
    .all-prices__list {
      .list__item {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        transition: $tr-02;
        .item__content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          padding: 10px;
          width: 100%;
          max-width: 1400px;
          border-bottom: 1px solid $gray;
          transition: $tr-02;
          .item__title {
            width: 100%;
            min-height: 21px;
            transition: $tr-02;
          }
          .item__value {
            width: 100%;
            max-width: 400px;
            color: $accentDark;
            font-weight: 600;
            transition: $tr-02;
          }
        }
      }
      .list__item:hover {
        background: $accentLight;
        .item__content {
          border-bottom: 1px solid transparent;
          .item__title {
            color: $white;
          }
          .item__value {
            color: $white;
          }
        }
      }
    }
  }
}

@include for(1440) {
  .all-prices {
    padding: 80px 20px;
    .all-prices__description {
    }
    .all-prices__dawnload-btn {
    }

    .all-prices__list-wrapper {
      .annotation {
      }
      .all-prices__list-title {
      }
      .all-prices__list {
        .list__item {
          .item__content {
            .item__title {
            }
            .item__value {
            }
          }
        }
      }
    }
  }
}
</style>
