<template>
  <div class="contacts-page">
    <bread-crumbs :breadCrumbs="breadCrumbs"/>
    <div class="location-map-and-callback">
      <location-map :height="750" />
      <callback />
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import BreadCrumbs from '@/components/common/BreadCrumbs/index';
import LocationMap from '@/components/common/LocationMap/index'
import Callback from '@/components/contacts/Callback/index'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru-RU',
        amp: true
      },
      title: 'contacts page',
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
    BreadCrumbs,
    LocationMap
  },
  // async fetch({ store }) {
  //   await store.dispatch('contacts/fetchPageInfo')
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
          uri: "/contacts",
          pagetitle: "Контакты",
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

.location-map-and-callback {
  height: 1350px;
}

@include for (800) {
  .location-map-and-callback {
    height: auto;
  }
}

</style>
