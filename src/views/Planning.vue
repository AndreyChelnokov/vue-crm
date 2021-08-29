<template>
  <div>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>12 212</h4>
    </div>

    <section>
      <div v-for="cat in categorieList" :key="cat.id">
        <p>
          <strong>{{ cat.title }}:</strong>
          0 из {{ cat.limit }}
        </p>
        <div class="progress" >
          <div
              class="determinate green"
              style="width:40%"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    computed: {
      categorieList() {
        return this.$store.state.categorieList
      }
    }
  }
</script>
