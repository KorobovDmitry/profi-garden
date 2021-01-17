<template>
  <section class="random-faq">
    <p class="block-title">Совет от специалиста</p>

    <p class="advice">Формирование и обрезка плодовых и декоративных деревьев
начинается с первого года посадки.</p>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.random-faq {
  // border: 1px solid red;
  // margin: 0 auto;
  padding: 40px;
  // width: 100%;
  // max-width: 1400px;
  color: $white;
  background: url(/images/index/random-faqs-bg.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .block-title {
    text-align: center;
    font-family: $veles;
    font-size: 37px;
  }
  .advice {
    text-align: center;
    margin-top: 30px;
    font-size: 18px;
  }
}

@include for (400) {
  .random-faq {
    .block-title {
      font-size: 30px;
    }
    .advice {}
  }
}

</style>
