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
					<div class="col">
						<div class="row">Dni Paciente</div>
						<input v-model="filtro_dni_paciente" type="text" />
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
	<button @click="traerTurnos">Mostrar Turnos</button>
	<div class="container">
		<div class="row">
			<table class="table stripped bordered">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Fecha</th>
						<th scope="col">Horario</th>
						<th scope="col">DniPaciente</th>
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
						<td>{{ turno.dniPaciente }}</td>
						<td>{{ turno.estado }}</td>
						<td>{{ turno.comentario }}</td>
						<td>
							<router-link
								class="nav-link active"
								:to="`/editarturno/${turno.id}`"
								>Turnos</router-link
							>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "TablaTurnos",
	components: {},
	created: function () {
		this.CopyTurnos = this.turnos;
	},
	methods: {
		async traerTurnos() {
			const url = "https://61ae91eea7c7f3001786f8bc.mockapi.io/api/v1/Turnos";
			const respuesta = await axios.get(url);
			this.turnos = respuesta.data;
			this.CopyTurnos = respuesta.data;
		},
		async inicializar() {
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

			let response = await axios.get(url);
			let data = response.data;
			console.log(data);

			/*
      Agrego un objeto
      const unObjeto = {
        fecha: "fecha 45",
        horario: "horario 45",
        estado: "estado 45",
        comentario: "comentario 45",
      };
      axios.post(unObjeto);*/
		},
		filtroTurno: function () {
			this.turnos = this.CopyTurnos;
			this.turnos = this.turnos.filter((turno) => {
				let concatenado = `${turno.dniPaciente}${turno.fecha}${turno.comentario}${turno.estado}`;

				return concatenado
					.toLowerCase()
					.includes(
						this.filtro_fecha.toLowerCase() ||
							this.filtro_palabra_clave.toLowerCase() ||
							this.filtro_estado.toLowerCase() ||
							this.filtro_dni_paciente.toLowerCase()
					);
			});
		},
	},
	data() {
		return {
			showMessage() {
				alert("Paciente ....");
			},
			turnos: [],
			filterField: "",
			filtro_fecha: "",
			filtro_palabra_clave: "",
			filtro_estado: "",
			filtro_dni_paciente: "",
			CopyTurnos: [],
		};
	},
};
</script>
