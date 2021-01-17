<template>
  <section class="works">
    <div class="works__content">
      <ul class="works__list">
        <li
          v-for="(item, index) in works"
          :key="index"
          class="list__item">
          <nuxt-link :to="item.link" class="item__link">
            <img :src="item.image" :alt="item.title" class="link__image">
            <p class="link__title">{{ item.title }}</p>
            <p class="link__square">{{ item.square }} м<sup>2</sup></p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      works: [
        {
          link: '/our-works/1',
          image: '/images/our-works/1.jpg',
          title: 'Участок у дома Куницына',
          square: '120'
        },
        {
          link: '/our-works/1',
          image: '/images/our-works/1.jpg',
          title: 'Участок у дома Куницына',
          square: '120'
        },
        {
          link: '/our-works/1',
          image: '/images/our-works/1.jpg',
          title: 'Участок у дома Куницына',
          square: '120'
        },
        {
          link: '/our-works/1',
          image: '/images/our-works/1.jpg',
          title: 'Участок у дома Куницына',
          square: '120'
        },
        {
          link: '/our-works/1',
          image: '/images/our-works/1.jpg',
          title: 'Участок у дома Куницына',
          square: '120'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.works {
  display: flex;
  padding: 80px 20px 60px 20px;
  background: $white;
  .works__content {
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    .works__list {
      display: flex;
      flex-wrap: wrap;
      .list__item {
        // border: 1px solid red;
        margin-right: 20px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        width: calc(100% / 3 - 14px);
        cursor: pointer;
        .item__link {
          position: relative;
          display: flex;
          flex-direction: column;
          .link__image {
            background: $white;
            width: 100%;
            height: auto;
            transition: $tr-02;
          }
          .link__title {
            margin-top: 20px;
            text-align: center;
            color: $text;
            font-size: 20px;
            transition: $tr-02;
          }
          .link__square {
            margin-top: 10px;
            text-align: center;
            color: $accentDark;
            font-size: 18px;
            font-weight: 600;
            transition: $tr-02;
            sup {
              top: -0.1em;
              vertical-align: super;
            }
          }
        }
      }
      .list__item:nth-child(3n) {
        margin-right: 0;
      }
      .list__item:hover {
        .item__link {
          .link__image {
            opacity: .4;
          }
          .link__title {
            color: $accentLight;
          }
          .link__square {
            color: $accentLight;
          }
        }
      }
    }
  }
}

@include for (1000) {
  .works {
    .works__content {
      .works__list {
        .list__item {
          width: calc(100% / 2 - 10px);
          .item__link {
            .link__image {}
            .link__title {}
            .link__square {}
          }
        }
        .list__item:nth-child(3n) {
          margin-right: 20px;
        }
        .list__item:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}

@include for (700) {
  .works {
    .works__content {
      .works__list {
        .list__item {
          width: 100%;
          .item__link {
            .link__image {}
            .link__title {}
            .link__square {}
          }
        }
        .list__item:nth-child(2n) {
          margin-right: 20px;
        }
        .list__item:nth-child(1n) {
          margin-right: 0;
        }
      }
    }
  }
}

</style>
