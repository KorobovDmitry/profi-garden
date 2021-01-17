const BASE_URL = process.env.baseUrl

export const state = () => ({
  pageInfo: {},
})

export const getters = {}

export const mutations = {
  setPageInfo(state, PageInfo) {
    state.pageInfo = PageInfo
  },
}

export const actions = {
  async fetchPageInfo({ commit }, servicePath) {
    const body = {
      uri: servicePath
    }

    try {
      const PageInfo = await this.$axios.$post(`${BASE_URL}api/pages`, body)
      // console.log(`${BASE_URL}api/pages/?uri=${servicePath}`)
      // console.log(PageInfo)

      // commit делается в store/index.js файл, если вызов выполняется через this.
      commit('setPageInfo', PageInfo.object)
    } catch (err) {
      console.log(err)
    }
  }
}
