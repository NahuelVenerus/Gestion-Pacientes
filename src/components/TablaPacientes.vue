<template>
	<div class="container">
		<div class="row">
			<h1>Pacientes</h1>
		</div>
		<div class="row">
			<div class="container-fluid">
				<div class="row">
					<div class="col">
						<div class="row">Nombre</div>
						<input v-model="filtro_name" type="text" />
					</div>

					<div class="col">
						<div class="row">Apellido</div>
						<input v-model="filtro_surname" type="text" />
					</div>

					<div class="col">
						<div class="row">Obra Social</div>
						<input v-model="filtro_obraSocial" type="text" />
					</div>

					<div class="col-1">
						<button
							type="button"
							class="btn btn-outline-dark"
							v-on:click="filtro"
						>
							Filtrar
						</button>
					</div>
					<br />
				</div>
			</div>
		</div>
	</div>
	<br />

	<button @click="traerPacientes">Mostrar Pacientes</button>

	<div class="container">
		<div class="row">
			<table class="table stripped bordered">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Obra Social</th>
						<th scope="col">Nombre de usuario</th>
						<th scope="col">Edad</th>
						<th scope="col">Telefono</th>
						<th scope="col">Dni</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="person in pacientes" :key="person.id">
						<td>{{ person.id }}</td>
						<td>{{ person.name }}</td>
						<td>{{ person.surname }}</td>
						<td>{{ person.obraSocial }}</td>
						<td>{{ person.username }}</td>
						<td>{{ person.age }}</td>
						<td>{{ person.telefono }}</td>
						<td>{{ person.dni }}</td>
						<td>
							<router-link
								class="nav-link active"
								:to="`/verpaciente/${person.id}`"
								>Ver</router-link
							>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>

<script>
import axios from "axios";
export default {
	name: "TablaPacientes",

	components: {},
	created: function () {
		this.CopyPacientes = this.pacientes;
	},
	methods: {
		async traerPacientes() {
			console.log("Hola");
			const url =
				"https://61ae91eea7c7f3001786f8bc.mockapi.io/api/v1/Pacientes";
			const respuesta = await axios.get(url);
			console.log(respuesta);
			this.pacientes = respuesta.data;
			this.CopyPacientes = respuesta.data;
		},
		async inicializar() {
			const url =
				"https://61ae91eea7c7f3001786f8bc.mockapi.io/api/v1/Pacientes";

			let response = await axios.get(url);
			let data = response.data;
			console.log(data);
		},
		filtro() {
			this.pacientes = this.CopyPacientes;

			this.pacientes = this.pacientes.filter((person) => {
				let registroConcatenado = `${person.name}${person.surname}${person.obraSocial}`;

				return registroConcatenado
					.toLowerCase()
					.includes(
						this.filtro_name.toLowerCase() ||
							this.filtro_surname.toLowerCase() ||
							this.filtro_obraSocial.toLowerCase()
					);
			});
		},
	},

	data: () => {
		return {
			showMessage() {
				alert("Tu turno es este");
			},
			pacientes: [],
			filterField: "",
			filtro_name: "",
			filtro_surname: "",
			filtro_obraSocial: "",
			CopyPacientes: [],
		};
	},
};
</script>
