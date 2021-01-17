<template>
  <div class="default-layout">
    <app-burger-btn :mobileMenuActive="mobileMenuActive" @click.native="toggleMebileMenuVisibility()" />

    <app-mobile-menu :mobileMenuActive="mobileMenuActive" @closeMobileMenu="toggleMebileMenuVisibility()"/>
    
    <app-header />
    <Nuxt />
    <app-footer />

    <callback-modal :active="callbackModalActive" />

    <notification-modal
      :active="notificationModalActive"
      :success="notificationModalStatus"
      :message="notificationModalMessage"
    />

    <app-order-btn />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppHeader from '@/components/common/AppHeader'
import AppFooter from '@/components/common/AppFooter'

import AppBurgerBtn from '@/components/common/AppBurgerBtn/index'
import AppMobileMenu from '@/components/common/AppMobileMenu/index'
import CallbackModal from '@/components/common/CallbackModal/index'
import AppOrderBtn from '@/components/common/AppOrderBtn/index'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppBurgerBtn,
    AppMobileMenu,
    CallbackModal,
    AppOrderBtn
  },
  data () {
    return {
      mobileMenuActive: false
    }
  },
  computed: {
    ...mapState({
      callbackModalActive: state => state.callbackModalActive,
      notificationModalActive: state => state.notificationModalActive,
      notificationModalMessage: state => state.notificationModalMessage,
      notificationModalStatus: state => state.notificationModalStatus
    })
  },
  methods: {
    toggleMebileMenuVisibility () {
      this.mobileMenuActive = !this.mobileMenuActive
    }
  }
}
</script>
