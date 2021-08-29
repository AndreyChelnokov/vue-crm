import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth';

Vue.use(Vuex)

interface categorieList {
  id: number;
  title: string;
  limit: number;
}

export default new Vuex.Store({
  state: {
    categorieList: [
      {id: 0, title: 'Eда', limit: 15000},
      {id: 1, title: 'Одежда', limit: 23000},
    ]
  },
  mutations: {
    addCategorie(state, data: categorieList) {
      state.categorieList.push(data);
    }
  },
  actions: {

  },
  modules: {
    auth
  }
})
