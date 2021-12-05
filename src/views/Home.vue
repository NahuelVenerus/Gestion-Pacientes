<template>
    <div class="container-flud">
        <br/>
            <div class="row">
                <div class="col">
                    <h3>Accesos Directos</h3>
                    <router-link to="mifichamedica" v-for="(item,index) of link" :key="index">
                        <button>{{item}}</button>
                    </router-link>

                    <router-link to="turnos" v-for="(item,index) of links" :key="index">
                        <button>{{item}}</button>
                    </router-link>

                    <router-link to="contadores" v-for="(item,index) of links2" :key="index">
                        <button>{{item}}</button>
                    </router-link>

                        <br/>
                        <br/>

                        <div class="row">
                            <TurnosCancelados titulo="Turnos Cancelados" />
                            
                        </div>

                </div>

                    <div class="col">
                        <Historial titulo="Proximos turnos" />
                    </div>
            </div>
    </div>                
</template>

<script>
import Historial from '../components/Historial.vue'
import TurnosCancelados from '../components/TurnosCancelados.vue'


export default {
    name: 'Home',
    components:{
    Historial,
    TurnosCancelados,
    },
    props: {

    },
    data: () => {
        return {
            link: ["Ficha Medica"],
            links: ["Solicitar Turnos"],
            links2: ["Contadores/Graficos"]
        }
    }
}
</script>

<style>
#app {
    text-align: center;
    color: #2c3e2c;
    margin-left: 10px;
    margin-right: 10px;
}
</style>