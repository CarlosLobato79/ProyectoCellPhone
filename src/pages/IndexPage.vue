<template>
  <q-page class="row">
    <!-- Filtro Checkboxs -->
    <div class="mobile-hide col-2 q-pa-sm bg-primary">
      <FiltroChecks></FiltroChecks>
    </div>
    <!-- Filtro Tipos -->
    <div class="col">
      <div class="q-pa-sm col col-12 bg-warning">
        <FiltroTipo></FiltroTipo>
      </div>
      <!-- Filtro Cards -->
      <div class="q-pa-lg col col-12 bg-secondary">
        <ArticulosCards></ArticulosCards>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FiltroTipo from "../components/IndexPage/FiltroTipo.vue";
import ArticulosCards from "../components/IndexPage/ArticulosCards.vue";
import FiltroChecks from "../components/IndexPage/FiltroChecks.vue";
import PiePagina from "../components/PiePagina.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    FiltroTipo,
    ArticulosCards,
    FiltroChecks,
    // PiePagina,
  },
});
</script>
