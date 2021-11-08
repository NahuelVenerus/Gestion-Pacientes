<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <h3>{{titulo}}</h3>
        </div>
    </div>
  <div class="row">
    <div class="col">
      Nombre:
    </div>
    <div class="col">
      {{paciente.Nombre}}
    </div>
    <div class="col">
      Apellido:
    </div>
    <div class="col">
      {{paciente.Apellido}}
    </div>
  </div>
  <div class="row">
    <div class="col">
      Fecha de Nacimiento:
    </div>
    <div class="col">
      {{paciente.FechaNacimiento}}
    </div>
    <div class="col">
      Edad:
    </div>
    <div class="col">
      {{paciente.Edad}}
    </div>
  </div>
  <div class="row">
    <div class="col">
      Celular:
    </div>
    <div class="col">
      {{paciente.Celular}}
    </div>
    <div class="col">
      Email:
    </div>
    <div class="col">
      {{paciente.Email}}
    </div>
  </div>
   <div class="row">
    <div class="col">
      Descripcion:
      {{paciente.Descripcion}}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'FichaMedica',
  props: {
    titulo: String,
    paciente: Object
  },
  data:() => {
      return{
          
      }
  }
}
</script>
