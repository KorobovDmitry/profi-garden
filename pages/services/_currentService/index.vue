<template>
  <div class="service-page">
    <top-image />
    <bread-crumbs :breadCrumbs="breadCrumbs" />
    <service-overview />
    <order />
    <service-prices />
    <faqs />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import TopImage from '@/components/current-service/TopImage/index'
import BreadCrumbs from '@/components/common/BreadCrumbs/index'
import ServiceOverview from '@/components/current-service/ServiceOverview/index'
import Order from '@/components/current-service/Order/index'
import ServicePrices from '@/components/current-service/ServicePrices/index'
import Faqs from '@/components/current-service/Faqs/index'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru-RU',
        amp: true
      },
      title: 'current service page',
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
    TopImage,
    BreadCrumbs,
    ServiceOverview,
    Order,
    ServicePrices,
    Faqs
  },
  // async fetch({ store }) {
  //   await store.dispatch('fetchPageInfo')
  // },
  data () {
    return {
      breadCrumbs: [
        {
          uri: "/",
          pagetitle: "Главная",
          menutitle: ""
        },
        {
          uri: "/services",
          pagetitle: "Услуги",
          menutitle: ""
        },
        {
          uri: "/services/ozelenenie",
          pagetitle: "Озеленение",
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
