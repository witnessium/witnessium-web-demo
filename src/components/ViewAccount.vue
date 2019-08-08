<template>
<nav class="navbar" role="navigation" ariaLabel="main navigation">
  <div class="navbar-brand">
    <h1 class="title">Witnessium Core Node</h1>
    <div class="navbar-menu">
      <div
        class="navbar-item has-dropdown is-hoverable"
        v-if="currentAccount != ''">
        <a class="navbar-link">{{ currentAccount }}</a>
        <div class="navbar-dropdown">
          <a v-for="account in accounts" v-bind:key="account.id"
            :class="currentAccount == account.address ? 'is-active navbar-item' : 'navbar-item' "
            @click="changeAccount">
            "{{ account.address }}"
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" @click="addAccount">Add New Account</a>
        </div>
      </div>
      <a class="navbar-item" v-else @click="addAccount">Add New Account</a>
      <div class="navbar-end"></div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { generate } from '../utils/keccak256';
import * as Storage from '../utils/storage';

function generateAddress(privateKey: string): string {

  return privateKey;
}


export default Vue.extend({
  name: 'ViewAccount',
  data: () => {
    const current = Storage.current();
    const currentAccount = current;

    const accounts = Storage.keys()

    return {
      currentAccount,
      accounts: accounts.map((address, id) => ({ id, address }))
    }
  },

  methods: {
    addAccount() {
      const pair = generate();

      const pub = pair.getPublic("hex");
      const pri = pair.getPrivate("hex");

      Storage.set(pub, pri);
      Storage.current(pub);

      this.accounts.push({
        id: this.accounts.length,
        address: pub
      });
      this.currentAccount = pub;
    },

    changeAccount(event: MouseEvent) {
      const account = event.target.textContent.trim();
      Storage.current(account);
      this.currentAccount = account;
    },

    sign(publicKey: string): void {
      const privateKey = Storage.get(publicKey);

    }
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
