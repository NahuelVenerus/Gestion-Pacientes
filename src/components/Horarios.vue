<template>

    <div class="row">
        <div class="col">
             <div class="Horarios">
                 <br>
                 <button @click="crearListaHorarios">Confirmar fecha</button>
                 <br>
                <ItemHorario :hora="ItemHorario.hora" v-for="ItemHorario in horarios" :key="ItemHorario.id" />
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
          if(this.fecha != null && this.fecha > this.date) {
              this.horarios=[
              {
                  id:"1",
                  hora:"9:00"
              },
              {
                  id:"2",
                  hora:"10:00"
              },
              {
                  id:"3",
                  hora:"11:00"
              },
              {
                  id:"4",
                  hora:"12:00"
              },
              {
                  id:"5",
                  hora:"13:00"
              },
              {
                  id:"6",
                  hora:"14:00"
              },
              {
                  id:"7",
                  hora:"15:00"
              },
              {
                  id:"8",
                  hora:"16:00"
              }
            ]
          } else if(this.fecha == null) {
              alert("Debe seleccionar una fecha")
          } else {
              alert("Seleccione una fecha posterior a hoy")
              this.horarios = []
          }
      }
  },

  data:() => {
      return{
        horarios:[],
        date: new Date()
      }
  }
}
</script>