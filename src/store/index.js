import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      usuario:{
          nombre:"Emmanuel",
          apellido:"Capandegui",
          fechaNacimiento:"",

      },
      llamada:{
          error:false,
          metodo:""
      },
      loading:false,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;
// import Vue from 'vue'
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state:{
//        


//     },
//     mutations:{

//     },
//     actions:{

//     },
//     getters:{

//     }
// });