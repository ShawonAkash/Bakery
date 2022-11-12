import { createStore } from 'vuex'
import axios from 'axios'
import { SET_PRODUCTS } from './mutation'

export default createStore({
  state: {
    products: [],
    product: '',
  },

  mutations: {
    [SET_PRODUCTS]: (state, payload) => {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    },
  },

  actions: {
    async setProducts({ commit }) {
      try {
        const { data: payload } = await axios.get('/api/products')
        commit('SET_PRODUCTS', payload)
      } catch (error) {
        console.log(error)
      }
    },

    // async setProduct(state, payload) {
    //   const data = await axios.get(`/api/products/${id}`)
    //   state.commit('setProduct', payload)
    // },
  },
  getters: {
    getProducts: (state) => state.products,
    // getProduct: (state) => state.product,
  },
  modules: {},
})
