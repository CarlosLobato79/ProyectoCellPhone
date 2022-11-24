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
        v-model="PrecioInicial"
        dense
      />
      <span>Hasta:</span>
      <q-input
        prefix="$"
        type="number"
        input-style="width: 45px"
        v-model="PrecioFinal"
        dense
        @update:model-value="$emit('RangePrice', PrecioInicial, PrecioFinal)"
      />
    </fieldset>
    <!-- Ordenar Por Desktop-->
    <fieldset class="col-5 q-pa-sm row justify-around items-center">
      <legend></legend>
      <span>Ordenar Por:</span>
      <q-btn
        icon="fa-solid fa-arrow-down"
        color="primary"
        label="Precio"
        @click="$emit('OrdP')"
      ></q-btn>
      <q-btn color="primary" label="Fecha" @click="$emit('OrdF')"></q-btn>
    </fieldset>
  </div>
  <!-- Ordenar Por Mobile -->
  <div class="mobile-only row justify-around">
    <fieldset class="col col-7 q-pa-sm row justify-around items-center">
      <legend></legend>
      <span>Ordenar Por:</span>
      <q-select
        filled
        v-model="modelDevice"
        :options="options"
        dense
        @update:model-value="$emit('Device', modelDevice)"
      />
    </fieldset>
    <!-- <q-btn>
      <i class="fa-sharp fa-solid fa-filter">btn</i>
    </q-btn> -->
    <q-btn-dropdown color="primary" icon="fa-solid fa-filter">
      <FiltroChecks
        @filtroCheck="(x) => guardarFiltro(x)"
        class="bg-blue q-pa-sm"
      ></FiltroChecks>
    </q-btn-dropdown>
  </div>
</template>
<script>

import { defineComponent } from "vue";
import { ref } from "vue";
import FiltroChecks from "./FiltroChecks.vue";

export default defineComponent({
  name: "Fitro-Tipo",
  filtros: null,
  data() {},
  components: {
    FiltroChecks,
  },
  setup() {
    return {
      PrecioInicial: ref("0"),
      PrecioFinal: ref("0"),
      info: null,
      modelDevice: ref("Seleccionar"),
      options: ["Precio", "Fecha"],
    };
  },
  methods: {
    guardarFiltro: function (filtros) {
      this.filtros = filtros;
      console.log(this.filtros);
    },
    regresarFiltro: function () {
      return this.filtros;
    },
  },
});
</script>

<style scoped>
fieldset {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 4px;
}
</style>
