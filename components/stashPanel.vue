<template>
  <aside>
    <h2>Stash</h2>
    <table>
      <tr>
        <td>Items</td>
        <td class="text-align:right">Items</td>
        <td class="text-align:right">Quantity</td>
      </tr>
      <tr>
        <td>Apples</td>
        <td class="text-align:right">{{player.stash.apples}}</td>        
        <td>
          <input type="text" v-model=askList[0].sell />
          <button @click="sellItem(player.currentArea.items[0].name, player.currentArea.items[0].price, askList[0].sell)">Sell</button>
        </td>
      </tr>
      <tr>
        <td>Bananas</td>
        <td class="text-align:right">{{player.stash.bananas}}</td>        
        <td>
          <input type="text" v-model=askList[1].sell />
          <button @click="sellItem(player.currentArea.items[1].name, player.currentArea.items[1].price, askList[1].sell)">Sell</button>
        </td>
      </tr>
      <tr>
        <td>Oranges</td>
        <td class="text-align:right">{{player.stash.oranges}}</td>        
        <td>
          <input type="text" v-model=askList[2].sell />
          <button @click="sellItem(player.currentArea.items[2].name, player.currentArea.items[2].price, askList[2].sell)">Sell</button>
        </td>
      </tr>
    </table>
  </aside>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        askList: [
          {"sell": 0},
          {"sell": 0},
          {"sell": 0},
        ]
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