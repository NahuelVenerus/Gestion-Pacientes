import { createStore } from 'vuex'
import axios from 'axios';
 //import {PACIENTE, PROFESIONAL} from '../enums/roles';
// Create a new store instance.

const localhost = "http://localhost:3000";
const store = createStore({
  state () {
    return {
      usuario:{
        nombre:"",
        apellido:"",
        fechaNacimiento: null,
        obraSocial:"",
        email:"",
        celular:"",
        dni:0,
        idLogin:0

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
      if(res.status == 200){
        context.commit("SET_HISTORIAL", res.data);
      }else{
        const payload = {
          error:res.message
        }
        context.commit("SET_ERROR_CALL", payload);
      }
    },
    async LOGIN_ACTIONS(context,dataLogin){
      try {
        context.commit("CLEAN_ERROR");
        const res = await axios.get(`${localhost}/login`,{
          headers:{
            ...dataLogin
          }
        });
        console.log(res.data)
        if(res.status == 200){
          context.commit("SET_LOGIN", res.data);
        }else{
          const payload = {
            error:res.message
          }
          context.commit("SET_ERROR_CALL", payload);
        }
      } catch (error) {
        console.log()
        const payload = {
          error: (error.response.data.message || error.response.statusText)
        }
        context.commit("SET_ERROR_CALL", payload);
      }


    },
    LOGOUT_ACTIONS(context){
      context.commit("CLEAN_ERROR");
      context.commit("CLEAN_USER");
    }
  },
  getters:{
    GET_HISTORIAL(state){
      return state.historial;  
    },
    IS_LOGIN(state){
      return state.usuario.idLogin > 0;
    },
    GET_ERROR(state){
      return state.error;
    },
  },
  mutations: {
    SET_HISTORIAL (state, historial) {
      state.loading = false;
      state.historial = historial;
    },
    SET_LOGIN (state, usuario) {
      state.usuario = {
        ...usuario
      }
      state.loading = false;

    },
    SET_ERROR_CALL (state, payload){
      state.loading = false;
      state.error = payload.error;
    },
    CLEAN_USER (state){
      state.usuario = {
        nombre:"",
        apellido:"",
        fechaNacimiento: null,
        obraSocial:"",
        email:"",
        celular:"",
        dni:0,
        idLogin:0
      }
    },
    CLEAN_ERROR(state){
      state.error = "";
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