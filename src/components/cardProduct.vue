<template>
  <div class="card">
    <img src="/" class="card-img-top" alt="" />
    <div class="card-body">
      <div class="card-title">{{ product.food_name }}</div>
      <div class="card-text">{{ product.food_name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carProduct",
  props: ["product"],
};
</script>

<style>
</style>