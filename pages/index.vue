<template>
  <div class="container">
    <aside>
      <pre>{{ player }}</pre>
      <div>
        <button @click="addWallet(10)">Wallet + 10</button>
        <button @click="subtractWallet(10)">Wallet - 10</button>
      </div>
      <div>
        <button @click="addBank(10)">Bank + 10</button>
        <button @click="subtractBank(10)">Bank - 10</button>
      </div>
    </aside>
    
    
    <div>
      <ul>
        <h2>Items</h2>
        <li v-for="i in items" :key="i.name">{{i.name}}</li>
      </ul>
      <ul>
        <h2>Areas</h2>
        <li v-for="i in areas" :key="i.name">{{i.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    player() {
      return this.$store.state.player
    },
    areas() {
      return this.$store.state.areas
    },
    items() {
      return this.$store.state.items
    },
  },
  methods: {
    addWallet(n) {
      this.$store.commit('addWallet', n);
    },
    subtractWallet(n) {
      this.$store.commit('subtractWallet', n);
    },
    addBank(n) {
      this.$store.commit('addBank', n);
    },
    subtractBank(n) {
      this.$store.commit('subtractBank', n);
    },
    ...mapMutations({
      addWallet: 'addWallet',
      subtractWallet: 'subtractWallet',
      addBank: 'addBank',
      subtractBank: 'subtractBank',
    })
  }
}


</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
}

.container > pre {
  width: 800px;
  text-align: left;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
