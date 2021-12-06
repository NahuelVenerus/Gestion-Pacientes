<template>
  <div id="app">
    <div
      class="container-fluid"
      style="margin-top: 1.5%; padding: 2%"
    >
      <div
        class="row"
        style="margin-top: 1%; margin-bottom: 15%"
      >
        <AgendarTurno />

        <div class="col">
          <div
            style="
              border: 5px solid #4066d0;
              padding: 10px;
              border-radius: 5px;
              height: 350px;
              overflow-y: scroll;
            "
          >
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