<template>
   <TablaPacientes/>
</template>
<script>

import TablaPacientes from '../components/TablaPacientes'


export default {
  name: 'Pacientes',
  components:{
      TablaPacientes,
      
  },
  props: {
  },
  data: () => {
      return{
          
      }
  }
}
</script>