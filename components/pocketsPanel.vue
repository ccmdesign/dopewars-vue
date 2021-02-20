<template>
  <div class="pockets-panel base-panel">
    <h2>Stash <span>{{ player.pockets.used }}/{{ player.pockets.capacity }}</span></h2>
  </div>
</template>

<script>
  export default {
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

<style lang="scss" scoped>
  .pockets-panel {
    display: flex;
    height: 100%;
    background-color: hsla(var(--black-hsl), .1);
    align-items: center;

    > h2 {
      font-size: 130%;
      padding: 0 var(--s0);
      width: 100%;
    }

    > h2 > span {
      display: inline-block;
      float: right;
    }
  }

</style>