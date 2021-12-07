<template>
  <div class="container-flud">
    <br />
    <h3>Accesos Directos</h3>
    <router-link class="btn btn-primary" to="/agenda" >Solicitar Turno</router-link>

    <div class="row">
      <div class="col">
        <div class="row" id="cuadro">
          <TurnosCancelados titulo="Turnos Cancelados" />
        </div>
      </div>

      <div class="col" id="cuadro">
        <Historial titulo="Proximos turnos" />
      </div>
    </div>
  </div>
</template>

<script>
import Historial from "../components/Historial.vue";
import TurnosCancelados from "../components/TurnosCancelados.vue";

export default {
  name: "HomeProfesional",
  components: {
    Historial,
    TurnosCancelados,
  },
  props: {},
  data: () => {
    return {
      link: ["Ficha Medica"],
      links: ["Solicitar Turnos"],
      links2: ["Contadores/Graficos"],
    };
  },
};
</script>

<style scoped>
  #cuadro {
    margin-top: 30px;
  }
</style>









