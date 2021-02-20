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
        
        
        for (var i = 0; i < this.items.length; i++) {
          var min = this.items[i].priceMin;
          var max = this.items[i].priceMax;
          var x = {};
          x.name = this.items[i].name;
          x.price = Math.floor(Math.random() * (max - min) + min);
          current.items.push(x);
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