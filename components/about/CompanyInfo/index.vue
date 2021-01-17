<template>
  <section class="company-info">
    <div class="company-info__decription">
      <p>Наша деятельность всецело связана со стабилизированными цветами, растениями и мхами. Это не просто наша работа! Прежде всего, это любимое дело, способ самовыражения, возможность дарить другим людям положительные эмоции, делая их жизнь ярче. Благодаря уникальным технологиям, даже самые холодные зимы и морозная погода не помешают украшать вашу обитель живыми цветами из цветущего лета.</p>

      <p>Стабилизированные растения – не искусственные и не сухоцветы. Это натуральные растения, у которых природный сок замещен особым раствором на основе глицерина. Ваш интерьер будет наполнен настоящей частичкой живой природы, способной улучшить ваше настроение.</p>

      <p>Компания – эксперт в области комплексного озеленения комнатными растениями и стабилизированным мхом. Мы предлагаем натуральную, экологически чистую продукцию, соответствующую европейским стандартам, для оформления офисов, банков, гостиниц, торговых центров, автосалонов, ресепшн, витрин, выставочных стендов, конференц-залов, интерьеров квартир, коттеджей, любых помещений общественного назначения.</p>
    </div>

    <div class="company-info__person">
      <img class="person__image" src="/images/about/person.jpg">

      <div class="person__info">
        <p class="info__author">Анжелика Ефремова</p>
        <p class="info__job-position">Руководитель, специалист по ландшафтному дизайну</p>
        <p class="info__text">Растения, как люди… Они хотят солнца, дождя и ветра. Хотят, чтобы их кормили, поили, лечили. Хотят, чтобы их юбили…</p>
        <p class="info__text">Люди, как растения… </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      aboutText: state => state.pageInfo.resource.content
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.company-info {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 20px 80px 20px;
  .company-info__decription {
    margin: 0 auto;
    width: 100%;
    max-width: 750px;
    p {
      margin-bottom: 20px;
      text-align: center;
      font-size: 16px;
      line-height: 27px;
    }
  }
  .company-info__person {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    margin: 20px auto 0 auto;
    width: 100%;
    max-width: 1200px;
    .person__image {
      // border: 1px solid red;
      margin: 50px;
      width: 100%;
      max-width: 550px;
      transform: rotate(-5deg);
      border: 3px solid $white;
      box-shadow: 0 10px 20px 0 $black20;
    }
    .person__info {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      max-width: 550px;
      .info__author {
        margin-top: 80px;
        text-align: center;
        font-size: 27px;
        font-weight: 600;
      }
      .info__job-position {
        margin: 10px 0 40px 0;
        text-align: center;
        color: $accentDark;
        font-size: 14px;
        font-weight: 600;
      }
      .info__text {
        text-align: center;
        margin-bottom: 20px;
        line-height: 27px;
      }
      .info__text:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@include for (1200) {
  .company-info {
    .company-info__decription {
      p {}
    }
    .company-info__person {
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
      .person__image {
        margin: 0;
      }
      .person__info {
        padding: 0;
        .info__author {
          margin-top: 50px;
        }
        .info__job-position {}
        .info__text {}
      }
    }
  }
}

</style>
