<template>
  <div class="burger-btn" :class="[{'burger-btn--active': mobileMenuActive}]">
    <div class="btn"></div>
  </div>
</template>

<script>
export default {
  props: {
    mobileMenuActive: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.burger-btn {
  // border: 1px solid red;
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: $accentLight;
  border-radius: 4px;
  z-index: 9999;
  cursor: pointer;
  .btn {
    position: absolute;
    top: 50%;
    left: 5px;
    width: calc(100% - 10px);
    height: 3px;
    background: $white;
    transition: $tr-02;
  }
  .btn::before, .btn::after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 3px;
    background: $white;
    transition: $tr-02;
  }
  .btn::before {
    top: -10px;
  }
  .btn::after {
    top: 10px;
  }
}

.burger-btn--active {
  .btn {
    height: 0;
  }
  .btn::before {
    top: 0;
    transform: rotate(-45deg);
  }
  .btn::after {
    top: 0;
    transform: rotate(45deg);
  }
}

@include for (1200) {
  .burger-btn {
    display: block;
  }
}

</style>
