<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <Hero />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-12 d-flex justify-content-between">
          <div>
            <h2>Best <strong>Foods</strong></h2>
          </div>
          <div>
            <router-link to="/foods" class="btn btn-success btn-border-none">
              See All Best Foods
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4" v-for="item in products" :key="item.id">
          <CardProduct :product="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import CardProduct from "@/components/cardProduct";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      console.log(data);
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((res) => this.setProduct(res.data))
      .catch((err) => console.log(err));
  },
};
</script>
