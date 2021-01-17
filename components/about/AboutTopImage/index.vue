<template>
  <section ref="AboutTopImage" class="about-top-image">
    <img src="/images/about/top-block-bg.png" class="about-top-image__bg" />
  </section>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$refs.AboutTopImage.style.height = 0
      this.$refs.AboutTopImage.style.marginBottom = 0;
    }, 600)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";
@import "@/assets/scss/mixins.scss";

.about-top-image {
  // border: 1px solid red;
  position: relative;
  margin-bottom: -250px;
  width: 100%;
  height: 740px;
  z-index: 2;
  transition: all 1.5s ease-in-out;
  pointer-events: none;
  overflow: hidden;
  will-change: height, margin-bottom;
  .about-top-image__bg {
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
