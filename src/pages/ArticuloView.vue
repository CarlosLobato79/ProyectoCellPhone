<template>
  <div class="row">
    <SliderImg class="col-12 col-sm-6"/>
    <BuyArticulo class="col-12 col-sm-6"></BuyArticulo>
  </div>
  <InfoArticulo class=""></InfoArticulo>
</template>

<script>
import { defineComponent } from "vue";
import SliderImg from "../components/SalesPage/SliderImg.vue";
import BuyArticulo from "../components/SalesPage/BuyArticulo.vue";
import InfoArticulo from "../components/SalesPage/InfoArticulo.vue";

export default defineComponent({
  name: "ArticuloView",
  components: {
    SliderImg,
    BuyArticulo,
    InfoArticulo,
  },
});
</script>
