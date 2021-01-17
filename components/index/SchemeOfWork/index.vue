<template>
  <section class="scheme-of-work">
    <app-block-title>
      <template v-slot:title>Схема работы</template>
      <template v-slot:subtitle>6 шагов к «саду мечты»</template>
    </app-block-title>

    <div class="scheme-of-work__content">
      <p class="info-text">Здесь можно написать Ваш текст какой-нибудь краткий заманчивый про то, что заказчик не ошибся, что выбрал Вашу компанию, и что он скоро получит свой сад мечты, потому что Вы его сделаете и он не нарадуется как круто Вы все сделаете!</p>

      <ul class="work-steps">
        <li class="work-steps__item">
          <img src="images/index/scheme-of-work/step-1.svg" class="item__image">
          <p class="item__title">Звонок</p>
        </li>
        <li class="work-steps__item">
          <img src="images/index/scheme-of-work/step-2.svg" class="item__image">
          <p class="item__title">Выезд на объект</p>
        </li>
        <li class="work-steps__item">
          <img src="images/index/scheme-of-work/step-3.svg" class="item__image">
          <p class="item__title">Консультация и замеры</p>
        </li>
        <li class="work-steps__item">
          <img src="images/index/scheme-of-work/step-4.svg" class="item__image">
          <p class="item__title">Составление плана и сметы</p>
        </li>
        <li class="work-steps__item">
          <img src="images/index/scheme-of-work/step-5.svg" class="item__image">
          <p class="item__title">Подписание договора</p>
        </li>
        <li class="work-steps__item">
          <img src="images/index/scheme-of-work/step-6.svg" class="item__image">
          <p class="item__title">Благоустройство и чудесный сад!</p>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.scheme-of-work {
  display: flex;
  flex-direction: column;
  padding: 80px 20px 25px 20px;
  background: $background;
  .scheme-of-work__content {
    margin: 55px auto 0 auto;
    width: 100%;
    max-width: 1400px;
    .info-text {
      text-align: center;
    }
    .work-steps {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 55px;
      .work-steps__item {
        // border: 1px solid red;
        padding: 10px 20px;
        margin-bottom: 55px;
        width: calc(100% / 6);
        .item__image {
          width: 100%;
        }
        .item__title {
          margin-top: 25px;
          text-align: center;
          font-size: 20px;
        }
      }
    }
  }
}

@include for (1400) {
  .scheme-of-work {
    .scheme-of-work__content {
      .info-text {}
      .work-steps {
        .work-steps__item {
          width: calc(100% / 4);
          .item__image {}
          .item__title {}
        }
      }
    }
  }
}

@include for (1000) {
  .scheme-of-work {
    .scheme-of-work__content {
      .info-text {}
      .work-steps {
        .work-steps__item {
          width: calc(100% / 3);
          .item__image {}
          .item__title {}
        }
      }
    }
  }
}

@include for (700) {
  .scheme-of-work {
    .scheme-of-work__content {
      .info-text {}
      .work-steps {
        .work-steps__item {
          width: calc(100% / 2);
          .item__image {}
          .item__title {}
        }
      }
    }
  }
}

@include for (500) {
  .scheme-of-work {
    .scheme-of-work__content {
      .info-text {}
      .work-steps {
        .work-steps__item {
          width: 100%;
          .item__image {}
          .item__title {}
        }
      }
    }
  }
}

</style>
