<template>
  <v-container>

    <h1>Main Page</h1>
    <h3 class="mb-4">Список экскурсий</h3>

    <v-card
      v-for="trip in trips"
      :key="trip.id"
      class="d-flex flex-column justify-start"
    >
      <v-card-title class="font-weight-bold">
        {{ trip.title }}
      </v-card-title>
      <v-card-text>
        <ul class="d-flex justify-start">
          <li class="d-flex flex-nowrap">
            <v-icon small>mdi-star-outline</v-icon>
            <span>&nbsp;{{ trip.rating }}</span>
          </li>
          <li class="dot">&#183;</li>
          <li class="d-flex flex-nowrap">
            <span>{{ trip.type }}</span>
          </li>
          <li class="dot">&#183;</li>
          <li class="d-flex flex-nowrap">
            <v-icon small>mdi-bus</v-icon>
            <span>&nbsp;{{ trip.transfer }}</span>
          </li>
          <li class="dot">&#183;</li>
          <li class="d-flex flex-nowrap">
            <span>{{ trip.date }}</span>
          </li>
          <li class="dot">&#183;</li>
          <li class="d-flex flex-nowrap">
            <v-icon small>mdi-clock-outline</v-icon>
            <span>&nbsp;{{ trip.hours }} часов</span>
          </li>
          <li class="dot">&#183;</li>
          <li class="">
            <v-icon small>mdi-account</v-icon>
            <span>&nbsp;до {{ trip.maxPersons }}</span>
          </li>
        </ul>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      trips: [
        {
          title: '"Город сыра и мира"',
          rating: 5,
          type: 'Историческая',
          transfer: 'На автобусе',
          date: '28 марта',
          hours: 9,
          maxPersons: 49
        },
        {
          title: 'Экскурсия в национальный парк "Куршская коса"',
          rating: 5,
          type: 'Обзорная',
          transfer: 'На автобусе',
          date: '25 марта',
          hours: 6,
          maxPersons: 49
        },
        {
          title: '"О кирхах, рыцарях и замках"',
          rating: 5,
          type: 'Историческая',
          transfer: 'На автобусе',
          date: '29 марта',
          hours: 6,
          maxPersons: 49
        },
        {
          title: 'Экскурсия в Янтарный',
          rating: 5,
          type: 'Историческая',
          transfer: 'На автобусе',
          date: '29 марта',
          hours: 6,
          maxPersons: 49
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-card {
  overflow: hidden;
}
.v-card__text {
  max-width: auto;
}
.v-card__title {
  white-space: nowrap;
  text-overflow: ellipsis;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  overflow: hidden;
  max-width: 100%;
  max-height: 24px;
}
li {
  display: inline-block;
  align-items: center;
  margin: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;

}
a {
  color: #42b983;
}
.v-card:hover {
  color: #E65100;
  cursor: pointer;
}
.v-card:hover .v-card__text .v-icon{
  color: #E65100;
}
.v-card:hover > .v-card__text {
  color: #E65100;
}
.dot {
  font-weight: 800;
  font-size: 32px;
  margin: 0;
}
</style>
