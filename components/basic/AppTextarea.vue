<template>
  <div class="app-textarea">
    <textarea
      class="textarea"
      :class="[
        {'textarea--error': error}
      ]"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="changeInputValue()"
    ></textarea>

    <p class="error" :class="[{'error--active': error}]">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: String,
    error: String
  },
  data () {
    return {
      inputValue: this.value || ''
    }
  },
  watch: {
    value (newValue) {
      this.inputValue = newValue
    }
  },
  methods: {
    changeInputValue () {
      this.$emit('valueChanged', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.app-textarea {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  .textarea {
    padding: 15px 30px;
    width: 100%;
    min-height: 110px;
    border: 1px solid $black40;
    border-radius: 30px;
    resize: none;
    transition: $tr-02;
  }
  .textarea:focus {
    border: 1px solid $accentLight;
  }
  .textarea:focus::placeholder {
    opacity: 0;
  }
  .textarea--error {
    border: 1px solid $error;
  }
  .error {
    display: none;
    padding: 5px 30px;
    font-size: 14px;
    color: $error;
  }
  .error--active {
    display: initial;
  }
}

.app-textarea:last-of-type {
  margin-bottom: 0;
}

</style>
