<template>
  <div class="event-notification">
    <div v-if="player.specialEvent.event.name" class="center">
      <h1>{{ player.specialEvent.event.name }}</h1>
      <p>{{ player.specialEvent.event.description }}</p>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        visible: true
      }
    },
    computed: {
      player() {
        return this.$store.state.player
      }
    }
  }
</script>

<style lang="scss" scoped>
  .event-notification {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: hsla(var(--accent-hsl), .9);
    color: var(--white-color);
    margin: var(--s0);
    box-shadow: 0 8px 16px hsla(var(--black-hsl), .6);

    > div { padding: var(--s1); }
  }

  h1 { font-size: 1.5rem; }
  
</style>
