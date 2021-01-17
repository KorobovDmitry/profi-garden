const BASE_URL = process.env.baseUrl

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async fetchPageInfo({ commit }) {
    try {
      const body = {
        uri: 'services',
        related: {
          ourServices: {parent: 2}
        }
      }

      const PageInfo = await this.$axios.$post(`${BASE_URL}api/pages`, body)
      // const PageInfo = await this.$axios.$get(`${BASE_URL}api/pages/?uri=services`)
      // console.log(PageInfo.object.related.ourServices)

      // commit делается в store/index.js файл, если вызов выполняется через this.
      this.commit('setPageInfo', PageInfo.object)
    } catch (err) {
      console.log(err)
    }
  }
}
