<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Daftar Makanan</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="form-group">
          <input
            type="text"
            v-model="searchKey"
            @keyup="searchFood"
            placeholder="Nasi goreng"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12 mt-4" v-for="item in foods" :key="item.id">
        <CardProduct :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardProduct from "@/components/cardProduct";
export default {
  name: "Foods",
  components: {
    CardProduct,
  },
  data() {
    return {
      foods: [],
      searchKey: "",
    };
  },
  methods: {
    setFoods(data) {
      console.log(data);
      this.foods = data;
    },
    searchFood() {
      axios
        .get(`${this.$base_url}products?q=${this.searchKey}`)
        .then((res) => this.setFoods(res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get(`${this.$base_url}products`)
      .then((res) => this.setFoods(res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>