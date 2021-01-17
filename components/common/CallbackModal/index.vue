<template>
  <div
    class="callback-modal"
    :class="[{'callback-modal--active': active}]"
    @mousedown="setCallbackModalVisibility()"
  >
    <div class="callback-modal__content" @mousedown.stop>
      <p class="callback-modal__title">Отправить заявку</p>

      <form class="callback-modal__form" @submit.prevent>
        <app-input-text :value="formInputs.name" placeholder="Ваше имя *" error="" @valueChanged="formInputs.name = $event"/>
        <app-input-text :value="formInputs.phone" placeholder="Номер телефона *" error="" @valueChanged="formInputs.phone = $event"/>
        <app-input-text :value="formInputs.email" placeholder="E-mail" error="" @valueChanged="formInputs.email = $event"/>

        <app-textarea :value="formInputs.message" placeholder="Комментарий" @valueChanged="formInputs.message = $event"></app-textarea>

        <app-button secondary class="form__action-btn" @click.native="sendForm()">Отправить</app-button>
      </form>

      <div
        class="callback-modal__close-btn"
        @click="setCallbackModalVisibility()"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  props: {
    active: Boolean
  },
  components: {
    AppInputText,
    AppTextarea
  },
  data () {
    return {
      formInputs: {
        formId: 'order',
        name: '',
        phone: '',
        email: '',
        message: '',
        pageUrl: this.$router.path
      }
    }
  },
  methods: {
    ...mapMutations({
      setCallbackModalVisibility: 'setCallbackModalVisibility',
      setNotificationsVisibility: 'setNotificationsVisibility',
      setNotificationModalMessage: 'setNotificationModalMessage'
    }),
    async sendForm () {
      try {
        console.log(this.formInputs);
        const sendFormAnswer = await this.$axios.$post('https://pg.icmy.ru/api/Forms/', this.formInputs)
        // console.log(sendFormAnswer)
        if (sendFormAnswer.success === 'true') {
          this.formInputs = {
            formId: 'order',
            name: '',
            phone: '',
            email: '',
            message: '',
            // pageUrl: this.$router.path
          }
          this.setCallbackModalVisibility()
          this.setNotificationModalMessage({status: 'success', message: 'Форма успешно отправлена. Мы свяжемся с вами в ближайшее время.'})
          this.setNotificationsVisibility()
        } else if (sendFormAnswer.success === 'false') {
          this.setNotificationModalMessage({status: 'error', message: 'Ошибка при заполнении формы. Заполните все поля правильно.'})
          this.setNotificationsVisibility()
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.callback-modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  background: $black10;
  z-index: 9990;
  visibility: hidden;
  opacity: 0;
  transition: $tr-02;
  .callback-modal__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 30px;
    width: calc(100% - 20px);
    max-width: 550px;
    max-height: calc(100vh - 40px);
    background: $white90;
    border-radius: 30px;
    box-shadow: 0 5px 10px 2px $black20;
    overflow: auto;
    .callback-modal__title {
      margin-top: 25px;
      text-transform: uppercase;
      text-align: center;
      color: $accentLight;
      font-size: 36px;
      font-weight: 600;
    }
    .callback-modal__form {
      display: flex;
      flex-direction: column;
      margin-top: 55px;
      .form__action-btn {
        align-self: center;
        margin-top: 55px;
      }
    }
    .callback-modal__close-btn {
      // border: 1px solid red;
      position: absolute;
      top: 30px;
      right: 30px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .callback-modal__close-btn:before, .callback-modal__close-btn:after {
      position: absolute;
      content: '';
      top: 9px;
      left: 0;
      width: 100%;
      height: 1px;
      background: $text;
    }
    .callback-modal__close-btn:before {
      transform: rotate(45deg);
    }
    .callback-modal__close-btn:after {
      transform: rotate(-45deg);
    }
  }
}

.callback-modal--active {
  visibility: visible;
  opacity: 1;
}

@include for (600) {
  .callback-modal {
    .callback-modal__content {
      padding: 30px 20px;
      .callback-modal__title {
        font-size: 30px;
      }
      .callback-modal__form {
        .form__action-btn {}
      }
      .callback-modal__close-btn {}
    }
  }
}

</style>
