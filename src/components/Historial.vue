<template>
	<div class="row">
		<div class="col">
			<h3>{{ titulo }}</h3>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="Historial">
				<ItemHistorial
					:dia="itemHistorial.dia"
					:descripcion="itemHistorial.descripcion"
					v-for="itemHistorial in GET_HISTORIAL"
					:key="itemHistorial.id"
				/>
			</div>
		</div>
	</div>
</template>
<style scoped>
.Historial {
	padding: 0 50px;
}
</style>
<script>
import ItemHistorial from "../components/ItemHistorial.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Historial",
	props: {
		titulo: String,
	},
	mounted() {
		this.GET_HISTORIAL_ACTIONS();
	},
	components: {
		ItemHistorial,
	},
	methods: {
		...mapActions(["GET_HISTORIAL_ACTIONS"]),
	},
	data: () => {
		return {};
	},
	computed: {
		...mapGetters(["GET_HISTORIAL"]),
	},
};
</script>
