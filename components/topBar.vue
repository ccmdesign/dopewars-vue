<template>
  <div class="top-bar">
    <h1>Farmer's Markets</h1>
    <h3>Day {{player.currentDay}}/{{player.maxDays}}</h3>
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
  .top-bar {
    background-color: hsla(var(--black-hsl), .9);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--s0) 0;
  }

  .top-bar h1 {
    padding: var(--s0);
    font-size: 150%;
  }

  .top-bar h3 {
    font-size: 130%;
  }

</style>
