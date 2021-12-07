<template>
  <div id="app">
    <div
      class="container-fluid"
      id="container"
    >
      <div
        class="row"
        id="posicion"
      >
        <AgendarTurno />

        <div class="col">
          <div
            class="borde"
          >
          <h4>Próximos turnos: </h4>
            <ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AgendarTurno from '../components/AgendarTurno';

export default {
  name: "App",
  components: {
    AgendarTurno
  },
  data() {
    return {
      date: "",
      hora: "",
      paciente: {
        nombre: "",
        apellido: "",
        dni: "",
      },
      turnos: [],
    };
  },
  methods: {
    agregarTurno() {
      this.turnos.push({
        fecha: this.date,
        hora: this.hora,
        paciente: this.paciente,
      });
    },
  },
};
</script>

<style>
.borde {
  border: 2px solid #4066d0;
  padding: 2%;
  border-radius: 5px;
  height: 100%;
}
#container {
  padding: 2%;
}
#posicion {
  padding-top: 3%;
}
</style>