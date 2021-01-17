<template>
  <section class="faqs">
    
    <app-block-title>
      <template v-slot:title>Часто задаваемые вопросы</template>
      <template v-slot:subtitle>Полезно знать</template>
    </app-block-title>

    <ul class="faqs__list">
      <li
        v-for="(item, index) in faqs"
        :key="index"
        class="list__item"
        data-opened="false"
      >
        <div class="question" @click="toggleAnswerVisibility($event)">
          <p class="question__title">{{ item.question }}</p>
          <div class="question__icon"></div>
        </div>
        <div class="answer" :class="[{'answer--opened': item.isOpen}]">
          <p class="answer__text">{{ item.answer }}</p>
        </div>
      </li>
    </ul>

  </section>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  },
  data () {
    return {
      faqs: [
        {
          question: 'Вопрос по озеленению, который часто задают',
          answer: 'Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают '
        },
        {
          question: 'Вопрос по озеленению, который часто задают',
          answer: 'Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают '
        },
        {
          question: 'Вопрос по озеленению, который часто задают',
          answer: 'Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают Ответ на вопрос по озеленению, который часто задают '
        }
      ]
    }
  },
  methods: {
    toggleAnswerVisibility ($event) {
      const QuestionWrapper = $event.target.closest('.list__item')
      const Question = QuestionWrapper.querySelector('.question')
      const Answer = QuestionWrapper.querySelector('.answer')

      if (QuestionWrapper.getAttribute('data-opened') === 'false') {
        const AllQuestionWrappers = document.querySelectorAll('.faqs__list .list__item')
        for (let i = 0; i < AllQuestionWrappers.length; i++) {
          const CurrentQuestion = AllQuestionWrappers[i].querySelector('.question')
          AllQuestionWrappers[i].style.height = CurrentQuestion.getBoundingClientRect(). height + 6 + 'px'
          AllQuestionWrappers[i].setAttribute('data-opened', 'false')
        }

        QuestionWrapper.style.height = Question.getBoundingClientRect().height + Answer.getBoundingClientRect().height + 'px'

        QuestionWrapper.setAttribute('data-opened', 'true')
      } else {
        QuestionWrapper.style.height = Question.getBoundingClientRect().height + 6 + 'px'
        QuestionWrapper.setAttribute('data-opened', 'false')
      }
    }
  },
  mounted () {
    const QuestionWrappers = document.querySelectorAll('.faqs__list .list__item')
    for (let i = 0; i < QuestionWrappers.length; i++) {
      const Question = QuestionWrappers[i].querySelector('.question')
      QuestionWrappers[i].style.height = Question.getBoundingClientRect().height + 6 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.faqs {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 80px 20px;
  background: $background;
  .faqs__list {
    // border: 1px solid red;
    margin: 55px auto 0 auto;
    width: 100%;
    max-width: 1600px;
    .list__item {
      margin-bottom: 20px;
      transition: $tr-02;
      overflow-y: hidden;
      .question {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 20px 30px;
        background: $white;
        box-shadow: 0 4px 5px 2px $black10;
        cursor: pointer;
        .question__title {
          color: $text;
          font-size: 20px;
          transition: $tr-02;
        }
        .question__icon {
          // border: 1px solid red;
          position: relative;
          margin-left: 20px;
          width: 20px;
          height: 20px;
        }
        .question__icon:before {
          position: absolute;
          content: '';
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: $text;
        }
        .question__icon:after {
          position: absolute;
          content: '';
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: $text;
          transition: $tr-02;
        }
      }
      .answer {
        // border: 1px solid red;
        padding: 20px 30px;
        transition: $tr-02;
        .answer__text {
          font-size: 16px;
          line-height: 27px;
        }
      }
    }
    .list__item:last-child {
      margin-bottom: 0;
    }
    .list__item[data-opened="true"] {
      .question {
        .question__title {
          color: $accentLight;
        }
        .question__icon:after {
          top: 50%;
          height: 0;
        }
      }
    }
  }
}

</style>
