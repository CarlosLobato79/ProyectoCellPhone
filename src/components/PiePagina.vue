<template>
  <div
    style="height: 100px"
    class="row justify-center items-center bg-warning q-pa-lg"
  >
    <span class="">Footer creador {{ creador }}</span>
  </div>
</template>

<script>
export default {
  name: "footer-block",
  data() {
    return {
      creador: "Lobato",
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
