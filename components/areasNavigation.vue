<template>
  <nav>
    <button v-for="area in areas" :key="area.name">{{area.name}}</button>
  </nav>
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
      ...mapMutations({
        transferToBank: 'transferToBank',
        tarnsferToWallet: 'tarnsferToWallet',
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>