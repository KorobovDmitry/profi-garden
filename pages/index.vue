<template>
  <div class="index-page">
    <main-slider />
    <about-and-services />
    <our-services-slider />
    <random-faq />
    <our-works-slider />
    <scheme-of-work />
    <feedback />
    <location-map :height="500" />
  </div>
</template>

<script>
import MainSlider from '@/components/index/MainSlider/index'
import AboutAndServices from '@/components/index/AboutAndServices/index'
import OurServicesSlider from '@/components/index/OurServicesSlider/index'
import RandomFaq from '@/components/index/RandomFaq/index'
import OurWorksSlider from '@/components/index/OurWorksSlider/index'
import SchemeOfWork from '@/components/index/SchemeOfWork/index'
import Feedback from '@/components/common/Feedback/index'
import LocationMap from '@/components/common/LocationMap/index'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ru-RU',
        amp: true
      },
      title: 'index page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description'
        }
      ]
    }
  },
  components: {
    MainSlider,
    AboutAndServices,
    OurServicesSlider,
    RandomFaq,
    OurWorksSlider,
    SchemeOfWork,
    Feedback,
    LocationMap
  },
  // async fetch({ store }) {
  //   await store.dispatch('fetchPageInfo')
  // },
}
</script>
