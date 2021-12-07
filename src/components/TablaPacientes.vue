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
            <input v-model="filtro_name" type="text"  />
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
            <td><button @click="showMessage">Ver Turno</button></td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "TablaPacientes",

  components: {},
  created: function () {
    this.CopyPacientes = this.pacientes;
  },
  methods: {
    filtro: function () {
      this.pacientes = this.CopyPacientes;
      console.log("Pacientes")
      console.log(this.pacientes)
       console.log("Copy Pacientes")
      console.log(this.CopyPacientes)

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
      console.log("Pacientes filtrados")
      console.log(this.pacientes)
    }
  },
  data: () => {
    return {
      showMessage() {
      alert("Tu turno es este");
    },
      pacientes: [
        {
          id: "1",
          name: "Leo",
          surname: "Messi",
          age: 28,
          obraSocial: "Osde",
          username: "@soyMessi",
          telefono: "10101010",
        },
        {
          id: "2",
          name: "Juan",
          surname: "Perez",
          age: 18,
          obraSocial: "Accord",
          username: "@soyJuan",
          telefono: "10451010",
        },
        {
          id: "3",
          name: "Susana",
          surname: "Gimenez",
          age: 70,
          obraSocial: "Medicus",
          username: "@soySusana",
          telefono: "10101456",
        },
        {
          id: "4",
          name: "Carlos",
          surname: "Tevez",
          age: 38,
          obraSocial: "Medicus",
          username: "@soyTevez",
          telefono: "10101890",
        },
        {
          id: "5",
          name: "Tomas",
          surname: "Bou",
          age: 23,
          obraSocial: "Galeno",
          username: "@soyBou",
          telefono: "10485610",
        },
        {
          id: "6",
          name: "Bob",
          surname: "Marley",
          age: 74,
          obraSocial: "Galeno",
          username: "@soyBob",
          telefono: "10789010",
        },
        {
          id: "7",
          name: "Ricardo",
          surname: "Fort",
          age: 32,
          obraSocial: "Galeno",
          username: "@soyRicky",
          telefono: "10159010",
        },
        {
          id: "8",
          name: "Marcelo",
          surname: "Tinelli",
          age: 56,
          obraSocial: "Osde",
          username: "@soyMarcelo",
          telefono: "13201010",
        },
        {
          id: "9",
          name: "Alberto",
          surname: "Cormillot",
          age: 78,
          obraSocial: "Accord",
          username: "@soyAlberto",
          telefono: "74601010",
        },
        {
          id: "10",
          name: "Lizy",
          surname: "Tagliani",
          age: 32,
          obraSocial: "Galeno",
          username: "@soyLizy",
          telefono: "10196310",
        },
      ],
      filterField: "",
      filtro_name: "",
      filtro_surname: "",
      filtro_obraSocial: "",
      CopyPacientes: [],
    }
  },
};
</script>