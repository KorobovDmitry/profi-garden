<template>
  <section class="feedback">

    <app-block-title withSubtitleShadow>
      <template v-slot:title>
        Обратная связь
      </template>
      <template v-slot:subtitle>
        Связаться с нами легко
      </template>
    </app-block-title>

    <form class="feedback__form" @submit.prevent>
      <app-input-text :value="formInputs.name" placeholder="Ваше имя *" error="" @valueChanged="formInputs.name = $event"/>
        <app-input-text :value="formInputs.phone" placeholder="Номер телефона *" error="" @valueChanged="formInputs.phone = $event"/>
        <app-input-text :value="formInputs.email" placeholder="E-mail" error="" @valueChanged="formInputs.email = $event"/>

        <app-textarea :value="formInputs.message" placeholder="Комментарий" @valueChanged="formInputs.message = $event"></app-textarea>

      <app-button secondary class="form__action-btn" @click.native="sendForm()">Отправить</app-button>
    </form>


    <div class="notice-line">
      <div class="notice-line__content">
        <p class="info-text">С помощью этой формы вы можете:</p>

        <div class="info-item">
          <svg-icon name="question" class="icon" />
          <p class="text">Задать вопрос</p>
        </div>
        <div class="info-item">
          <svg-icon name="order" class="icon" />
          <p class="text">Оформить заявку</p>
        </div>
        <div class="info-item">
          <svg-icon name="consultation" class="icon" />
          <p class="text">Получить <br> консультацию</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppBlockTitle,
    AppInputText,
    AppTextarea,
    AppButton
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

.feedback {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0 0;
  background-image: url(/images/index/feedback-bg.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .feedback__form {
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    padding: 0 20px;
    width: 100%;
    max-width: 600px;
    .form__action-btn {
      align-self: center;
      margin-top: 55px;
    }
  }
  .notice-line {
    display: flex;
    margin-top: 80px;
    padding: 20px;
    width: 100%;
    background: $secondary;
    color: $white;
    .notice-line__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;
      max-width: 1400px;
      .info-text {
        margin-right: 20px;
        font-size: 20px;
        font-weight: 600;
      }
      .info-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .icon {
          margin-right: 20px;
          width: 50px;
          height: 50px;
          fill: $white;
        }
        .text {
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .info-item:last-child {
        margin-right: 0;
      }
    }
  }
}

@include for (1300) {
  .feedback {
    .feedback__form {
      .form__action-btn {}
    }
    .notice-line {
      .notice-line__content {
        flex-direction: column;
        .info-text {
          margin-bottom: 20px;
          text-align: center;
        }
        .info-item {
          margin-right: 0;
          margin-bottom: 20px;
          .icon {
            width: 30px;
          }
          .text {
            font-size: 18px;
            width: 260px;
            br {
              display: none;
            }
          }
        }
      }
    }
  }
}

@include for (400) {
  .feedback {
    .feedback__form {
      .form__action-btn {}
    }
    .notice-line {
      .notice-line__content {
        .info-text {}
        .info-item {
          .icon {
            margin-right: 10px;
            width: 30px;
          }
          .text {
            font-size: 16px;
            width: 230px;
          }
        }
      }
    }
  }
}

</style>
