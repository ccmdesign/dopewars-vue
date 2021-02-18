import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
    "player": {
      "wallet": 1000,
      "bank": 0,
      "currentArea": {
        'name': 'kits',
        'items': [
          { 
            "name": "apples",
            "price": 0
          },
          { 
            "name": "bananas",
            "price": 0
          },
          { 
            "name": "oranges",
            "price": 0
          },
        ]
      },
      "stash": {
        "apples": 0,
        "bananas": 0,
        "oranges": 0
      },
    },
    "areas": [
      { 
        "name": "kits"
      },
      { "name": "west end" },
      { "name": "downtown" },
    ],
    "items": [
      { 
        "name": "apples",
        "priceMax": 10,
        "priceMin": 5
      },
      { 
        "name": "bananas",
        "priceMax": 5,
        "priceMin": 1
      },
      { 
        "name": "oranges",
        "priceMax": 16,
        "priceMin": 8
      },
    ],
});

export const mutations = {
  changeArea(state, payload) {
    state.player.currentArea.name = payload.name;
    state.player.currentArea.items = payload.items;
  },
  transferToBank(state, n) {
    if (state.player.wallet >= n ) {
      n = parseInt(n);
      state.player.wallet -= n;
      state.player.bank += n;
    } else {
      // We should throw an error here and show a better message to the user
      alert("Not enough cash")
    }
  },
  transferToWallet(state, n) {
    if (state.player.bank >= n ) {
      n = parseInt(n);
      state.player.wallet += n;
      state.player.bank -= n;
    } else {
      // We should throw an error here and show a better message to the user
      alert("Not enough cash")
    }
  },
  buyAsset(state, payload) {
    var n = parseInt(payload.n);
    var p = parseInt(payload.price);
    var amount = n * p;
    
    if (state.player.wallet >= amount) {
      state.player.stash[payload.asset] += n;
      state.player.wallet -= amount;
    } else {
      alert('Not enough cash');
    }
  },
  sellAsset(state, payload) {
    var n = parseInt(payload.n);
    var p = parseInt(payload.price);
    var amount = n * p;

    if (state.player.stash[payload.asset] >= n) {
      state.player.stash[payload.asset] -= n;
      state.player.wallet += amount;
    } else {
      alert('Not enough items');
    }
  },


}