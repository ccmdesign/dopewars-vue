<template>
  <div class="base-panel">
    <table>
      <thead>
        <tr>
          <th>Items</th>
          <!-- <th class="text-align:right">Min/Max</th> -->
          <th class="text-align:right">Price</th>
          <th class="text-align:right">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in player.currentArea.items" :key="item.name" :data-highlight="item.specialEvent != false ? true : false">
          <td class="all">{{item.name}}</td>
          <!-- <td class="text-align:right">{{item.priceMin}} - {{item.priceMax}}</td> -->
          <td class="text-align:right">{{item.price}}</td>
          <td>
            <div class="trade-button" data-inverted >
              <input type="text" v-model=askList[index] />
              <input type="submit" @click="buyItem(item.name, item.price, askList[index])" value="Buy" />
            </div>
          </td>
        </tr>
      </tbody>
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
      highlight(item) {
        
      },
      ...mapMutations({
        buyAsset: 'buyAsset',
      })
    }
  }
</script>

<style lang="scss" scoped>
tr[data-highlight] {
  color: var(--accent-color);
  font-weight: bold;
  background: linear-gradient(to right, hsla(var(--accent-hsl), .2), hsla(var(--accent-hsl), .0));
}
</style>
