<template>
  <div>
    <button @click="transaction">Send</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as API from '@/utils/api';

export default Vue.extend({
  name: 'TrasactionComponent',
  data: () => {

    return {

    };
  },
  methods: {
    transaction() {
      API.transaction()
      .then(res => {
        console.log(res);
      });
    },
  }
})
</script>
