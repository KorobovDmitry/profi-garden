<template>
  <section class="order">
    <p class="order__block-title">Заказать озеленение прямо сейчас!</p>

    <app-button white @click.native="setCallbackModalVisibility()">Заказать</app-button>
  </section>
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

.order {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 0 auto;
  padding: 40px;
  // width: 100%;
  // max-width: 1400px;
  color: $white;
  background: url(/images/current-service/order-block-bg.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .order__block-title {
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
    // font-family: $veles;
    font-size: 37px;
    font-weight: 600;
  }
}

</style>
