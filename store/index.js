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
  }

}