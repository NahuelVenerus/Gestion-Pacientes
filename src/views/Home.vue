<template>

  <div class="Home">
    <h1>Home</h1>
    <button @click="traerTurnos">Mostrar Turnos</button>
    <div class="container">
    <div class="row">
      <table class="table stripped bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Fecha</th>
            <th scope="col">Horario</th>
            <th scope="col">Estado</th>
            <th scope="col">Comentario</th>
             <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="turno in turnos" :key="turno.id">
            <td>{{ turno.id }}</td>
            <td>{{ turno.fecha }}</td>
            <td>{{ turno.horario }}</td>
            <td>{{ turno.estado }}</td>
            <td>{{ turno.comentario }}</td>
             <td><button @click="showMessage">Ver paciente</button></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      turnos: [],
    };
  },

  methods: {
   
      showMessage() {
      alert("Tu turno es este");
    },
      async traerTurnos(){
const url = "https://61ae91eea7c7f3001786f8bc.mockapi.io/api/v1/Turnos";
const respuesta = await axios.get(url)
this.turnos=respuesta.data
},
   async  inicializar() {
       const url = "https://61ae91eea7c7f3001786f8bc.mockapi.io/api/v1/Turnos";
       /* axios.get(url)
     .then(response => {
         let data=response.data
      console.log(data)
      this.animales=data
     })
     .catch(()=> console.warn("Ha ocurrido un error"))
     const unObjeto={fecha: "fecha 45",
  horario: "horario 45",
  estado: "estado 45",
  comentario: "comentario 45",
  }
  asyc y await nueva version, si uso await el metodo es async
       */
      
     let response= await axios.get(url)
          let data = response.data
          console.log(data);
          this.animales = data
        
        .catch(() => console.warn("Ha ocurrido un error"));

      const unObjeto = {
        fecha: "fecha 45",
        horario: "horario 45",
        estado: "estado 45",
        comentario: "comentario 45",
      };
      axios.post(unObjeto);
    },
  
  },
  
};
</script>
 

 