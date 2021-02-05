<template>
  <div id="app">
    <TheNavigation></TheNavigation>
    <router-view :key="$route.path" />
    <!-- the key is to tell the router to reload the DestinationDetails
    accordingly to the change of the route. Otherwise the component is not
    loaded when we change the route -->
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
