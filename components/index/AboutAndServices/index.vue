<template>
  <section class="about-and-services">
    <div class="about-and-services__content">
      <about />
      <services />
    </div>
  </section>
</template>

<script>
import About from '@/components/index/AboutAndServices/About/index'
import Services from '@/components/index/AboutAndServices/Services/index'

export default {
  components: {
    About,
    Services
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.about-and-services {
  // border: 1px solid red;
  position: relative;
  padding: 80px 20px 60px 20px;
  background: $background;
  .about-and-services__content {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
  }
}

@include for (1300) {
  .about-and-services {
  .about-and-services__content {
    flex-direction: column;
    align-items: center;
  }
}
}

</style>
