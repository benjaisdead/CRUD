import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lasbebidasalcoholicas:[],
    lasbebidassinalcohol:[],
    detallebebida:[],
  },
  getters: {
  },
  mutations: {
    changeBebidasAlcoholicas(state, bebida ){
        state.lasbebidasalcoholicas.push(bebida);
      },
    changeBebidasSinAlcohol(state, bebida ){
          state.lasbebidassinalcohol.push(bebida);
      },
      changeDetalleBebida(state, bebida ){
            state.detallebebida.push(bebida);
      },
      deleteDetalleBebida(state){
            state.detallebebida.pop();
      },
  },
  actions: {
          async getBebidasAlcoholicas({ commit }, url){
            const res = await fetch(url);
            const json = await res.json();
            console.log(json);

            for(let bebida of json.drinks){
              commit("changeBebidasAlcoholicas", bebida);
            }

      },
          async getBebidasSinAlcohol({ commit }, url){
            const res = await fetch(url);
            const json = await res.json();
            console.log(json);

            for(let bebida of json.drinks){
              commit("changeBebidasSinAlcohol", bebida);
            }

      },

      async getDetallesBebida({ commit }, url){
        commit("deleteDetalleBebida");
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);


        for(let bebida of json.drinks){
          commit("changeDetalleBebida", bebida);
        }

    },
  },
  modules: {
  }
})
