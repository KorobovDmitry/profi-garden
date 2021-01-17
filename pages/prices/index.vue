<template>
  <div class="prices-page">
    <prices-top-image />
    <bread-crumbs :breadCrumbs="breadCrumbs" />
    <main-prices-slider />
    <all-prices />
  </div>
</template>

<script>
// import { mapState } from "vuex";

import PricesTopImage from "@/components/prices/PricesTopImage/index";
import BreadCrumbs from "@/components/common/BreadCrumbs/index";
import MainPricesSlider from "@/components/prices/MainPricesSlider/index";
import AllPrices from "@/components/prices/AllPrices/index";

export default {
  head() {
    return {
      htmlAttrs: {
        lang: "ru-RU",
        amp: true,
      },
      title: "about page",
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
    PricesTopImage,
    BreadCrumbs,
    MainPricesSlider,
    AllPrices,
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
          uri: "/prices",
          pagetitle: "Цены",
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
  // }
}
</script>
