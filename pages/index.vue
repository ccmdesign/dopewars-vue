<template>
  <div class="container">
    <div class="main">
      <player-profile />

      <div class="areas margin-top:auto">
        <areas-navigation />
      </div>
    </div>

    <div class="main">
      <stash-panel />
      <areas-panel />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import playerProfile from '@/components/playerProfile'
import areasNavigation from '@/components/areasNavigation'
import stashPanel from '@/components/stashPanel'

export default {
  components: {
    playerProfile,
    areasNavigation,
    stashPanel
  },
  data() {
    return {
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
  
    
}

</script>

<style>
body {
  font-size: 24px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1000px;
}

.main {
  display: flex;
}


button + button {
  margin-left: 1rem;
}
.main > * + * {
  margin-left: 2rem;
}

h2 {
  margin-top: 2rem;
}

table {
  border-collapse: collapse;
}

td {
  width: 150px;
  padding: .5rem;
  vertical-align: baseline;
  border-bottom: 1px solid #000;
}

td > input {
  text-align: right;
  width: 60px;
  padding: .5rem;
  font-size: 24px;
}

td > button {
  margin-left: .5rem;
}

.container > pre {
  width: 800px;
  text-align: left;
}

.text-align\:right {
  text-align: right;
}
.margin-top\:auto {
  margin-top:auto;
}

button {
  padding: .75rem .6rem .5rem;
  font-size: 20px;
}
</style>
