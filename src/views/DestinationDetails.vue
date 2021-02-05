<template>
  <!-- <h2>Hello the destination is: {{ this.$route.params.id }}</h2> -->
  <!-- show the id of the destination with this.$route.params.id -->
  <!-- After we want to print destination details instead of id -->
  <div>
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
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <img
            :src="require(`@/assets/${experience.image}`)"
            :alt="experience.name"
          />
          <span class="card_text"> {{ experience.name }}</span>
        </div>
      </div>
    </section>
  </div>
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
      // slug: this.$route.params.slug
      // we can finally delete this line because we implement props
    };
  },
  // we set the props from the index.js
  props: {
    slug: {
      type: String,
      required: true
    }
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
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
