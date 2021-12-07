<template>
    <div class="caja" @mouseover="hover=true">
        {{ hora }}
    </div>
</template>

<script>
export default {
  name: 'ItemHorario',
  props: {
    hora: String
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
        background: rgb(231, 231, 231);
        margin: 20px;
        display: inline-block;
    }

    .caja:hover {
        padding: 30px 0;
        width: 120px;
        text-align: center;
        color: white;
        background: #b9b9b9;
        margin: 20px;
        display: inline-block;
    }
</style>