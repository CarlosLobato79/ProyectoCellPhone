<template>
  <q-page>
    <!-- Toggle reset checkboxs -->
    <div class="q-pa-xs">
      <q-toggle v-model="resetT" @:click="resetChecks" color="green" />
      Nuevo
    </div>
    <!-- Checkboxs Branch -->
    <fieldset>
      <legend>Marca</legend>
      <div class="column">
        <q-checkbox dark v-model="Mcheck1" label="Samsung" color="teal"
          ><sup> 15</sup></q-checkbox
        >
        <q-checkbox dark v-model="Mcheck1" label="Huawei" color="orange"
          ><sup> 56</sup></q-checkbox
        >
        <q-checkbox dark v-model="Mcheck1" label="Iphone" color="red"
          ><sup> 4</sup></q-checkbox
        >
        <q-checkbox dark v-model="Mcheck1" label="Xiomi" color="cyan"
          ><sup> 4</sup></q-checkbox
        >
      </div>
    </fieldset>
    <!-- Checkboxs System -->
    <fieldset>
      <legend>Sistema</legend>
      <div class="column">
        <q-checkbox dark v-model="Scheck1" label="Android" color="teal"
          ><sup> 15</sup></q-checkbox
        >
        <q-checkbox dark v-model="Scheck1" label="Windows" color="orange"
          ><sup> 10</sup></q-checkbox
        >
        <q-checkbox dark v-model="Scheck1" label="IOS" color="red"
          ><sup> 56</sup></q-checkbox
        >
      </div>
    </fieldset>
    <!-- Checkboxs Screen -->
    <fieldset>
      <legend>Pantalla</legend>
      <div class="column">
        <q-checkbox dark v-model="Pcheck1" label="6.0" color="teal" />
        <q-checkbox dark v-model="Pcheck1" label="5.5" color="orange" />
        <q-checkbox dark v-model="Pcheck1" label="5" color="red" />
      </div>
    </fieldset>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Filtro-Checks",
  setup() {
    const resetT = ref(false);
    const Mcheck1 = ref(false);
    const Scheck1 = ref(false);
    const Pcheck1 = ref(false);
    return {
      resetT,
      Mcheck1,
      Scheck1,
      Pcheck1,
      resetChecks() {
        setTimeout(() => {
          resetT.value = false;
          Mcheck1.value = false;
          Scheck1.value = false;
          Pcheck1.value = false;
        }, 1000);
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
fieldset {
  border: 1px solid white;
  border-radius: 4px;
  color: white;
}
</style>
