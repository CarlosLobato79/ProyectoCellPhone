<template>
  <div class="row justify-around items-center desktop-only">
    <!-- Precio Hasta Desktop -->
    <fieldset class="col-5 q-pa-sm row justify-around items-center">
      <legend></legend>
      <span>Precio:</span>
      <q-input
        prefix="$"
        type="number"
        input-style="width: 45px"
        v-model="text"
        dense
      />
      <span>Hasta:</span>
      <q-input
        prefix="$"
        type="number"
        input-style="width: 45px"
        v-model="text"
        dense
      />
    </fieldset>
    <!-- Ordenar Por Desktop-->
    <fieldset class="col-5 q-pa-sm row justify-around items-center">
      <legend></legend>
      <span>Ordenar Por:</span>
      <q-btn icon="fa-solid fa-arrow-down" color="primary"> Precio </q-btn>
      <q-btn color="primary">Fecha</q-btn>
    </fieldset>
  </div>
  <!-- Ordenar Por Mobile -->
  <div class="mobile-only row justify-around">
    <fieldset class="col col-7 q-pa-sm row justify-around items-center">
      <legend></legend>
      <span>Ordenar Por:</span>
      <q-select filled v-model="model" :options="options" dense />
    </fieldset>
    <!-- <q-btn>
      <i class="fa-sharp fa-solid fa-filter">btn</i>
    </q-btn> -->
    <q-btn-dropdown color="primary" icon="fa-solid fa-filter">
      <FiltroChecks class="bg-blue q-pa-sm"></FiltroChecks>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import FiltroChecks from "./FiltroChecks.vue";

export default defineComponent({
  name: "Fitro-Tipo",
  components: {
    FiltroChecks,
  },
  setup() {
    return {
      info: null,
      model: ref("Google"),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
});
</script>

<style scoped>
fieldset {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 4px;
}
</style>
