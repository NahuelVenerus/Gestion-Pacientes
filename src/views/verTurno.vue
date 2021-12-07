
<template>
  <div>
    <button v-on:click="showMessage">Click</button>
    <button @click="showMessage">Click</button> <!-- Equivalente al anterior -->
    <button @[event]="showMessage">Click</button> <!-- Evento dinámico -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: "click"
    }
  },
  methods: {
    showMessage() {
      alert("Hello!! Thanks for click me!");
    }
  }
}
</script>