<template>
  <section ref="PricesTopImage" class="top-image">
    <img src="/images/prices/prices-top-image.png" class="top-image__bg">
  </section>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$refs.PricesTopImage.style.height = 0
      this.$refs.PricesTopImage.style.marginBottom = 0;
    }, 600)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.top-image {
  // border: 1px solid red;
  position: relative;
  margin-bottom: -350px;
  width: 100%;
  height: 750px;
  z-index: 2;
  transition: all 1.5s ease-in-out;
  pointer-events: none;
  overflow: hidden;
  will-change: height, margin-bottom;
  .top-image__bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    pointer-events: none;
  }
}

</style>
