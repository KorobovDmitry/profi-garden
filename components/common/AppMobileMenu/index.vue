<template>
  <div class="app-mobile-menu" :class="[{'app-mobile-menu--active': mobileMenuActive}]">

    <div class="navigation">
      <ul class="navigation__list">
        <li class="list__item" @click="closeMobileMenu()">
          <nuxt-link
            to="/"
            no-prefetch
            class="item__link"
          >Главная</nuxt-link>
        </li>
        <li
          v-for="(menuItem, index) in mainNav"
          :key="index"
          class="list__item"
          @click="closeMobileMenu()"
        >
          <nuxt-link
            :to="menuItem.uri"
            no-prefetch
            class="item__link"
          >
            {{ menuItem.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    mobileMenuActive: Boolean
  },
  computed: {
    ...mapState({
      mainNav: state => state.mainNav,
    })
  },
  methods: {
    closeMobileMenu () {
      this.$emit('closeMobileMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.app-mobile-menu {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: calc(-100% - 10px);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: $white;
  box-shadow: 0 0 10px 1px $black40;
  transition: $tr-04;
  z-index: 9998;
  .navigation {
    // border: 1px solid red;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .navigation__list {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 80px 0;
      .list__item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 10px;
        .item__link {
          padding: 5px;
          text-align: center;
          // color: $accentLight;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
}

.app-mobile-menu--active {
  left: 0;
}

</style>
