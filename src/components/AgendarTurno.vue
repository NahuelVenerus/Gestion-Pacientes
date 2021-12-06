<template>
  <div class="col">
    <div
      style="
        border: 5px solid #4066d0;
        padding: 10px;
        border-radius: 5px;
        height: 350px;
      "
    >
      <div class="row" style="text-align: center">
        <div class="col" style="margin: 1%; color: #4066d0">
          <strong>Agendar un turno</strong>
        </div>
      </div>

      <div class="row" id="placeholder">
        <div class="col-lg-2">
          <label class="contactLabel">DNI Paciente:</label>
        </div>
        <div class="col-lg-10">
          <input
            id="placeholder1"
            v-model="message"
            name="subject"
            placeholder="DNI"
            class="form-control"
          />
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

      <Horarios />

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
    data:() => {
      return{
          
      }
  }
};

</script>