<template>
   <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
 <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="mifichamedica">Mi Ficha</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link active" to="agenda">Agenda</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/editarturno/1">Editar Turno</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        
        <router-link class="btn btn-primary" to="/login" v-if="!IS_LOGIN" >Login</router-link>
        <button type="button" class="btn btn-light" v-if="IS_LOGIN" @click="onLogout">Logout</button>
      </form>
    </div>
  </div>
    </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
   mounted(){
    
  },
  methods : {
    ...mapActions(['LOGOUT_ACTIONS']),
    onLogout(){
      this.LOGOUT_ACTIONS();
      this.$router.push({path: '/login'});
    }
  },
  computed:{
    ...mapGetters(['IS_LOGIN'])
  },
  data:() => {
      return{
      }
  }
}
</script>