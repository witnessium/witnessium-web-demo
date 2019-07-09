<template>
  <div id="app">
    <ViewAccount />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ViewAccount from './components/ViewAccount.vue';

export default Vue.extend({
  name: 'app',
  components: {
    ViewAccount
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
