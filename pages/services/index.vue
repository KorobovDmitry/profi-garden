<template>
  <div class="services-page">
    <services-top-image />
    <bread-crumbs :breadCrumbs="breadCrumbs" withBG />
    <services-list />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import ServicesTopImage from '@/components/services/ServicesTopImage/index'
import BreadCrumbs from '@/components/common/BreadCrumbs/index'
import ServicesList from '@/components/services/ServicesList/index'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru-RU',
        amp: true
      },
      title: 'services page',
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
    ServicesTopImage,
    BreadCrumbs,
    ServicesList
  },
  // async fetch({ store }) {
  //   await store.dispatch('services/fetchPageInfo')
  // },
  data () {
    return {
      breadCrumbs: [
        {
          uri: "/",
          pagetitle: "Главная",
          menutitle: "",
        },
        {
          uri: "/prices",
          pagetitle: "Услуги",
          menutitle: "",
          current: true,
        },
      ]
    }
  },
  // computed: {
  //   ...mapState({
  //     breadCrumbs: state => state.pageInfo.breadcrumbs
  //   })
  // },
}
</script>
