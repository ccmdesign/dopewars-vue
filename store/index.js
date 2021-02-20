import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
    "player": {
      "wallet": 1000,
      "bank": 0,
      "loan": 1000,
      "interest": 1.02,
      "currentDay": 0,
      "maxDays": 30,
      "pockets": {
        "capacity": 100,
        "used": 0,
      },
      "currentArea": {
        'name': 'Detroit',
        'items': [
          { 
            "name": "Apples",
            "price": 0
          },
          { 
            "name": "Bananas",
            "price": 0
          },
          { 
            "name": "Oranges",
            "price": 0
          },
        ]
      },
      "stash": [
        { 
          "name": "Apples",
          "quantity": 0
        },
        { 
          "name": "Bananas",
          "quantity": 0
        },
        { 
          "name": "Oranges",
          "quantity": 0
        },
        { 
          "name": "Strawberries",
          "quantity": 0
        },
        { 
          "name": "Blueberries",
          "quantity": 0
        },
        { 
          "name": "Sumo",
          "quantity": 0
        },
      ]
    },
    "areas": [
      { 
        "name": "Detroit",
        "image": "doug-zuba-6Yp99zMrsAI-unsplash.jpg"
      },
      { 
        "name": "Seattle",
        "image": "zhifei-zhou-QEob0Fp4rdg-unsplash.jpg" 
      },
      { 
        "name": "Chicago",
        "image": "sawyer-bengtson-tnv84LOjes4-unsplash.jpg"
      },
      {
        "name": "NYC"
      }
    ],
    "items": [
      { 
        "name": "Apples",
        "priceMax": 10,
        "priceMin": 5
      },
      { 
        "name": "Bananas",
        "priceMax": 5,
        "priceMin": 1
      },
      { 
        "name": "Oranges",
        "priceMax": 16,
        "priceMin": 8
      },
      { 
        "name": "Strawberries",
        "priceMax": 24,
        "priceMin": 10
      },
      { 
        "name": "Blueberries",
        "priceMax": 30,
        "priceMin": 10
      },
      { 
        "name": "Sumo",
        "priceMax": 100,
        "priceMin": 30
      },
    ],
});

export const mutations = {
  changeArea(state, payload) {
    if (state.player.currentDay >= state.player.maxDays) {
      alert("Game Over")
    }

    state.player.currentDay ++;
    state.player.loan = Math.floor(state.player.loan * state.player.interest);
    state.player.currentArea.name = payload.name;
    state.player.currentArea.items = payload.items;
    state.player.currentArea.image = payload.image;
    
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
  payLoan(state, n) {
    if (state.player.wallet >= n ) {
      n = parseInt(n);
      state.player.wallet -= n;
      state.player.loan -= n;
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
    const stash = state.player.stash
    const room = state.player.pockets.capacity - state.player.pockets.used
    var n = parseInt(payload.n);
    var p = parseInt(payload.price);
    var amount = n * p;

    console.log("room")
    console.log(room)
    console.log("n")
    console.log(n)

    
    if (state.player.wallet >= amount && room >= n) {
      for (var i = 0; i < stash.length; i++) {
        if (stash[i].name == payload.asset) {

          stash[i].quantity += n;
          state.player.wallet -= amount;
          state.player.pockets.used += n;
        }
      }
    } else {
      alert('Not enough cash or not enough room');
    }
  },

  sellAsset(state, payload) {
    const stash = state.player.stash;
    var n = parseInt(payload.n);
    var p = parseInt(payload.price);
    var amount = n * p;

    for (var i = 0; i < stash.length; i++) {
      
      if (stash[i].name == payload.asset) {
        if (stash[i].quantity >= n) {
          stash[i].quantity -= n;
          state.player.wallet += amount;
          state.player.pockets.used -= n;
        } else {
          alert('Not enough items');
        }
      } 
    }
  }
}