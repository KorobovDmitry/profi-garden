<template>
  <section class="bread-crumbs" :class="[{'bread-crumbs--with-bg': withBG}]">
    <ul class="bread-crumbs__list">
      <li
        v-for="(item, index) in breadCrumbs"
        :key="index"
        class="list__item">
        <nuxt-link
          v-if="!item.current"
          :to="item.uri"
          class="item item__link"
        >{{ item.menutitle || item.pagetitle }}</nuxt-link>

        <p v-else class="item">{{ item.menutitle || item.pagetitle }}</p>

        <p v-if="index < breadCrumbs.length - 1" class="item__separator">/</p>
      </li>
    </ul>

    <h1 class="bread-crumbs__page-title">{{ breadCrumbs[breadCrumbs.length - 1].menutitle || breadCrumbs[breadCrumbs.length - 1].pagetitle }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    withBG: Boolean,
    breadCrumbs: Array
  },
  data () {
    return {}
  },
  mounted () {
    // this.breadCrumbs = 
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.bread-crumbs {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 20px;
  .bread-crumbs__list {
    display: flex;
    flex-wrap: wrap;
    .list__item {
      display: flex;
      .item {
        color: $text;
        font-size: 12px;
        transition: $tr-02;
      }
      .item__separator {
        padding: 0 10px;
        color: $text;
        font-size: 12px;
      }
    }
    .list__item:hover {
      .item__link {
        color: $accentLight;
      }
    }
  }
  .bread-crumbs__page-title {
    margin-top: 10px;
    text-align: center;
    color: $accentLight;
    font-size: 48px;
    font-weight: 600;
  }
}

.bread-crumbs--with-bg {
  background: $background;
}

</style>
