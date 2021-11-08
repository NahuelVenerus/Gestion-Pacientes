<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                 <FichaMedica titulo="Ficha Medica" :paciente="{ 
                    Nombre:'Emmanuel',
                    Apellido:'Capandegui',
                    FechaNacimiento:'19/09/1988',
                    Edad:'33',
                    Celular:'1112345678',
                    Email:'fulano@outlook.com',
                    Descripcion:'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                    }"/>
            </div>
            <div class="col">
               <Historial titulo="Historial" />
            </div>
        </div>
    </div>
</template>
<script>
import FichaMedica from '../components/FichaMedica.vue'
import Historial from '../components/Historial.vue'

export default {
  name: 'MiFichaMedica',
  components:{
      FichaMedica,
      Historial
  },
  props: {
  },
  data:() => {
      return{
          
      }
  }
}
</script>