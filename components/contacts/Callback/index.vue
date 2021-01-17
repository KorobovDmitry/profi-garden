<template>
  <section class="callback">
    <div class="callback__content">

      <div class="callback__contacts">
        <div class="contacts__item">
          <svg-icon name="location" class="item__icon"/>
          <p class="item__value">{{ contacts.address }}</p>
        </div>
        <div class="contacts__item">
          <svg-icon name="phone" class="item__icon"/>
          <a :href="`tel:${contacts.phone.replace(/\D+/g,'')}`" class="item__value">{{ contacts.phone }}</a>
        </div>
        <div class="contacts__item">
          <svg-icon name="mail" class="item__icon"/>
          <a :href="`mailto:${contacts.email}`" class="item__value">{{ contacts.email }}</a>
        </div>

        <div class="contacts__social-links">
          <a :href="`https:${contacts.instagram}`" class="social-link" target="_blank">
            <svg-icon name="instagram" class="link__icon"/>
          </a>
          <a :href="`https:${contacts.vk}`" class="social-link" target="_blank">
            <svg-icon name="vk" class="link__icon"/>
          </a>
        </div>
      </div>

      <form class="callback__form" @submit.prevent>
        <app-input-text :value="formInputs.name" placeholder="Ваше имя *" error="" @valueChanged="formInputs.name = $event"/>
        <app-input-text :value="formInputs.phone" placeholder="Номер телефона *" error="" @valueChanged="formInputs.phone = $event"/>
        <app-input-text :value="formInputs.email" placeholder="E-mail" error="" @valueChanged="formInputs.email = $event"/>

        <app-textarea :value="formInputs.message" placeholder="Комментарий" @valueChanged="formInputs.message = $event"></app-textarea>

        <app-button secondary class="form__action-btn" @click.native="sendForm()">Отправить</app-button>
      </form>

    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
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
        // pageUrl: this.$router.path
      }
    }
  },
  computed: {
    ...mapState({
      contacts: state => state.contact
    }),
  },
  methods: {
    ...mapMutations({
      setNotificationsVisibility: 'setNotificationsVisibility',
      setNotificationModalMessage: 'setNotificationModalMessage'
    }),
    async sendForm () {
      try {
        console.log(this.formInputs);
        const sendFormAnswer = await this.$axios.$post('https://pg.icmy.ru/api/Forms/', this.formInputs)
        // console.log(sendFormAnswer)
        if (sendFormAnswer.success) {
          this.formInputs = {
            formId: 'order',
            name: '',
            phone: '',
            email: '',
            message: '',
            // pageUrl: this.$router.path
          }
          this.setNotificationModalMessage({status: 'success', message: 'Форма успешно отправлена. Мы свяжемся с вами в ближайшее время.'})
          this.setNotificationsVisibility()
        } else {
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

.callback {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  background: $background;
  .callback__content {
    // border: 1px solid red;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    .callback__contacts {
      display: flex;
      flex-direction: column;
      padding-right: 20px;
      width: 100%;
      max-width: calc(100% / 3);
      .contacts__item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .item__icon {
          width: 25px;
          height: 25px;
          fill: $secondary;
        }
        .item__value {
          margin-left: 20px;
          font-size: 20px;
        }
      }
      .contacts__social-links {
        margin-top: 20px;
        .social-link {
          .link__icon {
            width: 40px;
            height: 40px;
            fill: $accentDark;
          }
        }
        .social-link:first-child {
          margin-right: 20px;
        }
      }
    }
    .callback__form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: calc(100% / 3);
      .form__action-btn {
        align-self: center;
        margin-top: 30px;
      }
    }
  }
}

@include for (1200) {
  .callback {
    position: static;
    .callback__content {
      .callback__contacts {
        align-items: center;
        max-width: 50%;
        .contacts__item {
          .item__icon {}
          .item__value {}
        }
        .contacts__social-links {
          .social-link {
            .link__icon {}
          }
        }
      }
      .callback__form {
        max-width: 50%;
        .form__action-btn {}
      }
    }
  }
}

@include for (800) {
  .callback {
    .callback__content {
      flex-direction: column;
      .callback__contacts {
        padding-right: 0;
        max-width: 100%;
        .contacts__item {
          .item__icon {}
          .item__value {
            font-size: 18px;
          }
        }
        .contacts__social-links {
          .social-link {
            .link__icon {}
          }
        }
      }
      .callback__form {
        margin-top: 80px;
        max-width: 100%;
        .form__action-btn {}
      }
    }
  }
}

</style>
