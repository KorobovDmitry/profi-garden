<template>
  <footer class="footer">
    <div class="footer__top">
      <ul class="main-menu">
        <li
          v-for="(item, index) in mainNav"
          :key="index"
          class="main-menu__item"
        >
          <nuxt-link
            :to="item.uri"
            no-prefetch
            class="item__link"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>

      <div class="contacts">
        <img src="/images/logo.svg" alt="profi-garden" title="profi-garden" class="logo">

        <p class="contact-item">{{ contacts.address }}</p>
        <a :href="`tel:${contacts.phone.replace(/\D+/g,'')}`" class="contact-item">{{ contacts.phone }}</a>
        <a :href="`mailto:${contacts.email}`" class="contact-item">{{ contacts.email }}</a>

        <div class="social-links">
          <a :href="`https:${contacts.instagram}`" class="link" target="_blank">
            <svg-icon name="instagram" class="link__icon"/>
          </a>
          <a :href="`https:${contacts.vk}`" class="link" target="_blank">
            <svg-icon name="vk" class="link__icon"/>
          </a>
        </div>
      </div>

      <ul class="additional-menu">
        <li
          v-for="(item, index) in additionalNav"
          :key="index"
          class="additional-menu__item"
        >
          <nuxt-link
            :to="item.uri"
            no-prefetch
            class="item__link"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="footer__bottom">
      <!-- <p class="copyright">{{ copyright }}</p> -->
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      mainNav: state => state.mainNav,
      additionalNav: state => state.additionalNav,
      contacts: state => state.contact,
      // copyright: state => state.pageInfo.additional.copy
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.footer {
  // border: 1px solid red;
  background-color: $white;
  background-image: url(/images/footer-bg.jpg);
  background-position: bottom;
  background-repeat: repeat-x;
  .footer__top {
    display: flex;
    justify-content: center;
    padding: 30px 20px;
    border-top: 1px solid $gray;
    border-bottom: 1px solid $gray;
    .main-menu {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 100px;
      width: 100%;
      .main-menu__item {
        flex: 1 1 auto;
        display: flex;
        .item__link {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          color: $text;
          font-size: 14px;
          font-weight: 600;
          transition: $tr-02;
        }
        .item__link:hover {
          color: $accentLight;
        }
      }
    }

    .contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
      width: 100%;
      max-width: 400px;
      border-left: 1px solid $gray;
      border-right: 1px solid $gray;
      .logo {
        margin: 0 auto 10px auto;
        width: 100%;
        max-width: 200px;
      }
      .contact-item {
        padding: 5px 0;
      }
      .social-links {
        margin-top: 10px;
        .link {
          margin-right: 10px;
          .link__icon {
            width: 25px;
            height: 25px;
            fill: $accentDark;
            transition: $tr-02;
          }
          .link__icon:hover {
            fill: $accentLight;
          }
        }
        .link:last-child {
            margin-right: 0;
          }
      }
    }

    .additional-menu {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 100px;
      width: 100%;
      .additional-menu__item {
        flex: 1 1 auto;
        display: flex;
        .item__link {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          color: $text;
          font-size: 14px;
          font-weight: 600;
          transition: $tr-02;
        }
        .item__link:hover {
          color: $accentLight;
        }
      }
    }
  }
  .footer__bottom {
    padding: 20px;
    height: 160px;
    .copyright {
      text-align: center;
      font-size: 12px;
    }
  }
}

@include for (1200) {
  .footer {
    .footer__top {
      .main-menu {
        margin-right: 50px;
        .main-menu__item {
          .item__link {}
        }
      }
      .contacts {
        max-width: 300px;
        .logo {}
        .contact-item {}
        .social-links {}
      }
      .additional-menu {
        margin-left: 50px;
        .additional-menu__item {
          .item__link {}
        }
      }
    }
    .footer__bottom {
      .copyright {}
    }
  }
}

@include for (1000) {
  .footer {
    .footer__top {
      // flex-direction: column;
      // align-items: center;
      flex-wrap: wrap;
      .main-menu {
        // border: 1px solid red;
        order: 1;
        align-items: center;
        padding-bottom: 20px;
        margin-right: 0;
        width: 100%;
        border-bottom: 1px solid $gray;
        .main-menu__item {
          .item__link {
            padding: 7px 0;
          }
        }
      }
      .contacts {
        order: 0;
        // margin-top: 40px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        width: 100%;
        max-width: 100%;
        border: none;
        border-bottom: 1px solid $gray;
        .logo {
          max-width: 180px;
        }
        .contact-item {}
        .social-links {}
      }
      .additional-menu {
        // border: 1px solid red;
        order: 2;
        align-items: center;
        margin-top: 20px;
        margin-left: 0;
        width: 100%;
        // padding-bottom: 20px;
        // border-bottom: 1px solid $gray;
        .additional-menu__item {
          .item__link {
            padding: 7px 0;
          }
        }
      }
    }
    .footer__bottom {
      .copyright {}
    }
  }
}

</style>
