
// import Vue from 'vue'
import Vuex from 'vuex';

// Vue.use(Vuex);

export default new Vuex.Store({
    state:{
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


    },
    mutations:{

    },
    actions:{

    },
    getters:{

    }
});