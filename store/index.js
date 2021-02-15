import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
    "player": {
      "wallet": 1000,
      "bank": 0,
      "stash": {
        "apples": 0,
        "bananas": 0,
        "oranges": 0
      },
    },
    "areas": [
      { "name": "kits" },
      { "name": "west end" },
      { "name": "downtown" },
    ],
    "items": [
      { 
        "name": "apples",
        "price": 10
      },
      { 
        "name": "bananas",
        "price": 5
      },
      { 
        "name": "oranges",
        "price": 7
      },
    ]
});

export const mutations = {
  addWallet(state, n) {
    n = parseInt(n);
    state.player.wallet = state.player.wallet + n;
  },
  subtractWallet(state, n) {
    n = parseInt(n);
    state.player.wallet = state.player.wallet - n;
  },
  addBank(state, n) {
    n = parseInt(n);
    state.player.bank = state.player.bank + n;
  },
  subtractBank(state, n) {
    n = parseInt(n);
    state.player.bank = state.player.bank - n;
  }
}