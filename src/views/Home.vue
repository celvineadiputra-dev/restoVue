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
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";

export default {
  name: "Home",
  components: {
    Hero,
  },
};
</script>
