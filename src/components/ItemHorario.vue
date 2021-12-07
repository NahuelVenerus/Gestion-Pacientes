<template>
    <div :class="estado == 'activo' ? 'activa' : 'desactivada'" class="caja" @mouseover="hover=true">
        {{ hora }}
    </div>
</template>

<script>
export default {
  name: 'ItemHorario',
  props: {
    hora: String,
    estado: String
  },
  data:() => {
      return{
          
      }
  }
}
</script>

<style>
    .caja{
        padding: 30px 0;
        width: 120px;
        text-align: center;
        margin: 20px;
        display: inline-block;
    }

    .activa {
        background-color: #4066d0;
        border: 3px solid #4066d0;
        color: white;
    }

    .activa:hover {
        border: 3px solid #284083;
    }

    .desactivada {
        background-color: rgb(231, 231, 231);
    }

</style>