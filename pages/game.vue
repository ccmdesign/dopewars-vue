<template>
  <div>
    <div class="grid">
      <div class="grid_top-bar">
        <top-bar />
      </div>
      <div class="grid_profile">
        <player-profile />  
      </div>
      <div class="grid_header">
          <div>
            <event-panel />
            <area-header />
          </div>
      </div>
      <div class="grid_pockets">
        <pockets-panel />
      </div>
      <div class="grid_navigation">
        <areas-navigation />
      </div>
      <div class="grid_stash">
        <stash-panel />
      </div>
      <div class="grid_areas">
        <areas-panel />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import playerProfile from '@/components/playerProfile'
import areasNavigation from '@/components/areasNavigation'
import stashPanel from '@/components/stashPanel'
import pocketsPanel from '@/components/pocketsPanel'
import areaHeader from '@/components/areaHeader'
import topBar from '@/components/topBar'
import eventPanel from '@/components/eventPanel'

export default {
  components: {
    playerProfile,
    areasNavigation,
    stashPanel,
    pocketsPanel,
    areaHeader,
    topBar,
    eventPanel
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
.grid {
  height: 100vh;
  grid-template-columns: 500px 5fr;
  grid-template-rows: 80px 1fr auto 2fr;
  gap: 0;
  grid-template-areas:
    "top-bar top-bar"
    "profile main-header"
    "sidebar-strip navigation"
    "sidebar-stash main-areas";
}

.grid_top-bar {
  grid-area: top-bar;
  background-color: var(--base-color);
  color: var(--white-color);
}

.grid_header {
  grid-area: main-header;
  position: relative;  
}

.grid_header > div { 
  display: flex;
  height: 100%;
}

.grid_profile {
  grid-area: profile;
  background-color: var(--base-color);
  color: var(--white-color);
}
.grid_pockets {
  grid-area: sidebar-strip;
  background-color: var(--base-color);
  color: var(--white-color);
}
.grid_navigation {
  grid-area: navigation;
}
.grid_stash {
  grid-area: sidebar-stash;
  background-color: var(--base-color);
  color: var(--white-color);
}
.grid_areas {
  grid-area: main-areas;
  background-color: hsla(var(--base-hsl), .05);
}
</style>
