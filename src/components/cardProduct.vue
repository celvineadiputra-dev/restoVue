<template>
  <div class="card shadow my-4">
    <img :src="'images/' + product.image" class="card-img-top" alt="" />
    <div class="card-body">
      <h3 class="card-title font-weight-bold">
        {{ product.food_name }}
      </h3>
      <div class="card-text">
        <h6>Harga : {{ product.price }}/{{ product.satuan }}</h6>
      </div>
    </div>
    <div class="card-footer">
      <router-link :to="'/foods/' + product.id" class="btn btn-success w-100"
        >Pesan</router-link
      >
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