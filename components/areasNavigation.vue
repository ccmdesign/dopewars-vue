<template>
  <nav>
    <li v-for="area in areas" :key="area.name" >
      <input :id=area.name @change="changeArea(current)" type="radio" v-model="current" :value="area.name" />
      <label :for=area.name >{{area.name}}</label>
    </li>
  </nav>
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        current: ''
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
      changeArea(current) {
        this.$emit('change_area', current);
        this.$store.commit('changeArea', {
          area: current,
        });
      },
      ...mapMutations({
      })
    }
  }
</script>

<style scoped>
  input:checked + label {
    background-color: black;
    color: white;
  }

  nav {
    display: flex;
  }

  label {
    padding: .5rem 1rem;
  }

  input {
    display: none;
  }

  li {
    list-style: none;
  }
</style>