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
        <q-checkbox dark v-model="Mcheck2" label="Huawei" color="orange"
          ><sup> 56</sup></q-checkbox
        >
        <q-checkbox dark v-model="Mcheck3" label="Iphone" color="red"
          ><sup> 4</sup></q-checkbox
        >
        <q-checkbox dark v-model="Mcheck4" label="Xiomi" color="cyan"
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
        <q-checkbox dark v-model="Scheck2" label="Windows" color="orange"
          ><sup> 10</sup></q-checkbox
        >
        <q-checkbox dark v-model="Scheck3" label="IOS" color="red"
          ><sup> 56</sup></q-checkbox
        >
      </div>
    </fieldset>
    <!-- Checkboxs Screen -->
    <fieldset>
      <legend>Pantalla</legend>
      <div class="column">
        <q-checkbox dark v-model="Pcheck1" label="6.0" color="teal" />
        <q-checkbox dark v-model="Pcheck2" label="5.5" color="orange" />
        <q-checkbox dark v-model="Pcheck3" label="5" color="red" />
      </div>
    </fieldset>
    <div class="row justify-center q-pa-lg">
      <q-btn
        label="Aplicar Filtros"
        color="secondary"
        @click="$emit('filtroCheck', filtersCheck())"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Filtro-Checks",
  setup() {
    const resetT = ref(false);
    const Mcheck1 = ref(false);
    const Mcheck2 = ref(false);
    const Mcheck3 = ref(false);
    const Mcheck4 = ref(false);
    const Scheck1 = ref(false);
    const Scheck2 = ref(false);
    const Scheck3 = ref(false);
    const Pcheck1 = ref(false);
    const Pcheck2 = ref(false);
    const Pcheck3 = ref(false);
    return {
      resetT: ref(false),
      Mcheck1: ref(false),
      Mcheck2: ref(false),
      Mcheck3: ref(false),
      Mcheck4: ref(false),
      Scheck1: ref(false),
      Scheck2: ref(false),
      Scheck3: ref(false),
      Pcheck1: ref(false),
      Pcheck2: ref(false),
      Pcheck3: ref(false),
    };
  },

  methods: {
    filtersCheck: function () {
      return [
        {
          estado: this.resetT,
          samsung: this.Mcheck1,
          huawei: this.Mcheck2,
          iphone: this.Mcheck3,
          xiaomi: this.Mcheck4,
          android: this.Scheck1,
          windows: this.Scheck2,
          ios: this.Scheck3,
          6: this.Pcheck1,
          5.5: this.Pcheck2,
          5: this.Pcheck3,
        },
      ];
    },
  },
};
</script>

<style scoped>
fieldset {
  border: 1px solid white;
  border-radius: 4px;
  color: white;
}
</style>
