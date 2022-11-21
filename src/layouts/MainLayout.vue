<template>
  <q-layout view="hHh lpR fff" container style="height: 100vh">
    <!-- Header -->
    <CabeceraVue />
    <q-page-container>
      <!-- Router View -->
      <router-view></router-view>
      <PiePagina></PiePagina>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "../components/EssentialLink.vue";
import CabeceraVue from "../components/Cabecera.vue";
import PiePagina from "../components/PiePagina.vue";

export default {
  components: {
    CabeceraVue,
    PiePagina
  },
};
</script>
