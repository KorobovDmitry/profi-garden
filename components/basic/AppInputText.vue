<template>
  <div class="app-input-text">
    <input
      type="text"
      class="input"
      :class="[
        {'input--error': error}
      ]"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="changeInputValue()"
    >
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

.app-input-text {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  .input {
    padding: 15px 30px;
    width: 100%;
    border: 1px solid $black40;
    border-radius: 30px;
    transition: $tr-02;
  }
  .input:focus {
    border: 1px solid $accentLight;
  }
  .input:focus::placeholder {
    opacity: 0;
  }
  .input--error {
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

.app-input-text:last-child {
  margin-bottom: 0;
}

</style>
