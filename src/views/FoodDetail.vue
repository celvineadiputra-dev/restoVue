<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <img
          :src="'images/' + food.image"
          :alt="'Photo' + food.food_name"
          class="img-fluid rounded shadow"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <h1>
          {{ food.food_name }}
        </h1>
        <h5>
          Harga :
          <span class="font-weight-bold"
            >Rp. {{ food.price }}/ {{ food.satuan }}</span
          >
        </h5>
        <div class="mt-5">
          <div class="form-group">
            <label>Jumlah Beli</label>
            <input type="number" class="form-control" />
          </div>
          <div class="form-group">
            <label>Jumlah Keterangan</label>
            <textarea class="form-control"></textarea>
          </div>

          <button class="btn btn-success">Pesan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FoodDetail",
  data() {
    return {
      food: null,
    };
  },
  methods: {
    setFood(res) {
      this.food = res;
      console.log(res);
    },
  },
  mounted() {
    axios
      .get(`${this.$base_url}products/${this.$route.params.id}`)
      .then((response) => this.setFood(response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>