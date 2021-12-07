<template>
  <div class="col">
    <div
      class="borde"
      style="
        border: 2px solid #4066d0;
        padding: 2%;
        border-radius: 5px;
        height: 100%;
      "
    >
      <div class="row" style="text-align: center">
        <div class="col" style="margin: 1%; color: #4066d0">
          <strong>Agendar un turno</strong>
        </div>
      </div>

      <div class="row" id="placeholder" style="margin-top: 10px">
        <div class="col-lg-2">
          <label class="contactLabel">Fecha:</label>
        </div>
        <div class="col-lg-10">
          <date-picker
            v-model="date"
            type="date"
            class="form-control"
          ></date-picker>
        </div>
      </div>

      <Horarios :fecha="this.date" class="horarios"/>

      <div>
          <label class="contactLabel">Cometario:</label>
          <textarea name="comentario-turno" id="" cols="20" rows="6" class="form-control" style="resize: none"></textarea>
      </div>

      <div class="row" style="margin-top: 20px">
        <div class="col-sm-12 col-lg-12" style="margin-left: 40%">
          <input
            type="submit"
            value="Enviar"
            onclick="enviar()"
            class="form-control"
            style="width: 100px; color: white; background-color: #4066d0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue3-datepicker'
import Horarios from './Horarios'

export default {
    name: 'AgendarTurno',
    components: {
        DatePicker,
        Horarios
    },
    methods: {
      enviarDate() {
        Horarios.date = this.date
      }
    },
    data:() => {
      return{
          date: null
      }
  }
};

</script>

<style>
.horarios {
    padding-left: 20%;
}
.borde {
  border: 2px solid #4066d0;
  padding: 2%;
  border-radius: 5px;
  height: 100%;
}
</style>