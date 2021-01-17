<template>
  <div class="about-page">
    <about-top-image />
    <bread-crumbs :breadCrumbs="breadCrumbs"/>
    <company-info />
    <scheme-of-work />
    <feedback />
    <location-map :height="500" />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import AboutTopImage from '@/components/about/AboutTopImage/index'
import BreadCrumbs from '@/components/common/BreadCrumbs/index'
import CompanyInfo from '@/components/about/CompanyInfo/index'
import SchemeOfWork from '@/components/index/SchemeOfWork/index'
import Feedback from '@/components/common/Feedback/index'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru-RU',
        amp: true
      },
      title: 'about page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  components: {
    AboutTopImage,
    BreadCrumbs,
    CompanyInfo,
    SchemeOfWork,
    Feedback
  },
  // async fetch({ store }) {
  //   await store.dispatch('about/fetchPageInfo')
  // },
  data () {
    return {
      breadCrumbs:  [
        {
          uri: "/",
          pagetitle: "Главная",
          menutitle: ""
        },
        {
          uri: "/about",
          pagetitle: "О компании",
          menutitle: "",
          current: true
        }
      ],
    }
  },
  // computed: {
  //   ...mapState({
  //     breadCrumbs: state => state.pageInfo.breadcrumbs
  //   })
  // },
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.about-page {
  background-image: linear-gradient(#e3eaf0 5%, #f8f5f0 15%,  #ffffff 20%, #ffffff);
  background-position: 0 0;
  transition: all 1.5s ease-in-out;
}

</style>
