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
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  // we need to retrieve the value from the params of the destination.id
  data() {
    return {
      // destinationId: this.$route.params.id
      // if we want to show the slug aka the name of the destination
      // we might make some change to :
      slug: this.$route.params.slug
    };
  },
  // We need computed properties to define data but with some custom logic
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug == this.slug
        // this allow to check if id of the destination is equal to the one we
        // get in the params. But as we further continue we change it to slug to
        // match the destination name from the data and the path in index.js
        // we finish by going to home to change the params from id to slug too
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
