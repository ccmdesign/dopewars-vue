<template>
  <table>
    <tr>
      <td><h2>Money</h2></td>        
      <td></td>
      <td><input type="text" v-model=wallet_temp></td>
    </tr>
    <tr>
      <td>Wallet</td>
      <td class="text-align:right">{{player.wallet}}</td>
      <td><button @click="withdraw(wallet_temp)">Withdraw</button></td>
    </tr>
    <tr>
      <td>Bank</td>
      <td class="text-align:right">{{player.bank}}</td>
      
      <td><button @click="deposit(wallet_temp)">Deposit</button></td>
    </tr>
    <tr>
    </tr>
  </table>
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        "wallet_temp": 0,
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
      deposit(n) {
        this.$store.commit('transferToBank', n);
      },
      withdraw(n) {
        this.$store.commit('transferToWallet', n);
      },
      ...mapMutations({
        transferToBank: 'transferToBank',
        tarnsferToWallet: 'tarnsferToWallet',
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>