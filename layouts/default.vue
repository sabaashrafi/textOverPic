<template class="bg-body">
  <v-app >
    <v-container>
      <transition name="slide-fade">
        <nuxt />
      </transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.theme--light.v-application {
    background: #E0F7FA !important;
    color: rgba(0, 0, 0, 0.87);
}

</style>
