<template>
<nav class="navbar" role="navigation" ariaLabel="main navigation">
  <div class="navbar-brand">
    <h1 class="title">Witnessium Core Node</h1>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div
          class="navbar-item has-dropdown is-hoverable"
          v-if="currentAccount != null">
          <a class="navbar-link">{{ currentAccount }}</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" v-for="account in accounts" v-bind:key="account.id">
              "{{ account.address }}"
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" v-on:click="addAccount">Add New Account</a>
          </div>
        </div>
        <a class="navbar-item" v-else v-on:click="addAccount">Add New Account</a>
        <div class="navbar-end"></div>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { fromPrivateKey } from '../utils/keccak256';



function generateAddress(privateKey: string): string {

  return privateKey;
}


export default Vue.extend({
  name: 'ViewAccount',
  data: () => {

    return {
      currentAccount: "0x11",
      accounts: [
        { id: 0, address: "0x11" },
        { id: 1, address: "0x22" }
      ]
    }
  },
  methods: {
    addAccount() {
      alert(fromPrivateKey("abc"));
    },

    generateAddress
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
