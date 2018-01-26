<!-- Шаблон -->
<template>
  <div class="main">
    <div class="rating">
      <rating :grade="3"></rating>
    </div>
  </div>
</template>

<!-- Скрипты - логика -->
<script>
// импортируем файл Rating.vue
import Rating from './components/Rating.vue'

// экспортируем наш код js
export default {
  name: 'app',
  data () { // переменные
    return {
      grade: 0 // начальная заказа
    }
  },
  components: { // компоненты
    Rating
  }
}

</script>

<!-- Стили на языке scss -->
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
