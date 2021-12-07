import { createStore } from 'vuex'
import axios from 'axios';
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
      esPaciente:false,
      esProfesional:false,
      loading:false,
    }
  },
  actions:{
    async GET_HISTORIAL(context){
      const res = await axios.get('/historial');
      console.log(res.json())
      context.commit("SET_HISTORIAL", null);
      
    }
  },
  getters:{

  },
  mutations: {
    SET_HISTORIAL (state, historial) {
      state.historial = historial
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