<template>
    <div class="ItemRegistro">
        <div class="ItemRegistro__Dia">
            {{dia}}
        </div>
        <div class="ItemRegistro__Descripcion">
            {{descripcion}}
        </div>
    </div>
</template>
<script>
export default {
  name: 'ItemHistorial',
  props: {
    dia: String,
    descripcion: String
  },
  data:() => {
      return{
          
      }
  }
}
</script>