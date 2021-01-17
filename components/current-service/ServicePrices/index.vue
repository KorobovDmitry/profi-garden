<template>
  <section class="service-prices">
    <app-block-title>
      <template v-slot:title>Цены</template>
      <template v-slot:subtitle>Мы лучшие в своем деле!</template>
    </app-block-title>

    <div class="service-prices__list-wrapper">
      <div v-for="(item, index) in pricesList" :key="index">
        <p class="service-prices__list-title">{{ item.name }}</p>
        <ul
          v-for="(item, index) in item.prices"
          :key="index"
          class="service-prices__list"
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
  </section>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  },
  data() {
    return {
      pricesList: [
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.service-prices {
  // border: 1px solid red;
  padding: 80px 0 0 0;
  .service-prices__list-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    .service-prices__list-title {
      margin: 20px auto 0 auto;
      width: 100%;
      max-width: 1400px;
      padding: 15px;
      background: $background;
      text-align: center;
    }
    .service-prices__list {
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

</style>
