<template>
  <div class="row q-pa-sm-xl q-pa-xl justify-evenly bg-blue">
    <span class="col-12 col-sm-4 bg-red">
      <ul>
        <li v-for="n in 5" :key="n">
          {{ "Descripcion: " + n }}
        </li>
      </ul>
    </span>
    <span class="col-12 col-sm-4 q-pa-lg">{{ Descripcion }}</span>
  </div>
  <div class="desktop-hide fixed-bottom row q-pa-xs justify-center">
    <q-btn class="q-mx-xs" color="primary" label="Inicio"></q-btn>
    <q-btn class="q-mx-xs" color="primary" label="Comprar"></q-btn>
  </div>
</template>

<script>
export default {
  name: "InfoArticulo",
  Descripcion: null,
  data() {
    return {
      Descripcion: "Pequena descripcion",
    };
  },
  setup() {},
};
</script>

<style scoped></style>
