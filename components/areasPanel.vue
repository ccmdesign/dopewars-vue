<template>
  <div>
    <h2>Items</h2>
    <table>
      <tr>
        <td>Items</td>
        <td class="text-align:right">Price</td>
        <td class="text-align:right">Quantity</td>
      </tr>
      <tr>
        <td>{{player.currentArea.items[0].name}}</td>
        <td class="text-align:right">{{player.currentArea.items[0].price}}</td>
        <td>
          <input type="text" v-model=askList[0].buy />
          <button @click="buyItem(player.currentArea.items[0].name, player.currentArea.items[0].price, askList[0].buy)">Buy</button>
        </td>
      </tr>
      <tr>
        <td>{{player.currentArea.items[1].name}}</td>
        <td class="text-align:right">{{player.currentArea.items[1].price}}</td>
        <td>
          <input type="text" v-model=askList[1].buy />
          <button @click="buyItem(player.currentArea.items[1].name, player.currentArea.items[1].price, askList[1].buy)">Buy</button>
        </td>
      </tr>
      <tr>
        <td>{{player.currentArea.items[2].name}}</td>
        <td class="text-align:right">{{player.currentArea.items[2].price}}</td>
        <td>
          <input type="text" v-model=askList[2].buy />
          <button @click="buyItem(player.currentArea.items[2].name, player.currentArea.items[2].price, askList[2].buy)">Buy</button>
        </td>
      </tr>
    </table>
  </div>  
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        askList: [
          {"buy": 0},
          {"buy": 0},
          {"buy": 0},
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
      buyItem(asset, price, n) {
        this.$store.commit('buyAsset', {
          asset: asset,
          price: price,
          n: n
        });
        n = 0;
      },

      ...mapMutations({
        buyAsset: 'buyAsset',
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>