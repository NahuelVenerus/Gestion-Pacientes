<template>
	<div class="row">
		<div class="col">
			<div class="Login">
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">DNI</label>
					<input
						type="text"
						v-model="dni"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="DNI"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label"
						>Password</label
					>
					<input
						type="password"
						v-model="password"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="password"
					/>
				</div>
				<div class="mb-3">
					<button type="button" class="btn btn-primary" @click="clickLogin">
						Ingresar
					</button>
				</div>

				<div v-if="this.GET_ERROR" class="alert alert-danger" role="alert">
					{{ this.GET_ERROR }}
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.Login {
	width: 600px;
	border: 1px solid rgb(209, 209, 209);
	padding: 15px;
	border-radius: 4px;
	margin: 100px auto;
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "LoginComponent",
	props: {
		titulo: String,
	},
	mounted() {},
	components: {},
	methods: {
		...mapActions(["LOGIN_ACTIONS"]),
		async clickLogin() {
			await this.LOGIN_ACTIONS({
				dni: this.dni,
				password: this.password,
			});
			if (this.IS_LOGIN) this.$router.push({ path: "/" });
		},
	},
	data: () => {
		return {
			dni: "",
			password: "",
		};
	},
	computed: {
		...mapGetters(["GET_HISTORIAL"]),
		...mapGetters(["IS_LOGIN"]),
		...mapGetters(["GET_ERROR"]),
	},
};
</script>
