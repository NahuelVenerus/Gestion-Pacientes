<template>
    <div class="row">
        <div class="col">
            <h3>{{titulo}}</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
             <div class="Turnos Cancelados">
                <ItemHistorial :dia="itemHistorial.dia" :descripcion="itemHistorial.descripcion" v-for="itemHistorial in historial" :key="itemHistorial.id" />
            </div>
        </div>
    </div>
   
</template>
<style scoped>
.TurnosCancelados{
    padding: 0 50px;
    text-align: justify;
}
</style>
<script>

import ItemHistorial from '../components/ItemHistorial.vue'


export default {
  name: 'TurnosCancelados',
  props: {
    titulo: String,
  },
  components: {
    ItemHistorial
  },
  data:() => {
      return{
          
          historial:[
              {
                  id:"1",
                  dia:"12/10/2021",
                  descripcion:"Turno cancelado por el Usuario. Observación realizada: Problemas Personales"
              },
              {
                  id:"2",
                  dia:"25/10/2021",
                  descripcion:"Turno cancelado por el Administrador. Observación realizada: Error involuntario"
              },
              {
                  id:"3",
                  dia:"03/11/2021",
                  descripcion:"Turno cancelado por el Usuario. Observación realizada: Enfermo por coronavirus"
              },
            ]
      }
  }
}
</script>