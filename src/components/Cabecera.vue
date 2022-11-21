<template>
  <q-header
    elevated
    bordered
    class="bg-primary text-white row items-center q-pa-xs"
  >
    <!-- Menu desplegable -->
    <q-toolbar class="col-auto">
      <q-btn
        dense
        flat
        round
        icon="fa-solid fa-bars"
        class="mobile-only"
        @click="toggleLeftDrawer"
      />
      <!-- Logo y titulo  -->
      <q-toolbar-title class="mobile-hide">
        <q-avatar icon="fa-solid fa-bullhorn" />
        PhoneShopStore
      </q-toolbar-title>
    </q-toolbar>
    <!-- Input -->
    <q-input
      rounded
      outlined
      label="Buscar"
      type="text"
      class="q-pa-sm col col-md-4"
      dense
      color="dark"
      dark
      borderless
    />
    <!-- Botones -->
    <div class="mobile-hide col row justify-center q-pa-xs">
      <q-btn color="secondary" class="q-mx-md" to="/">Inicio</q-btn>
      <q-btn color="secondary" class="q-mx-md">Estadistica</q-btn>
    </div>
    <div class="mobile-hide col row justify-center">
      <NewArticule />
      <!-- <q-btn flat round class="q-mx-md" icon="fa-solid fa-square-plus"></q-btn> -->
      <q-btn
        flat
        round
        class="q-mx-md"
        icon="fa-solid fa-cart-shopping"
      ></q-btn>
    </div>
  </q-header>
  <q-drawer v-model="leftDrawerOpen" side="left" bordered>
    <!-- drawer content -->
    <q-scroll-area
      style="
        height: calc(100% - 150px);
        text-align: center;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item active clickable v-ripple to="/" exact>
          <q-item-section> Inicio </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item active clickable v-ripple to="/ArticuloView">
          <q-item-section> NuevoAnuncio</q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item active clickable v-ripple to="/ArticuloView">
          <q-item-section> Carrito </q-item-section>
        </q-item>
        <q-separator spaced />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
import NewArticule from "./Modals/NewArticule.vue";
export default {
  name: "Cabecera-block",

  data() {
    return {
      titulo: "CellphoneStore Title",
    };
  },
  components: {
    NewArticule,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped></style>
