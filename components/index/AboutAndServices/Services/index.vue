<template>
  <div class="services">
    <ul class="services__list">
      <li
        v-for="(item, index) in services"
        :key="index"
        class="list__item"
      >
        <nuxt-link :to="item.uri" class="item__link">
          <img :src="`images/index/services/${index + 1}.jpg`" class="item__bg-image">

          <ul class="item__options-list">
            <li
              v-for="(item, index) in item.serviceWorkSteps"
              :key="index"
              class="options-list__item"
            >{{ item }}</li>
          </ul>

          <p class="item__title">{{ item.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      services: state => state.ourServices
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.services {
  // border: 1px solid red;
  width: 50%;
  .services__list {
    display: flex;
    flex-wrap: wrap;
    .list__item {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      margin-bottom: 20px;
      width: calc(50% - 10px);
      height: 500px;
      // transition: $tr-02;
      overflow: hidden;
      .item__link {
        position: relative;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .item__bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: $tr-02;
          z-index: 1;
        }
        .item__options-list {
          position: relative;
          height: 100%;
          opacity: 0;
          transition: $tr-02;
          padding: 30px 25px;
          z-index: 2;
          .options-list__item {
            position: relative;
            padding: 5px 0 5px 15px;
            color: $white;
            font-style: 15px;
          }
          .options-list__item:before {
            position: absolute;
            content: '';
            top: 19px;
            left: 0;
            width: 4px;
            height: 4px;
            background: $white;
            border-radius: 50%;
          }
        }
        .item__title {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          padding: 20px;
          min-height: 85px;
          background: $white;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          transition: $tr-02;
          z-index: 2;
        }
      }
    }
    .list__item:nth-child(2n) {
      margin-right: 0;
    }
    .list__item:hover {
      .item__link {
        .item__bg-image {
          transform: scale(1.1);
        }
        .item__options-list {
          background: rgba(120, 185, 38, .8);
          opacity: 1;
        }
        .item__title {
          background: $accentLight;
          color: $white;
        }
      }
    }
  }
}

@include for (1300) {
  .services {
    width: 100%;
    max-width: 700px;
    .services__list {
      .list__item {
        .item__link {
          .item__bg-image {}
          .item__options-list {
            .options-list__item {}
          }
          .item__title {}
        }
      }

    }
  }
}

@include for (700) {
  .services {
    width: 100%;
    max-width: 700px;
    .services__list {
      .list__item {
        margin-right: 0;
        width: 100%;
        height: auto;
        min-height: 500px;
        .item__link {
          .item__bg-image {}
          .item__options-list {
            .options-list__item {}
          }
          .item__title {}
        }
      }

    }
  }
}

</style>
