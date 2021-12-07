<template>
    <div class="container-fluid">
         <LoginComponent />
    </div>
</template>
<script>
import LoginComponent from '../components/LoginComponent.vue'

export default {
  name: 'Login',
  components:{
      LoginComponent
  },
  props: {
  },
  data: () => {
      return{
          
      }
  }
}
</script>