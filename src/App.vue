<template>
    <div id="app">
        <v-app>

            <Header />

            <v-main>
                <router-view/>
            </v-main>

            <Footer />

        </v-app>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
main {
  margin-top: 24px;
}
.container {
  padding: 0;
}
</style>
