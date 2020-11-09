<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col d-flex justify-content-center align-content-center">
        <div>
          <h2>
            <strong>Delicios Food Menu,</strong><br />
            in your mind
          </h2>
          <p>Makanan Lezat sedang menunggu mu di depan</p>
          <router-link class="btn btn-success btn-border-none" to="/"
            >Pesan</router-link
          >
        </div>
      </div>
      <div class="col">
        <img :src="hero" :alt="hero" width="500px" />
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