<template>
  <div id="app">
    <ViewAccount />
    <TransactionComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ViewAccount from './components/ViewAccount.vue';
import TransactionComponent from './components/TransactionComponent.vue';

export default Vue.extend({
  name: 'app',
  components: {
    ViewAccount,
    TransactionComponent
  }
});
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$navbar-breakpoint: $tablet !default;

@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
