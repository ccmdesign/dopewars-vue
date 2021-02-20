<template>
  <div class="area-header" :data-image=player.currentArea.name >
    <h2>{{player.currentArea.name}}</h2>
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
  .area-header {
    display: flex;
    height: 100%;
    align-items: flex-end;
    background-size: cover;
    background-position: center bottom;
    padding: 0 0 0 var(--s1);
    transition: all .5s ease;
  }
  .area-header h2 {
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 800%;
    line-height: .70;
    transition: all .5s ease;
  }

  .area-header[data-image="Detroit"] {
    background-image: url('~assets/images/doug-zuba-6Yp99zMrsAI-unsplash.jpg');
  }
  .area-header[data-image="Chicago"] {
    background-image: url('~assets/images/sawyer-bengtson-tnv84LOjes4-unsplash.jpg');
  }
  .area-header[data-image="Seattle"] {
    background-image: url('~assets/images/zhifei-zhou-QEob0Fp4rdg-unsplash.jpg');
  }
  .area-header[data-image="NYC"] {
    background-image: url('~assets/images/oliver-niblett-wh-7GeXxItI-unsplash.jpg');
  }

</style>