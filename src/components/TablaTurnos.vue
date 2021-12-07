<template>
  <div class="container">
    <div class="row">
      <h1>Turnos</h1>
    </div>
    <div class="row">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="row">Fecha</div>
            <input v-model="filtro_fecha" type="text" />
          </div>

          <div class="col">
            <div class="row">Palabra Clave</div>
            <input v-model="filtro_palabra_clave" type="text" />
          </div>

          <div class="col">
            <div class="row">Estado</div>
            <input v-model="filtro_estado" type="text" />
          </div>

          <div class="col-1">
            <button
              type="button"
              class="btn btn-outline-dark"
              v-on:click="filtroTurno"
            >
              Filtrar
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>

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
          <tr v-for="turno in LosTurnos" :key="turno.id">
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
</template>

<style scoped>
</style>

<script>
export default {
  name: "TablaTurnos",

  components: {},
  created: function () {
    this.CopyTurnos = this.LosTurnos;
  },
  methods: {
    filtroTurno: function () {
      this.LosTurnos = this.CopyTurnos;
      this.LosTurnos = this.LosTurnos.filter((turno) => {
        let concatenado = `${turno.fecha}${turno.comentario}${turno.estado}`;

        return concatenado
          .toLowerCase()
          .includes(
            this.filtro_fecha.toLowerCase() ||
              this.filtro_palabra_clave.toLowerCase() ||
              this.filtro_estado.toLowerCase()
          );
      });
    }
    
  },
  data: () => {
      return {
              showMessage() {
      alert("Tu turno es este");
    },
        LosTurnos: [
          {
            id: "1",
            fecha: "2222",
            horario: "14:30",
            estado: "Asistido",
            comentario: "Tengo dolor de cabeza",
          },
          {
            id: "2",
            fecha: "3333",
            horario: "15:30",
            estado: "Cancelado",
            comentario: "Estoy por morir",
          },
          {
            id: "3",
            fecha: "4444",
            horario: "13:30",
            estado: "Pendiente",
            comentario: "Tengo fiebre",
          },
          {
            id: "4",
            fecha: "5555",
            horario: "17:30",
            estado: "Asistido",
            comentario: "Necesito un transplante",
          },
          {
            id: "5",
            fecha: "9999",
            horario: "14:00",
            estado: "Cancelado",
            comentario: "Me duele la muela",
          },
          {
            id: "6",
            fecha: "8888",
            horario: "12:00",
            estado: "Pendiente",
            comentario: "Tengo dolor de panza",
          },
        ],
        filterField: "",
        filtro_fecha: "",
        filtro_palabra_clave: "",
        filtro_estado: "",
        CopyTurnos: [],
      }
    },
};
</script>