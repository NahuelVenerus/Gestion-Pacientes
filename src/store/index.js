import { createStore } from 'vuex'
import axios from 'axios';
// Create a new store instance.
const localhost = "http://localhost:3000";
const store = createStore({
  state () {
    return {
      usuario:{
          nombre:"Emmanuel",
          apellido:"Capandegui",
          fechaNacimiento:"",

      },
      historial:[],
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
    async GET_HISTORIAL_ACTIONS(context){
      const res = await axios.get(`${localhost}/historial`);
      console.log(res)
      if(res.status == 200){
        context.commit("SET_HISTORIAL", res.data);
      }else{
        const payload = {
          loading:false,
        }
        context.commit("SET_ERROR_CALL", payload);
      }
      
      
      
    }
  },
  getters:{
    GET_HISTORIAL(state){
      return state.historial;
    }
  },
  mutations: {
    SET_HISTORIAL (state, historial) {
      state.historial = historial;
    },
    SET_ERROR_CALL (state, payload){
      state.loading = payload.loading;
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