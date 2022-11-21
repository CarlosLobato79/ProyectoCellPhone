<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import Cabecera from "./components/Cabecera.vue";
import FiltroTipo from "./components/IndexPage/FiltroTipo.vue";
import ArticulosCards from "./components/IndexPage/ArticulosCards.vue";
import PiePagina from "./components/PiePagina.vue";

export default defineComponent({
  name: "App",
  components: {
    // Cabecera,
    // PiePagina,
    // FiltroTipo,
    // ArticulosCards,
  },
});
</script>

<style scoped></style>
