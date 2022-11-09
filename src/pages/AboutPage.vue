<template>
  <v-container>
      <h1>About Page</h1>
      <h2>Our Mission</h2>
      <p>{{ text }}</p>
      <h2>Our Story</h2>
      <p>{{ text }}</p>
      <h2>Our Services</h2>
      <p>{{ text }}</p>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique, quam suscipit nihil eaque hic eius, ex, sunt quia culpa ab quasi laboriosam. Ipsum aliquam sequi beatae? Est, tempore quos?'
  })
}
</script>

<style>

</style>
