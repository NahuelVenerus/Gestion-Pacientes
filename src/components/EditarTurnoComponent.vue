<template>
<div class="container-fluid EditarTurnoComponent">
    <div class="row">
        <div class="col">
            <h3>{{titulo}}</h3>
        </div>
    </div>
  <div class="row">
    <div class="col">
       <span class="form-label">Dia:</span>
    </div>
    <div class="col">
      {{this.dia}}
    </div>
    <div class="col">
       <span class="form-label">Hora:</span>
    </div>
    <div class="col">
       {{this.hora}}
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span class="form-label">Estado:</span>
    </div>
    <div class="col">
      <select v-model="this.estado"  class="form-control">
         <option>Pendiente</option>
        <option>Asistido</option>
        <option>Cancelado</option>
      </select>
    </div>
  </div>
   <div class="row">
    <div class="col">
      <span class="form-label">Motivo:</span>
      <p>{{this.motivo}}</p>
      
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div>
          <span class="form-label">Comentario:</span>
      </div>
      <div>
        <textarea  class="form-control" name="" id="" cols="30" rows="6" style="resize:none" v-model="this.comentario"></textarea>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="divButtons">
        <button type="button" class="btn btn-primary">Guardar</button>
        <button type="button" class="btn btn-light">Cancelar</button>
      </div>

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
.divButtons{
  text-align: right;
  padding: 10px;
}
.divButtons button{
  margin-left: 10px;
}
</style>
<script>
import axios from 'axios'
export default {
  name: 'EditarTurnoComponent',
  props: {
    titulo: String,

  },
  mounted(){
    this.GET_TURNO( this.$route.params.id)
  },
  methods : {
    async GET_TURNO(id){
      const res = await axios.get(`http://localhost:3000/turno/${id}`);
      if(res.status == 200){
        
          this.dia = res.data.fecha
          this.hora = res.data.horarioInicio
          this.estado = res.data.estado
          this.comentario = res.data.comentario
          this.motivo = res.data.motivo
          console.log( res.data);
      }else{
        const payload = {
          error:res.message
        }
        console.log( payload);
      }
    }
  },
  data:() => {
      return{
          id:0,
          dia:"",
          hora:"",
          estado:"",
          comentario:"",
          motivo:""

      }
  }
}
</script>
