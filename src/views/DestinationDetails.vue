<template>
  <!-- <h2>Hello the destination is: {{ this.$route.params.id }}</h2> -->
  <!-- show the id of the destination with this.$route.params.id -->
  <!-- After we want to print destination details instead of id -->
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  // we need to retrieve the value from the params of the destination.id
  data() {
    return {
      destinationId: this.$route.params.id
      // destinationId: Number(this.$route.param.id)
    };
  },
  // We need computed properties to define data but with some custom logic
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.id == this.destinationId
        // this allow to check if id of the destination is equal to the one we get in the params
      );
    }
  }
};
</script>
