<template>
  <aside>
    <h2>Stash</h2>
    <table>
      <tr>
        <td>Items</td>
        <td class="text-align:right">Price</td>
        <td class="text-align:right">Quantity</td>
      </tr>
      <tr>
        <td>Apples</td>
        <td class="text-align:right">{{player.stash.apples}}</td>
        <td><input type="text" v-model=sell_0><button @click="sellItem(items[0].name, items[0].price, sell_0)">Sell</button></td>
      </tr>
      <tr>
        <td>Bananas</td>
        <td class="text-align:right">{{player.stash.bananas}}</td>
        <td><input type="text" v-model=sell_1><button @click="sellItem(items[1].name, items[1].price, sell_1)">Sell</button></td>
      </tr>
      <tr>
        <td>Oranges</td>
        <td class="text-align:right">{{player.stash.oranges}}</td>
        <td><input type="text" v-model=sell_2><button @click="sellItem(items[2].name, items[2].price, sell_2)">Sell</button></td>
      </tr>
    </table>
  </aside>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        "sell_0": 0,
        "sell_1": 0,
        "sell_2": 0,
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
      sellItem(asset, price, n) {
        this.$store.commit('sellAsset', {
          asset: asset,
          price: price,
          n: n
        });
      },

      ...mapMutations({
        sellAsset: 'sellAsset'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>