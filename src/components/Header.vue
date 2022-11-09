<template>
  <v-container>

    <v-app-bar
        app
        dark
        color="blue darken-3"
        elevation="6"
        elevate-on-scroll
    >
        <router-link to="/">
            <v-toolbar-title class="text">
                <v-btn text>
                    <v-icon x-large>mdi-alpha-t-box-outline</v-icon>
                    <span class="text-h6 d-none d-sm-flex">technesis</span>
                </v-btn>
            </v-toolbar-title>
        </router-link>
        <v-spacer/>

        <router-link
          v-for="item in items"
          :key="item.id"
          v-bind:to="item.path"
        >
            <v-btn text>
                <v-icon>{{ item.icon }}</v-icon>
                <span class="pl-1 d-none d-sm-flex">{{ item.title }}</span>
            </v-btn>
        </router-link>

    </v-app-bar>

  </v-container>

</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      items: [
        {
          path: '/',
          icon: 'mdi-home',
          title: 'Главная'
        },
        {
          path: '/about',
          icon: 'mdi-account',
          title: 'О нас'
        },
        {
          path: '/contact',
          icon: 'mdi-phone',
          title: 'Контакты'
        }
      ]
    }
  }
}
</script>

<style scoped>

.v-application a {
  color: white;
  text-decoration: none;
}
.v-application a:hover {
  color: #FFF9C4;
}
.v-btn {
  padding: 0 8px!important;
  letter-spacing: 0;
}
</style>
