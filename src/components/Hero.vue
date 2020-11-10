<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 oder-sm-1 order-md-2">
        <img :src="hero" :alt="hero" width="500px" class="img-fluid" />
      </div>
      <div
        class="col-md-6 order-sm-2 order-md-1 d-flex justify-content-center align-items-center"
      >
        <div>
          <h1>
            <strong>Delicios Food Menu,</strong><br />
            in your mind
          </h1>
          <p>Makanan Lezat sedang menunggu mu di depan</p>
          <router-link class="btn btn-success btn-border-none" to="/"
            >Pesan</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hero from "../../src/assets/image/Hero.svg";
export default {
  name: "Hero",
  data: function () {
    return {
      hero: hero,
    };
  },
};
</script>

<style>
</style>