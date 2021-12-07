<template>
  <div
    :class="estado == 'activo' ? 'activa' : 'desactivada'"
    class="caja"
    @mouseover="hover = true"
    @click="enviarHorario()"
  >
    {{ hora }}
  </div>
</template>

<script>
export default {
  name: "ItemHorario",
  props: {
    hora: String,
    estado: String,
  },

  data() {
    return {
      horario: '',
    };
  },

  methods: {
      enviarHorario() {
          this.horario = this.hora
          this.$emit("horario", this.horario)
      }
  }
};
</script>

<style>
.caja {
  padding: 30px 0;
  width: 120px;
  text-align: center;
  margin: 20px;
  display: inline-block;
  border-radius: 5%;
}

.activa {
  background-color: #4066d0;
  border: 3px solid #4066d0;
  color: white;
}

.activa:hover {
  border: 3px solid #284083;
}

.activa:focus {
  border: 5px solid #284083;
}

.desactivada {
  background-color: rgb(231, 231, 231);
  border: 3px solid rgb(231, 231, 231);
}
</style>