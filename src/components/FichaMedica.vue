<template>
<div class="container-fluid FichaMedica">
    <div class="row">
        <div class="col">
            <h3>{{titulo}}</h3>
        </div>
    </div>
  <div class="row">
    <div class="col">
       <span class="spnTitle">Nombre:</span>
    </div>
    <div class="col">
      {{$store.state.usuario.nombre}}
    </div>
    <div class="col">
       <span class="spnTitle">Apellido:</span>
    </div>
    <div class="col">
       {{$store.state.usuario.apellido}}
    </div>
    <div class="col">
      <img class="FichaMedica__FotoPerfil" src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span class="spnTitle">Fecha de Nac.:</span>
    </div>
    <div class="col">
       {{this.GET_FECHA_NACIMIENTO}}
    </div>
    <div class="col">
      <span class="spnTitle">Edad:</span>
    </div>
    <div class="col">
      {{this.GET_EDAD}}
    </div>
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col">
      <span class="spnTitle">Celular:</span>
    </div>
    <div class="col">
      {{$store.state.usuario.celular}}
    </div>
    <div class="col">
      <span class="spnTitle">Email:</span>
    </div>
    <div class="col">
      {{$store.state.usuario.email}}
    </div>
     <div class="col">
     </div>
  </div>
   <div class="row">
    <div class="col">
      <span class="spnTitle">Descripcion:</span>
      {{$store.state.usuario.descripcion}}
    </div>
  </div>
</div>
</template>
<style scoped>
.FichaMedica__FotoPerfil{
    height: 90px;
    width: 90px;
}
.spnTitle{
  font-weight: 700;
}
</style>
<script>
import {  mapGetters } from 'vuex'
export default {
  name: 'FichaMedica',
  props: {
    titulo: String,

  },
  data:() => {
      return{
          
      }
  },
  computed:{
      ...mapGetters(['GET_FECHA_NACIMIENTO', 'GET_EDAD'])
  }
}
</script>
