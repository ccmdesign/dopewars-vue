<template>
  <aside class="base-panel">
    <table>
      <thead>
        <tr>
          <th>Items</th>
          <th class="text-align:right w200">Quantity</th>
          <th class="text-align:right"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in player.stash" :key="item.name">
          <td class="all">{{item.name}}</td>
          <td class="text-align:right">{{item.quantity}}</td>
          <td>
            <div class="trade-button">
              <input type="text" v-model=askList[index] />
              <input type="submit" @click="sellItem(item.name, player.currentArea.items[index].price, askList[index])" value="Sell" />
            </div>
          </td>
          <td>
            
          </td>
        </tr>
      </tbody>
    </table>
  </aside>
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

<style lang="scss">

</style>
