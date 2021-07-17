<template>
  <div class="intro | stack">
    <hgroup data-bg="accent">
      <h1>Welcome to the Farmer's Market Game</h1>
    </hgroup>
    <hgroup class="stack" data-bg="base">
      <h3>This is an arbitrage game.</h3>
      <h3>It's about buying low and selling high.</h3>
      <h3>But be careful, unexpected things happen in the crazy world of fruits!</h3>
    </hgroup>
    <NuxtLink class="button button--large button--accent-color button--primary" to="game/">Start the game</NuxtLink>
    

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .intro {
    height: 100vh;
    align-items: center;
    // justify-content: center;
    background-image: url('~assets/images/shelley-pauls-kuR1Kwo4my4-unsplash.jpg');
    background-size: cover;
  }

  hgroup {
    padding: var(--s2);
    text-align: center;
    color: var(--white-color);
  }

  hgroup:first-child {
    margin-top: 10vh;
  }

  [data-bg="accent"] { background-color: hsla(var(--accent-hsl), .9); }
  [data-bg="base"] { background-color: hsla(var(--base-hsl), .9); }

  .button--large {
    padding: var(--s1) var(--s2);
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
</style>
