<template>
  <button
    class="app-button"
    :class="[
      {'app-button--accent-light': accentLight},
      {'app-button--accent-dark': accentDark},
      {'app-button--secondary': secondary},
      {'app-button--white': white},
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    accentLight: Boolean,
    accentDark: Boolean,
    secondary: Boolean,
    white: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.app-button {
  padding: 20px 45px;
  background: transparent;
  text-transform: uppercase;
  color: $accentLight;
  font-family: $centuryGothic;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid $accentLight;
  border-radius: 30px;
  transition: $tr-02;
}

.app-button:hover {
  box-shadow: $btnHover;
}

.app-button:active {
  box-shadow: $btnActive;
}

.app-button--accent-light {
  color: $accentLight;
  border: 2px solid $accentLight;
}
.app-button--accent-light:hover {
  background: $accentLight;
  color: $white;
}
.app-button--accent-dark {
  color: $accentDark;
  border: 2px solid $accentDark;
}
.app-button--accent-dark:hover {
  background: $accentDark;
  color: $white;
}
.app-button--secondary {
  color: $secondary;
  border: 2px solid $secondary;
}
.app-button--secondary:hover {
  background: $secondary;
  color: $white;
}

.app-button--white {
  color: $white;
  border: 2px solid $white;
}

</style>
