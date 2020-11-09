<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <Hero />
        </div>
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
