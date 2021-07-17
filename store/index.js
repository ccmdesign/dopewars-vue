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
      "specialEventChance": 20,
      "pockets": {
        "capacity": 200,
        "used": 0,
      },
      "currentArea": {
        'image': false,
        'name': 'Detroit',
        'items': [
          
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
    "specialEvents": [
      {
        "name": "Apple Day",
        "description": "Apples are cheap",
        "asset": "Apples",
        "variation": 0.3 
      }, 
      {
        "name": "Orange Craze",
        "description": "Orange prices are higher than usual",
        "asset": "Oranges",
        "variation": 2 
      }, 
      {
        "name": "Banana Craze",
        "description": "Banana prices are crazy high!",
        "asset": "Bananas",
        "variation": 4 
      },
      { 
        "name": "Sumo Day",
        "description": "Sumo prices are super low",
        "asset": "Sumo",
        "variation": 0.1 
      },
      { 
        "name": "Strawberry Craze",
        "description": "Strawberries are more expensive than usual",
        "asset": "Strawberries",
        "variation": 2 
      },
      { 
        "name": "Blueberry Day",
        "description": "Blueberries are crazy cheap!",
        "asset": "Blueberries",
        "variation": 0.3  
      },
      { 
        "name": "Blueberry Craze",
        "description": "Blueberries are expensive",
        "asset": "Blueberries",
        "variation": 3 
      },
      { 
        "name": "Orange Craze",
        "description": "Oranges are crazy expensive",
        "asset": "Oranges",
        "variation": 8 
      },
      { 
        "name": "Orange Day",
        "description": "Oranges are super cheap",
        "asset": "Oranges",
        "variation": 0.1 
      }
    ]
});

export const mutations = {
  changeArea(state, payload) {
    if (state.player.currentDay >= state.player.maxDays) {
      var answer = window.confirm("Game Over \n Play again?");
      if (answer) {
        this.$router.go()
      }
      else {
        window.location.href = '/';   
      }
      

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
