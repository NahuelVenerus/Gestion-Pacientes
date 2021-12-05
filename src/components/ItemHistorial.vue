<template>
    <div class="ItemHistorial">
        <div class="ItemHistorial__Dia">
            {{dia}}
        </div>
        
        
        <div class="ItemHistorial__Descripcion">
            {{descripcion}}
        </div>    
    </div>
</template>
<style scoped>

.ItemHistorial{
    padding: 10px;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    margin: 10px 0;
    text-align: center;
    
}
.ItemHistorial__Dia{
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    
   
}
</style>
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