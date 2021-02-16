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
        <td>{{items[0].name}}</td>
        <td class="text-align:right" @change_area="calcPrice(items[0].priceMax, items[0].priceMin)">{{ calcPrice(items[0].priceMax, items[0].priceMin) }}</td>
        <td>
          <input type="text" v-model=buy_0>
          <button @click="buyItem(items[0].name, items[0].price, buy_0)">Buy</button>
        </td>
      </tr>
      <tr>
        <td>{{items[1].name}}</td>
        <td class="text-align:right" @change_area="calcPrice(items[1].priceMax, items[1].priceMin)">{{ calcPrice(items[1].priceMax, items[1].priceMin) }}</td>
        <td>
          <input type="text" v-model=buy_1>
          <button @click="buyItem(items[1].name, items[1].price, buy_1)">Buy</button>
        </td>
      </tr>
      <tr>
        <td>{{items[2].name}}</td>
        <td class="text-align:right" @change_area="calcPrice(items[2].priceMax, items[2].priceMin)">{{ calcPrice(items[2].priceMax, items[2].priceMin) }}</td>
        <td>
          <input type="text" v-model=buy_2>
          <button @click="buyItem(items[2].name, items[2].price, buy_2)">Buy</button>
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
        "buy_0": 0,
        "buy_1": 0,
        "buy_2": 0,
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
      calcPrice(name, max, min) {
        var x = Math.floor(Math.random() * (max - min) + min);
        return x;
      },

      buyItem(asset, price, n) {
        this.$store.commit('buyAsset', {
          asset: asset,
          price: price,
          n: n
        });
      },

      ...mapMutations({
        buyAsset: 'buyAsset',
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>