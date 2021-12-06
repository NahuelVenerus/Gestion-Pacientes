<template>
    <div class="caja">
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
        padding: 50px 0;
        width: 100px;
        text-align: center;
        background: #ddd;
        margin: 20px;
        display: inline-block;
    }
</style>