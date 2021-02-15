<template>
  <div class="container">
    <aside>
      <div>Wallet {{player.wallet}}</div>
      <div>Bank {{player.bank}}</div>
      <div>
        <input type="text" v-model=wallet_temp>
        <button @click="transferToBank(wallet_temp)">Send to Bank</button>
        <button @click="transferToWallet(wallet_temp)">Send to Wallet</button>
      </div>
      <ul>
        <li>Apples - {{player.stash.apples}} - <button>Sell</button></li>
        <li>Bananas - {{player.stash.bananas}} - <button>Sell</button></li>
        <li>Oranges - {{player.stash.oranges}} - <button>Sell</button></li>
      </ul>
    </aside>
    <div>
      <ul>
        <h2>Items</h2>
        <li>
          <span>{{items[0].name}}</span>
          <span>{{items[0].price}}</span>
          <input type="text" v-model=apples_temp>
          <button>Buy</button>
        </li>
        <li>
          <span>{{items[1].name}}</span>
          <span>{{items[1].price}}</span>
          <input type="text" v-model=bananas_temp>
          <button>Buy</button>
        </li>
        <li>
          <span>{{items[2].name}}</span>
          <span>{{items[2].price}}</span>
          <input type="text" v-model=oranges_temp>
          <button>Buy</button>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      "wallet_temp": 0,
      "apples_temp": 0,
      "bananas_temp": 0,
      "oranges_temp": 0,
    }
  },
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
    transferToBank(n) {
      if (this.player.wallet >= n ) {
        this.$store.commit('subtractWallet', n);
        this.$store.commit('addBank', n);
      } else {
        // We should throw an error here and show a better message to the user
        alert("Not enough cash")
        this.wallet_temp = this.player.wallet
      }
    },
    transferToWallet(n) {
      if (this.player.bank >= n ) {
        this.$store.commit('addWallet', n);
        this.$store.commit('subtractBank', n);
      } else {
        // We should throw an error here and show a better message to the user
        alert("Not enough cash")
        this.wallet_temp = this.player.bank
      }
    },

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
