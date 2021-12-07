<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<EditarTurnoComponent titulo="Turno" />
			</div>
			<div class="col">
				<FichaMedica titulo="Paciente" />
			</div>
		</div>
	</div>
</template>
<script>
import EditarTurnoComponent from "../components/EditarTurnoComponent.vue";
import FichaMedica from "../components/FichaMedica.vue";

export default {
	name: "EditarTurno",
	components: {
		FichaMedica,
		EditarTurnoComponent,
	},
	props: {},
	data: () => {
		return {};
	},
};
</script>
