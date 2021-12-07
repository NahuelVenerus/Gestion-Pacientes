<template>

    <div class="row">
        <div class="col">
             <div class="Horarios">
                 <br>
                 <button @click="crearListaHorarios">Confirmar fecha</button>
                 <br>
                <ItemHorario :hora="ItemHorario.hora" v-for="ItemHorario in horarios" :key="ItemHorario.id" :estado="ItemHorario.estado" />
            </div>
        </div>
    </div>
   
</template>

<script>

import ItemHorario from '../components/ItemHorario.vue'


export default {
  name: 'Horarios',
  props: {
    fecha: Date
  },
  components: {
    ItemHorario
  },

  methods: {
      crearListaHorarios() {
      }
  },

  data:() => {
      return{
        horarios:[
            {
                  id:"1",
                  hora:"9:00",
                  estado:'activo'
              },
              {
                  id:"2",
                  hora:"10:00",
                  estado:'activo'
              },
              {
                  id:"3",
                  hora:"11:00",
                  estado:'desactivado'
              },
              {
                  id:"4",
                  hora:"12:00",
                  estado:'activo'
              },
              {
                  id:"5",
                  hora:"13:00",
                  estado:'activo'
              },
              {
                  id:"6",
                  hora:"14:00",
                  estado:'desactivado'
              },
              {
                  id:"7",
                  hora:"15:00",
                  estado:'activo'
              },
              {
                  id:"8",
                  hora:"16:00",
                  estado:'activo'
              }
        ],
        date: new Date()
      }
  }
}
</script>