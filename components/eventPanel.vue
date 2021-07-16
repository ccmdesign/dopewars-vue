<template>
  <div v-if="notification" class="event-notification">
    <div class="center">
      <h2><strong>{{ notification.name }}</strong> | {{ notification.description }}</h2>
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
    methods: {
      
    },
    computed: {
      player() {
        return this.$store.state.player
      },
      
      notification() {
        const items = this.player.currentArea.items;
        let x = false;

        for (var i = 0; i < items.length; i++) {
          if (items[i].specialEvent) {
            x = {};
            x.asset = items[i].specialEvent.asset;
            x.name = items[i].specialEvent.name;
            x.description = items[i].specialEvent.description;
            x.variation = items[i].specialEvent.variation;
            return x;
          }
        }
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

  h2 { 
    font-size: 1.5rem; 
    font-weight: normal;
  }
  
</style>
