<template>
  <div class="informations-page">
    <app-header />
    informations page
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader/index'

import AppFooter from '@/components/common/AppFooter/index'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru-RU',
        amp: true
      },
      title: 'informations page',
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
    AppHeader,

    AppFooter
  },
  async fetch({ store }) {
    await store.dispatch('fetchPageInfo')
  },
  data () {
    return {}
  }
}
</script>
