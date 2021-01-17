<template>
  <div class="block-title">
    <p class="title"><slot name="title"></slot></p>
    <p class="subtitle" :class="[{'subtitle--with-shadow': withSubtitleShadow}]"><slot name="subtitle"></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    withSubtitleShadow: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.block-title {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .title {
    color: $textTitle;
    font-size: 18px;
    font-family: $veles;
  }
  .subtitle {
    margin-top: 10px;
    text-transform: uppercase;
    color: $accentLight;
    font-family: $centuryGothic;
    font-size: 36px;
    font-weight: 600;
  }
  .subtitle--with-shadow {
    text-shadow: 0px 1px 0 $white,
                 0px -1px 0 $white,
                 1px 0px 0 $white,
                 -1px 0px 0 $white,
                 1px 1px 0 $white,
                 1px -1px 0 $white,
                 -1px 1px 0 $white,
                 -1px -1px 0 $white;
  }
}

</style>