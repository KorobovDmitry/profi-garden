<template>
  <div ref="OurWorksPage" class="our-works-page">
    <top-image />
    <bread-crumbs :breadCrumbs="breadCrumbs" />
    <works />
    <other-jobs />
    <feedback />
  </div>
</template>

<script>
// import { mapState } from "vuex";

import TopImage from "@/components/our-works/TopImage/index"
import BreadCrumbs from "@/components/common/BreadCrumbs/index"
import Works from "@/components/our-works/Works/index"
import OtherJobs from "@/components/our-works/OtherJobs/index"
import Feedback from "@/components/common/Feedback/index"
import AppFooter from "@/components/common/AppFooter/index"

export default {
  head() {
    return {
      htmlAttrs: {
        lang: "ru-RU",
        amp: true,
      },
      title: "our works page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    }
  },
  components: {
    TopImage,
    BreadCrumbs,
    Works,
    OtherJobs,
    Feedback,
  },
  // async fetch({ store }) {
  //   await store.dispatch("fetchPageInfo");
  // },
  data() {
    return {
      breadCrumbs: [
        {
          uri: "/",
          pagetitle: "Главная",
          menutitle: "",
        },
        {
          uri: "/our-works",
          pagetitle: "Наши работы",
          menutitle: "",
          current: true,
        },
      ],
    };
  },
  // computed: {
  //   ...mapState({
  //     breadCrumbs: state => state.pageInfo.breadcrumbs
  //   }),
  // },
  mounted() {
    setTimeout(() => {
      this.$refs.OurWorksPage.style.backgroundPosition = "0 -1000px";
    }, 600);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vars.scss";
@import "@/assets/scss/mixins.scss";

.our-works-page {
  background-image: linear-gradient(#e3eaf0 5%, #f8f5f0 20%, #f8f5f0);
  background-position: 0 0;
  transition: all 1.5s ease-in-out;
}

</style>
