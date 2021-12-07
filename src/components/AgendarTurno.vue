<template>
	<div class="col">
		<div class="borde">
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

			<div class="row">
				<div class="col">
					<div class="horarios">
						<br />
						<button @click="crearListaHorarios">Confirmar fecha</button>
						<br />
						<ItemHorario
							:hora="ItemHorario.hora"
							v-for="ItemHorario in horarios"
							:key="ItemHorario.id"
							:estado="ItemHorario.estado"
							@itemHorario="horario = $event"
						>
						</ItemHorario>
					</div>
				</div>
			</div>

			<div>
				<label class="contactLabel">Comentario:</label>
				<input
					type="text"
					name="comentario-turno"
					id=""
					cols="20"
					rows="6"
					class="form-control"
					style="resize: none"
					v-model="this.comentario"
				/>
			</div>

			<div class="row" style="margin-top: 20px">
				<div class="col-sm-12 col-lg-12" style="margin-left: 40%">
					<input
						type="submit"
						value="Enviar"
						onclick="enviar()"
						class="form-control"
						id="boton"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DatePicker from "vue3-datepicker";
import axios from "axios";
import ItemHorario from "../components/ItemHorario.vue";
const moment = require("moment");

export default {
	name: "AgendarTurno",
	components: {
		DatePicker,
		ItemHorario,
	},

	methods: {
		async GET_TURNOS_PACIENTE() {
			const res = await axios.get("http://localhost:3000/turnospaciente");
			console.log(res);
			if (res.status == 200) {
				this.turnosPaciente = res.data;
			} else {
				console.log("Trayendo turnos de pacientes");
			}
		},

		desactivarHorario(hora) {
			let index = 0;

			while (this.horarios[index].hora != hora) {
				index++;
			}

			this.horarios[index].estado = "desactivado";
		},

		crearListaHorarios() {
			if (this.date == null) {
				alert("Seleccione una fecha para su turno");
			} else if (moment(this.date) <= moment(this.hoy)) {
				alert("Seleccione una fecha posterior a hoy para su turno");
				for (let index = 0; index < this.horarios.length; index++) {
					this.horarios[index].estado = "desactivado";
				}
			} else {
				for (let index = 0; index < this.horarios.length; index++) {
					this.horarios[index].estado = "activo";
				}

				for (let index = 0; index < this.turnosPaciente.length; index++) {
					if (
						moment(this.turnosPaciente[0].fecha).format("YYYY-MM-DD") ==
						moment(this.date).format("YYYY-MM-DD")
					) {
						this.desactivarHorario(this.turnosPaciente[index].horarioInicio);
					}
				}
			}
		},
	},

	data: () => {
		return {
			date: null,
			hoy: new Date(),
			turnosPaciente: [],
			horario: "321",
			comentario: "",
			horarios: [
				{
					id: "1",
					hora: "9:00",
					estado: "desactivado",
				},
				{
					id: "2",
					hora: "10:00",
					estado: "desactivado",
				},
				{
					id: "3",
					hora: "11:00",
					estado: "desactivado",
				},
				{
					id: "4",
					hora: "12:00",
					estado: "desactivado",
				},
				{
					id: "5",
					hora: "13:00",
					estado: "desactivado",
				},
				{
					id: "6",
					hora: "14:00",
					estado: "desactivado",
				},
				{
					id: "7",
					hora: "15:00",
					estado: "desactivado",
				},
				{
					id: "8",
					hora: "16:00",
					estado: "desactivado",
				},
			],
		};
	},
	mounted() {
		this.GET_TURNOS_PACIENTE();
	},
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
#boton {
	width: 100px;
	color: white;
	background-color: #4066d0;
}
</style>
