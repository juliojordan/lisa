<template>
  <div id="app">
    <img alt="Lisa Simpson" src="/lisa.png" />
    <span v-if="message" class="lisa">{{ message }}</span>
    <h1>vuex</h1>
    <pre :class="vClass">{{ vLisa }}</pre>
    <h1>deja-vue</h1>
    <pre class="deja-vue">{{ dvLisa }}</pre>
    <button type="button" @click="onClick">Flanders up</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      lisa: null,
      homer: null,
      message: null,
      vClass: null
    };
  },
  created() {
    this.vLisa = this.$store.state;
    this.dvLisa = this.$dv();
  },
  methods: {
    onClick() {
      try {
        this.vLisa.lastName = "Flanders";
        this.dvLisa.lastName = "Flanders";
      } catch (err) {
        console.error(err);
        this.vClass = "error";
        this.message = "Don't mess with Lisa Simpson";
      }
    }
  }
};
</script>

<style>
#app {
  margin-top: 30px;
  font: 1.2em "Fira Sans", sans-serif;
}
button {
  font-size: 1em;
}
.error {
  color: #bf616a;
}
.deja-vue {
  color: #88c0d0;
}
.lisa {
  font: 1.5em;
}
</style>
