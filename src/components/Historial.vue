<template>
    <div class="row">
        <div class="col">
            <h3>{{titulo}}</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
             <div class="Historial">
                <ItemHistorial :dia="itemHistorial.dia" :descripcion="itemHistorial.descripcion" v-for="itemHistorial in historial" :key="itemHistorial.id" />
            </div>
        </div>
    </div>
   
</template>
<style scoped>
.Historial{
    padding: 0 50px;
}
</style>
<script>

import ItemHistorial from '../components/ItemHistorial.vue'


export default {
  name: 'Historial',
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
                  dia:"07/11/2021",
                  descripcion:"Esto es un ejemplo"
              },
              {
                  id:"2",
                  dia:"06/11/2021",
                  descripcion:"Esto es un ejemplo"
              },
              {
                  id:"3",
                  dia:"05/11/2021",
                  descripcion:"Esto es un ejemplo"
              },
            ]
      }
  }
}
</script>