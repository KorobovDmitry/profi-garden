<template>
  <header class="header">
    <div ref="headerTop" class="header__top">
      <div class="top__logo">
        <nuxt-link to="/" class="logo__link">
          <img src="/images/logo.svg" class="logo__image" />
        </nuxt-link>
      </div>
      <div class="top__contacts">
        <div class="contacts__item">
          <svg-icon name="phone" class="item__icon"/>
          <a :href="`tel:${contacts.phone.replace(/\D+/g,'')}`" class="item__value">{{ contacts.phone }}</a>
        </div>
        <div class="contacts__item">
          <svg-icon name="mail" class="item__icon"/>
          <a :href="`mailto:${contacts.email}`" class="item__value">{{ contacts.email }}</a>
        </div>
        <div class="contacts__item">
          <svg-icon name="location" class="item__icon"/>
          <p class="item__value">{{ contacts.address }}</p>
        </div>
      </div>

      <div class="top__social-links">
        <a :href="`https:${contacts.instagram}`" class="social-link" target="_blank">
          <svg-icon name="instagram" class="link__icon"/>
        </a>
        <a :href="`https:${contacts.vk}`" class="social-link" target="_blank">
          <svg-icon name="vk" class="link__icon"/>
        </a>
      </div>

      <button class="top__order-btn" @click="setCallbackModalVisibility()">
          <svg-icon name="order" class="action-btn__icon"/>
          <span class="action-btn__text">Оформить заявку</span>
      </button>
    </div>

    <div ref="headerNavigations" class="header__navigations-wrapper"
      :class="[{'header__navigations-wrapper--fixed': fixedMainMenu}]"
    >
      <nav class="header__navigations">
        <ul class="main-menu">
          <li
            v-for="(menuItem, index) in mainNav"
            :key="index"
            class="main-menu__item"
          >
            <nuxt-link
              v-if="!menuItem.childs"
              :to="menuItem.uri"
              no-prefetch
              class="item__link"
              active-class="item__link--active"
            >
              {{ menuItem.title }}
            </nuxt-link>

            <div v-else class="item__submenu-wrapper">
              <nuxt-link :to="menuItem.uri" class="submenu__parent">
                <svg-icon name="services" class="icon"/>
                <p class="title">{{ menuItem.title }}</p>
              </nuxt-link>

              <ul class="submenu__list">
                <li
                  v-for="(subMenuItem, index) in menuItem.childs"
                  :key="index"
                  class="list__item"
                >
                  <nuxt-link :to="subMenuItem.uri" no-prefetch class="link">
                    {{ subMenuItem.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <button class="action-btn" @click="setCallbackModalVisibility()">
          <svg-icon name="order" class="action-btn__icon"/>
          <span class="action-btn__text">Оформить заявку</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      fixedMainMenu: false
    };
  },
  computed: {
    ...mapState({
      mainNav: state => state.mainNav,
      contacts: state => state.contact
    }),
  },
  methods: {
    ...mapMutations({
      setCallbackModalVisibility: 'setCallbackModalVisibility',
    }),
    toggleMainMenuFixed () {
      const HeaderTop = this.$refs.headerTop
      const HeaderTopRect = HeaderTop.getBoundingClientRect()
      const HeaderNavigationsRect = this.$refs.headerNavigations.getBoundingClientRect()

      if (HeaderTopRect.bottom <= 0) {
        this.fixedMainMenu = true
        HeaderTop.style.marginBottom = HeaderNavigationsRect.height + 'px'
      } else {
        this.fixedMainMenu = false
        HeaderTop.style.marginBottom = ''
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.toggleMainMenuFixed)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.toggleMainMenuFixed)
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.header {
  // border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  background: $white;
  z-index: 8000;
  .header__top {
    // border: 1px solid red;
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    max-width: 1440px;
    .top__logo {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      .logo__link {
        // border: 1px solid red;
        .logo__image {
          // border: 1px solid red;
          width: 100%;
          max-width: 230px;
        }
      }
    }
    .top__contacts {
      flex: 1 1 auto;
      display: flex;
      padding: 20px 0;
      .contacts__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        width: 100%;
        max-width: 260px;
        border-right: 1px solid $gray;
        .item__icon {
          width: 25px;
          height: 25px;
          fill: $secondary;
        }
        .item__value {
          margin-top: 15px;
          white-space: nowrap;
        }
      }
      .contacts__item:first-child {
        margin-left: auto;
      }
    }
    .top__social-links {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 220px;
      .social-link {
        margin-right: 20px;
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
      .social-link:last-child {
        margin-right: 0;
      }
    }
    .top__order-btn {
      display: none;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      width: 100%;
      max-width: 220px;
      padding: 10px;
      background: $secondary;
      border: none;
      .action-btn__icon {
        margin-right: 10px;
        width: 18px;
        height: 18px;
        fill: $white;
      }
      .action-btn__text {
        text-transform: uppercase;
        color: $white;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  .header__navigations-wrapper {
    // border: 1px solid red;
    display: flex;
    background: $white;
    border-top: 1px solid $gray;
    border-bottom: 1px solid $gray;
    .header__navigations {
      display: flex;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      max-width: 1440px;
    }
    .main-menu {
      // border: 1px solid red;
      display: flex;
      .main-menu__item {
        // border: 1px solid red;
        display: flex;
        .item__link {
          // border: 1px solid red;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          padding: 0 15px;
          font-weight: 600;
          transition: $tr-02;
        }
        .item__link:hover {
          color: $accentLight;
        }
        .item__link--active {
          color: $accentLight;
        }
        .item__submenu-wrapper {
          // border: 1px solid red;
          position: relative;
          flex: 1 1 auto;
          display: flex;
          border-left: 1px solid $gray;
          border-right: 1px solid $gray;
          .submenu__parent {
            // border: 1px solid red;
            position: relative;
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            padding: 0 15px;
            background: $white;
            z-index: 2;
            .icon {
              margin-right: 10px;
              width: 20px;
              height: 20px;
              fill: $text;
            }
            .title {
              font-size: 16px;
              font-weight: 600;
              transition: $tr-02;
            }
          }
          .nuxt-link-active {
            .icon {
              fill: $accentLight;
            }
            .title {
              color: $accentLight;
            }
          }
          .submenu__list {
            // border: 1px solid red;
            position: absolute;
            top: 100%;
            left: -1px;
            width: calc(100% + 2px);
            background: $white;
            border: 1px solid $gray;
            box-shadow: 0px 2px 5px 1px $black10;
            transition: $tr-02;
            opacity: 0;
            visibility: hidden;
            .list__item {
              display: flex;
              .link {
                flex: 1 1 auto;
                padding: 10px 15px;
                font-size: 16px;
                font-weight: 600;
                transition: $tr-02;
              }
              .link:hover {
                background: $accentLight;
                color: $white;
              }
            }
          }
        }
        .item__submenu-wrapper:hover {
          .submenu__parent {
            .title {
              color: $accentLight;
            }
          }
          .submenu__list {
            opacity: 1;
            visibility: visible;
          }
        }
      }
      .main-menu__item:first-child {
        width: 100%;
        min-width: 290px;
        max-width: 290px;
      }
    }
    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      width: 100%;
      max-width: 220px;
      padding: 10px;
      background: $secondary;

      border: none;
      .action-btn__icon {
        margin-right: 10px;
        width: 18px;
        height: 18px;
        fill: $white;
      }
      .action-btn__text {
        text-transform: uppercase;
        color: $white;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  .header__navigations-wrapper--fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 8000;
  }
}

@include for (1200) {
  .header {
    border-bottom: 1px solid $gray;
    .header__top {
      flex-direction: column;
      align-items: center;
      padding: 20px;
      .top__logo {
        .logo__link {
          .logo__image {}
        }
      }
      .top__contacts {
        padding: 40px 0;
        .contacts__item {
          .item__image {}
          .item__value {}
        }
        .contacts__item:last-child {
          border-right: none;
        }
      }
      .top__social-links {
        .social-link {
          .link__icon {}
        }
      }
      .top__order-btn {
        display: flex;
      }
    }
    .header__navigations-wrapper {
      display: none;
      .header__navigations {}
      .main-menu {
        .main-menu__item {
          .item__link {}
          .item__submenu-wrapper {
            .submenu__parent {
              .icon {}
              .title {}
            }
            .submenu__list {
              .list__item {
                .link {}
              }
            }
          }
        }
      }
      .action-btn {
        .action-btn__icon {}
        .action-btn__text {}
      }
    }
    .header__navigations-wrapper--fixed {}
  }
}

@include for (600) {
  .header {
    .header__top {
      .top__logo {
        .logo__link {
          .logo__image {
            max-width: 180px;
          }
        }
      }
      .top__contacts {
        flex-direction: column;
        padding: 20px 0;
        .contacts__item {
          border-right: none;
          .item__icon {
            display: none;
          }
          .item__value {}
        }
        .contacts__item:nth-child(2) {
          margin-bottom: 0;
        }
        .contacts__item:nth-child(3) {
          order: -1;
        }
      }
      .top__social-links {
        .social-link {
          .link__icon {}
        }
      }
    }
    .header__navigations-wrapper {
      display: none;
      .header__navigations {}
      .main-menu {
        .main-menu__item {
          .item__link {}
          .item__submenu-wrapper {
            .submenu__parent {
              .icon {}
              .title {}
            }
            .submenu__list {
              .list__item {
                .link {}
              }
            }
          }
        }
      }
      .action-btn {
        .action-btn__icon {}
        .action-btn__text {}
      }
    }
    .header__navigations-wrapper--fixed {}
  }
}

</style>
