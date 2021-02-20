<template>
  <div class="base-panel">
    <table>
      <tr>
        <td>Items</td>
        <td class="text-align:right">Price</td>
        <td class="text-align:right">Quantity</td>
      </tr>
      <tr v-for="(item, index) in player.currentArea.items" :key="item.name">
        <td class="all">{{item.name}}</td>
        <td class="text-align:right">{{item.price}}</td>
        <td>
          <div class="trade-button" data-inverted >
            <input type="text" v-model=askList[index] />
            <input type="submit" @click="buyItem(item.name, item.price, askList[index])" value="Buy" />
          </div>
          
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
        askList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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