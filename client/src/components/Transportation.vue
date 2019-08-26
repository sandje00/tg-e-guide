<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(category,i) in categories"
      :key="i"
    >
      <v-expansion-panel-header>{{category}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  export default {
    data() {
      return {
        categories: [
          'Bus lines',
          'Boat lines'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
