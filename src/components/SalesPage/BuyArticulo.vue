<template>
  <div class="q-pa-xl column">
    <span class="text-h6 q-pa-xs">{{ InfoArticulo }}</span>
    <span class="text-h4 q-pa-lg">${{ PrecioArticulo }}</span>
    <q-btn class="self-baseline desktop-only">Comprar</q-btn>
    <div class="q-pa-lg q-my-lg row justify-around info">
      <span><strong>Vendedor: </strong>{{ VendedorArticulo }}</span>
      <span><strong>Telefono: </strong>{{ TelefonoVendedor }}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  InfoArticulo: null,
  PrecioArticulo: null,
  VendedorArticulo: null,
  TelefonoVendedor: null,
  data() {
    return {
      InfoArticulo:
        "El Samsung Galaxy A30 es un smartphone Android con una pantalla Super AMOLED Full HD+ de 6.4 pulgadas con notch en forma de gota de agua (Infinity-U).",
      PrecioArticulo: "300",
      VendedorArticulo: "yo",
      TelefonoVendedor: "75351767",
    };
  },
  setup() {},
};
</script>

<style scoped>
.info {
  border: 1px solid black;
  border-radius: 5px;
}
</style>
>
