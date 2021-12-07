<template>
	<Contador v-if="this.IS_PROFESIONAL" />
	<HomePaciente v-if="this.IS_PACIENTE" />
</template>

<script>
// import HomeProfesional from "../components/HomeProfesional.vue";
import HomePaciente from "../components/HomePaciente.vue";
import Contador from "./Contador.vue";
import { mapGetters } from "vuex";
export default {
	name: "Home",
	components: {
		// HomeProfesional,
		HomePaciente,
		Contador,
	},
	props: {},
	data: () => {
		return {};
	},
	computed: {
		...mapGetters(["IS_PROFESIONAL", "IS_PACIENTE"]),
	},
};
</script>

<style scoped></style>
