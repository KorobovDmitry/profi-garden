<template>
  <div class="about">
    <app-block-title>
      <template v-slot:title>О компании</template>
      <template v-slot:subtitle>С заботой о растениях</template>
    </app-block-title>

    <p class="about__text">Растения, как люди… Они хотят солнца, дождя и ветра. Хотят, чтобы их кормили, поили, лечили. Хотят, чтобы их любили… <br><br> Люди, как растения…</p>
    <br>

    <p class="about__author">Анжелика Ефремова</p>
    <p class="about__job-position">Специалист по ландшафтному дизайну</p>

    <nuxt-link to="about" class="about__link">
      <app-button accentDark >О нас</app-button>
    </nuxt-link>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  comments: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.about {
  // border: 1px solid red;
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  .about__text {
    margin-top: 55px;
    max-width: 450px;
    text-align: center;
  }
  .about__author {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
  .about__job-position {
    color: $accentDark;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }
  .about__link {
    display: flex;
    justify-content: center;
    margin-top: 55px;
    margin-bottom: 20px;
  }
}

@include for (1300) {
  .about {
    // border: 1px solid red;
    position: static;

    width: 100%;
    max-width: 700px;
    .about__text {}
    .about__author {}
    .about__job-position {}
    .about__link {
      margin-bottom: 55px;
    }
  }
}

</style>
