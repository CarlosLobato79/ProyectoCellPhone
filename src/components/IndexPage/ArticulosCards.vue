<template>
  <!-- Contenedor -->
  <q-page>
    <div class="row" style="height: 70vh; overflow-y: auto">
      <!-- Cards -->
      <li class="col-6 col-sm-3" v-for="n in 15" :key="n">
        <q-card class="my-card q-ma-xs">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-h6">{{ Titulo + n }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </q-card-section>
        </q-card>
      </li>
    </div>
    <!-- Paginacion -->
    <div class="q-pa-xl row justify-evenly items-center ">
      <!-- Paginador -->
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
        unelevated
        color="black"
        active-color="purple"
        class="col-12 col-sm-6 row justify-center"
      />
      <!-- Elementos por pagina -->
      <div class="desktop-only col-12 col-sm-6 q-pa-xs row inlin justify-center items-center ">
        <label class="q-mx-md">Articulos por pagina:</label>
        <q-select
          filled
          stack-label
          :dense="dense"
          v-model="model"
          :options="options"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Articulos-Cards",
  data() {
    return {
      Titulo: "Card N:",
    };
  },
  setup() {
    current: ref(10);
    return {
      model: ref("25"),
      options: ["25", "50", "75", "100"],
    };
  },
};
</script>

<style>
li {
  text-decoration: none;
  list-style: none;
}
</style>
