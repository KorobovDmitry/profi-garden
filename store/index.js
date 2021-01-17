const BASE_URL = process.env.baseUrl

export const state = () => ({
  mainNav: [
    {
      uri: '/services',
      title: 'Услуги',
      childs: [
        {
          uri: 'services/ideya',
          title: 'Идея'
        },
        {
          uri: 'services/blagoustrojstvo',
          title: 'Благоустройство'
        },
        {
          uri: 'services/ozelenenie',
          title: 'Озеленение'
        },
        {
          uri: 'services/rekonstrukcziya-ili-remont-sada',
          title: 'Реконструкция или ремонт сада'
        },
        {
          uri: 'services/uxod-za-sadom',
          title: 'Уход за садом'
        },
        {
          uri: 'services/interernoe-ozelenenie',
          title: 'Интерьерное озеленение'
        },
      ]
    },
    {
      uri: '/about',
      title: 'О компании'
    },
    {
      uri: '/prices',
      title: 'Цены'
    },
    {
      uri: '/our-works',
      title: 'Наши работы'
    },
    {
      uri: '/contacts',
      title: 'Контакты'
    },
  ],
  additionalNav: [
    {
      uri: 'services/ideya',
      title: 'Идея'
    },
    {
      uri: 'services/blagoustrojstvo',
      title: 'Благоустройство'
    },
    {
      uri: 'services/ozelenenie',
      title: 'Озеленение'
    },
    {
      uri: 'services/rekonstrukcziya-ili-remont-sada',
      title: 'Реконструкция или ремонт сада'
    },
    {
      uri: 'services/uxod-za-sadom',
      title: 'Уход за садом'
    },
    {
      uri: 'services/interernoe-ozelenenie',
      title: 'Интерьерное озеленение'
    },
  ],
  contact: {
    phone: '+7-827-456-78-98',
    email: 'order@mail.ru',
    address: 'ул. Ленина, 26а',
    instagram: 'instagram.com',
    vk: 'vk.com'
  },
  ourServices: [
    {
      uri: '/services/ideya',
      title: 'Идея',
      serviceWorkSteps: [
        'Выезд на участок',
        'Фото и видеосъёмка',
        'Замеры',
        'Анализ почвы и иинсаляции',
        'Составление проектного задания',
        'Проект, эскизы видовых точек',
        'Дендроплан',
        'Карта освещения',
        'Ассортиментная ведомость',
        'Предварительная смета материалов и работ'
      ]
    },
    {
      uri: '/services/blagoustrojstvo',
      title: 'Благоустройство',
      serviceWorkSteps: [
        'Уборка территории от мусора, поросли, сорняка',
        'Разбивка участка',
        'Осуществление всех строительных мероприятий (бассейны, площадки, дорожки, тропинки, беседки, перголы, водоёмы, подпорные стены)'
      ]
    },
    {
      uri: '/services/ozelenenie',
      title: 'Озеленение',
      serviceWorkSteps: [
        'Уборка территории',
        'Планировка грунта',
        'Удаление нежелательной растительности',
        'Устройство автополива',
        'Поиск и закупка растений и иного материала',
        'Посадки древесных культур',
        'Разбивка цветников',
        'Отсыпка и мульчирование',
        'Устройство газона',
        'Генеральная уборка участка'
      ]
    },
    {
      uri: '/services/rekonstrukcziya-ili-remont-sada',
      title: 'Реконструкция или ремонт сада',
      serviceWorkSteps: [
        'Пересадка или удаление растений',
        'Придание новых форм разросшимся растениям путём стрижки, обрезки',
        'Формирование плодовых деревьев',
        'Ремонт и обновление газона',
        'Лечебные мероприятия'
      ]
    },
    {
      uri: '/services/uxod-za-sadom',
      title: 'Уход за садом',
      serviceWorkSteps: [
        'Весенняя уборка (чистка цветников, вычёсывание и аэрация газона, санитарная стрижка растений)',
        'Кошение и удобрение газона, удаление сорняков',
        'Отслеживание болезней и лечение',
        'Удобрение растений',
        'Прополка цветников',
        'Формирующая стрижка живой изгороди и отдельных растений',
        'Подготовка сада к зиме'
      ]
    },
    {
      uri: '/services/interernoe-ozelenenie',
      title: 'Интерьерное озеленение',
      serviceWorkSteps: [
        'Устройство экостен из живых растений с возможностью устройства автополива.',
        'Озеленение стабилизированными растениями (фитостены, деревья, композиции в кашпо и вазах)'
      ]
    },
  ],
  callbackModalActive: false,
  notificationModalActive: false,
  notificationModalMessage: '',
  notificationModalStatus: undefined
})

export const getters = {}

export const mutations = {
  setPageInfo(state, PageInfo) {
    state.pageInfo = PageInfo
  },
  setCallbackModalVisibility (state) {
    state.callbackModalActive = !state.callbackModalActive
  },
  setNotificationsVisibility (state) {
    state.notificationModalActive = !state.notificationModalActive
  },
  setNotificationModalMessage (state, { status, message }) {
    if (status === 'success') {
      state.notificationModalStatus = true
    } else if (status === 'error') {
      state.notificationModalStatus = false
    }
    state.notificationModalMessage = message
  }
}

export const actions = {
  // async fetchPageInfo({ commit }) {
  //   try {
  //     const body = {
  //       uri: 'index',
  //       related: {
  //         ourWorks: {parent: 6},
  //         ourServices: {parent: 2}
  //       }
  //     }
  //     const PageInfo = await this.$axios.$post(`${BASE_URL}api/pages`, body)
  //     commit('setPageInfo', PageInfo.object)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}
