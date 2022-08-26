<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Cards',
  computed: {
    ...mapState(["name_product","products"])
  },
  methods: {
    ...mapActions(["search"])
  },
  created() {
    this.search()
  }
}

</script>


<template>
  <div class="container">
    <div v-for="product of products" class="card" :key="product.name">
      <img :src="product.image" />
      <h2>{{ product.name }}</h2>
      <h1>{{ product.value }}</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto;

  gap: 10px;
  width: 100%;
}

.card {
  width: 200px;
  margin: 20px auto 20px 85px;
}

.card>img {
  width: 200px;
  border: 2px solid #ccc;
  box-sizing: border-box;
  border-color: #D9D9D9;
}

.card>h2 {
  font-weight: 250;
  font-size: 20px;
  font-family: "Noto Sans", Calibri, Arial, sans-serif;
}

.card>h1 {
  font-size: 25px;
  font-family: "Noto Sans", Calibri, Arial, sans-serif;
  font-weight: bold;
}
</style>
