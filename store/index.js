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
      { "name": "apples" },
      { "name": "bananas" },
      { "name": "oranges" },
    ]
});

export const mutations = {
  addWallet(state, n) {
    state.player.wallet = state.player.wallet + n;
  },
  subtractWallet(state, n) {
    state.player.wallet = state.player.wallet - n;
  },
  addBank(state, n) {
    state.player.bank = state.player.bank + n;
  },
  subtractBank(state, n) {
    state.player.bank = state.player.bank - n;
  }
}