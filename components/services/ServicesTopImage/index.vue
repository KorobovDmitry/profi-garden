<template>
  <section class="services-top-image">
    <div class="gradient"></div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.services-top-image {
  // border: 1px solid red;
  position: relative;
  height: 250px;
  background: url(/images/services/services-top-image.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, $background 10%, rgba(9,9,121,0) 90%);
  }
}

</style>
