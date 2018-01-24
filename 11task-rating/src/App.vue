<template>
  <div class="main">
    <div class="rating">
      <rating :grade="3"></rating>
    </div>
  </div>
</template>

<script>
import Rating from './components/Rating.vue'

export default {
  name: 'app',
  data () {
    return {
      grade: 0
    }
  },
  components: {
    Rating
  }
}
</script>

<style lang="scss">
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
