<template>
  <div
    class="notification-modal"
    :class="[{'notification-modal--active': active}]"
  >
    <div class="notification-modal__content" :class="[{'notification-modal__content--error': success}]">
      <p class="notification-modal__message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    active: Boolean,
    message: String,
    success: Boolean
  },
  computed: {
    ...mapState({
      notificationModalActive: state => state.notificationModalActive
    })
  },
  watch: {
    active () {
      if (this.notificationModalActive) {
        setTimeout(() => {
          this.setNotificationsVisibility()
        }, 3000)
      }
    }
  },
  methods: {
    ...mapMutations({
      setNotificationsVisibility: 'setNotificationsVisibility'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';


.notification-modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  background: $black10;
  z-index: 9990;
  visibility: hidden;
  opacity: 0;
  transition: $tr-02;
  .notification-modal__content {
    width: 100%;
    max-width: 500px;
    background: $accentLight;
    .notification-modal__message {
      padding: 20px;
      text-align: center;
      color: $white;
    }
  }
  .notification-modal__content--error {
    background: $error;
  }
}

.notification-modal--active {
  opacity: 1;
  visibility: visible;
}

</style>
