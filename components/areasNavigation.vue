<template>
<div class="base-panel">
  <nav>
    <li v-for="area in areas" :key="area.name">
      <input :id=area.name @change="changeArea(currentName)" type="radio" v-model="currentName" :value="area.name" />
      <label :for=area.name class="nav-button">{{area.name}}</label>
    </li>
  </nav>
</div>
  
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        currentName: '',
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
      specialEvents() {
        return this.$store.state.specialEvents
      }
    },
    methods: {
      calcPrice(max, min) {
        var x = Math.floor(Math.random() * (max - min) + min);
        return x;
      },

      changeArea(currentName) {
        const current = {};
        current.name = currentName;
        current.items = [];

        // Rolls the Special Event chance
        var eventChance = Math.floor(Math.random() * 100);
        var priceMultiplier = 1;
        var ev = false;
        
        this.$emit('special_event', false);
          
        if (eventChance <= this.player.specialEventChance) {
          var eventGenerator = Math.floor(Math.random() * this.specialEvents.length);
          ev = this.specialEvents[eventGenerator];
        }

        for (var i = 0; i < this.items.length; i++) {
          var min = this.items[i].priceMin;
          var max = this.items[i].priceMax;
          var x = {};
          x.name = this.items[i].name;
          x.specialEvent = false;

          if (ev.asset && this.items[i].name == ev.asset) {
            priceMultiplier = ev.variation;
            x.specialEvent = {};
            x.specialEvent.name = ev.name;
            x.specialEvent.description = ev.description;
            x.specialEvent.asset = ev.asset;
            x.specialEvent.variation = ev.variation;
            
            this.$emit('special_event', ev);
          } 
          x.price = Math.floor((Math.random() * (max - min) + min) * priceMultiplier + 1);
          x.priceMin = this.items[i].priceMin;
          x.priceMax = this.items[i].priceMax;
          current.items.push(x);
          priceMultiplier = 1;
        }

        this.$emit('change_area', current.name);
        this.$store.commit('changeArea', {
          name: current.name,
          items: current.items
        });

      },
      ...mapMutations({
      })
    },
    mounted () {
      this.changeArea(this.player.currentArea.name);
    },
  }
</script>

<style scoped>
  input:checked + label {
  }

  .nav-button {
    font-weight: 800;
    text-transform: uppercase;
    font-size: 120%;
    padding: var(--s-2) var(--s0);
    cursor: pointer;
  }

  .nav-button:hover {
    border-bottom: 4px solid var(--accent-color);
  }


  nav {
    display: flex;
    gap: var(--s1);
  }

  label {
  }

  input {
    display: none;
  }

  li {
    list-style: none;
  }
</style>
