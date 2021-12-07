<template>
	<div class="row">
		<h3>{{ titulo }}</h3>
		<br />
		<br />
		<br />
		<div class="col">
			<div class="card text-white bg-success mb-3" style="max-width: 20rem">
				<div class="card-header" style="font-size: 30px; text-align: center">
					Cantidad Usuarios
				</div>
				<div class="card-body" style="text-align: center">
					<h5 class="card-title" style="font-size: 55px">
						{{ contador.Usuarios }}
					</h5>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card text-white bg-info mb-3" style="max-width: 20rem">
				<div class="card-header" style="font-size: 30px; text-align: center">
					Turnos Solicitados
				</div>
				<div class="card-body" style="text-align: center">
					<h5 class="card-title" style="font-size: 55px">
						<div class="col">
							{{ contador.Turnos }}
						</div>
					</h5>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card text-white bg-danger mb-3" style="max-width: 20rem">
				<div class="card-header" style="font-size: 30px; text-align: center">
					Turnos Cancelados
				</div>
				<div class="card-body" style="text-align: center">
					<h5 class="card-title" style="font-size: 55px">
						{{ contador.TurnosCancelados }}
					</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contadores",
	props: {
		titulo: String,
		contador: Object,
	},
	method: {},
	data: () => {
		return {
			contadores: {
				Usuarios: 0,
				Turnos: 0,
				TurnosCancelados: 0,
			},
		};
	},
};
</script>

<style scoped></style>
