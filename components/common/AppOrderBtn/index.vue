<template>
  <div class="app-order-btn" @click="setCallbackModalVisibility()">
    <svg-icon name="order" class="app-order-btn__icon"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setCallbackModalVisibility: 'setCallbackModalVisibility',
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.app-order-btn {
  // border: 1px solid red;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: $secondary;
  border-radius: 4px;
  z-index: 9900;
  cursor: pointer;
  .app-order-btn__icon {
    width: 25px;
    height: 25px;
    fill: $white;
  }
}

@include for (1200) {
  .app-order-btn {
    display: flex;
  }
}

</style>
