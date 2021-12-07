<template>
        <div class="col" id="cuadro">
             <div class="row">
            <Contadores titulo="Contadores" :contador="{ 
                Usuarios:'3',
                Turnos:'5',
                TurnosCancelados:'3'
                }"/>
             </div>
        </div>
</template>

<script>
import Contadores from '../components/Contadores.vue'

export default {
name: 'Contador',
  components:{
      Contadores,
      },
  props: {
  },
  data: () => {
      return{
          
      }
  }
}
</script>

<style>
#cuadro{
 margin-left: 20px;
 }
</style>




