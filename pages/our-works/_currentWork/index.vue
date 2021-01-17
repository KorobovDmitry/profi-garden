<template>
  <div class="work-page">
    <bread-crumbs :breadCrumbs="breadCrumbs" withBG />
    <work-overview />
    <works />
    <feedback />
  </div>
</template>

<script>
// import { mapState } from "vuex";

import BreadCrumbs from "@/components/common/BreadCrumbs/index"
import WorkOverview from "@/components/current-work/WorkOverview/index"
import Works from "@/components/current-work/Works/index"
import Feedback from "@/components/common/Feedback/index"
import AppFooter from "@/components/common/AppFooter/index"

export default {
  head() {
    return {
      htmlAttrs: {
        lang: "ru-RU",
        amp: true,
      },
      title: "work page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  components: {
    BreadCrumbs,
    WorkOverview,
    Works,
    Feedback
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
        },
        {
          uri: "/our-works/1",
          pagetitle: "Участок у дома Куницына",
          menutitle: "",
          current: true,
        },
      ],
    }
  },
  // computed: {
  //   ...mapState({
  //     breadCrumbs: state => state.pageInfo.breadcrumbs
  //   }),
  // },
}
</script>
