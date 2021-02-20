<template>
  <div class="base-panel">
    <h2>Money <span>{{player.wallet}}</span></h2>
    <table>
      <tr>
        <td>Loan</td>
        <td class="text-align:right all">{{player.loan}}</td>
        <td>
          <div class="trade-button">
            <input type="text" v-model=pay_temp>
            <input type="submit" @click="payLoan(pay_temp)" value="Pay">
          </div>
        </td>
      </tr>
      <tr>
        <td>Bank</td>
        <td class="text-align:right all">{{player.bank}}</td>
        
        <td>
          <div class="trade-button">
            <input type="text" v-model=wallet_temp>
            <input type="submit" @click="deposit(wallet_temp)" value="Deposit" />
            <input type="submit" @click="withdraw(wallet_temp)" value="Withdraw" />
          </div>
        </td>
      </tr>
      <tr>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        "wallet_temp": 0,
        "pay_temp": 0,
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
        transferToWallet: 'transferToWallet',
        payLoan: 'payLoan',
      })
    }
  }
</script>

<style lang="scss" scoped>
  h2 { padding: 0 var(--s0);}
  h2 > span { float:right;}
</style>