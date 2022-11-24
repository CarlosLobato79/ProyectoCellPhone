<template>
  <q-page class="row">
    <!-- Filtro Checkboxs -->
    <div class="mobile-hide col-2 q-pa-sm bg-primary">
      <FiltroChecks
        @filtroCheck="(x) => filtroCheck(x)"
        @filtroM="(x) => filtroCheck(x)"
      ></FiltroChecks>
    </div>
    <!-- Filtro Tipos -->
    <div class="col">
      <div class="q-pa-sm col col-12 bg-warning">
        <FiltroTipo
          @OrdP="ordenarPorPrecio"
          @OrdF="ordenarPorFecha"
          @Device="filtroMobile"
          @RangePrice="(x, y) => ordenaPrecio(x, y)"
        ></FiltroTipo>
      </div>
      <!-- Filtro Cards -->
      <div class="q-pa-lg col col-12 bg-secondary">
        <q-page>
          <div class="row" style="height: 70vh; overflow-y: auto">
            <!-- Cards -->
            <li
              class="col-6 col-sm-3"
              v-for="cellphones in cellphone"
              v-bind:key="cellphones"
            >
              <q-card class="my-card q-ma-xs">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-card-section>
                  <div class="text-h6">{{ "$" + cellphones.precio }}</div>
                  <div class="text-subtitle2">
                    {{
                      cellphones.marca +
                      " " +
                      cellphones.modelo +
                      ", Pantalla de " +
                      cellphones.pantalla +
                      " Ram" +
                      cellphones.ram +
                      "GB, Rom " +
                      cellphones.rom
                    }}
                  </div>
                </q-card-section>
              </q-card>
            </li>
          </div>
          <!-- Paginacion -->
          <div class="q-pa-xl row justify-evenly items-center">
            <!-- Paginador -->
            <q-pagination
              v-model="current"
              :max="1"
              direction-links
              unelevated
              color="black"
              active-color="purple"
              class="col-12 col-sm-6 row justify-center"
            />
            <!-- Elementos por pagina -->
            <div
              class="desktop-only col-12 col-sm-6 q-pa-xs row inlin justify-center items-center"
            >
              <label class="q-mx-md">Articulos por pagina:</label>
              <q-select
                filled
                stack-label
                :dense="dense"
                v-model="cantItemsPorPagina"
                :options="options"
              />
            </div>
          </div>
        </q-page>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import FiltroTipo from "../components/IndexPage/FiltroTipo.vue";
import FiltroChecks from "../components/IndexPage/FiltroChecks.vue";
import PiePagina from "../components/PiePagina.vue";

import { ref } from "vue";




const dataTest = [
  {
    descripcion: "#1",
    estado: 0,
    fecha: "30/20/2000",
    marca: "xiaomi",
    modelo: "zte",
    precio: "30",
    ram: "4",
    rom: "10",
    sistema: "android",
    telefono: "75351975",
    titulo: "Telefono en venta en nuevo estado",
    vendedor: "Carlos Lobato",
    pantalla: "6.0",
  },
  {
    descripcion: "#2",
    estado: 0,
    fecha: "30/20/2000",
    marca: "Samsung",
    modelo: "zte",
    precio: "40",
    ram: "2",
    rom: "10",
    sistema: "android",
    telefono: "75351975",
    titulo: "telefono en venta en nuevo estado",
    vendedor: "Carlos Lobato",
    pantalla: "5.5",
  },
  {
    descripcion: "#3",
    estado: 0,
    fecha: "30/20/2000",
    marca: "Huawei",
    modelo: "zte",
    precio: "30",
    ram: "9",
    rom: "10",
    sistema: "ios",
    telefono: "75351975",
    titulo: "telefono en venta en nuevo estado",
    vendedor: "Carlos Lobato",
    pantalla: 4,
  },
  {
    descripcion: "#4",
    estado: 0,
    fecha: "30/20/2000",
    marca: "Samsung",
    modelo: "zte",
    precio: "85",
    ram: "3",
    rom: "10",
    sistema: "android",
    telefono: "75351975",
    titulo: "telefono en venta en nuevo estado",
    vendedor: "Carlos Lobato",
    pantalla: "10",
  },
  {
    descripcion: "#5",
    estado: 0,
    fecha: "30/20/2000",
    marca: "windows",
    modelo: "zte",
    precio: "37",
    ram: "3",
    rom: "10",
    sistema: "android",
    telefono: "75351975",
    titulo: "telefono en venta en nuevo estado",
    vendedor: "Carlos Lobato",
    pantalla: "5",
  },
];

export default defineComponent({
  name: "IndexPage",
  cellphone: null,
  Desde: null,
  Hasta: null,
  itemsPagina: null,
  components: {
    FiltroTipo,
    // ArticulosCards,
    FiltroChecks,
    // PiePagina,
  },
  data() {
    return {
      itemsPagina: dataTest.length,
      cellphone: dataTest,
    };
  },
  setup() {
    return {
      current: ref(1),
      cantItemsPorPagina: ref("25"),
      options: ["25", "50", "75", "100"],
    };
  },
  methods: {
    cantElementoPagina() {
      this.elementoPorPagina = this.dataTest / this.cantItemsPorPagina;
    },
    ordenaPrecio: function (inicial, final) {
      if (inicial >= 0 && final > 0) {
        const datos = dataTest.filter((dato) => {
          return dato.precio >= Number(inicial) && dato.precio <= Number(final);
        });
        // console.log("Ordenar Por Precio", { inicial, final });
        this.cellphone = datos;
      }
    },
    ordenarPorPrecio: function () {
      console.log("Ordenando Precio desde el Padre");
      const datosOrdenados = dataTest.sort(function (a, b) {
        if (Number(a.precio) > Number(b.precio)) {
          return 1;
        }
        if (Number(a.precio) < Number(b.precio)) {
          return -1;
        }
        return 0;
      });
      this.cellphone = null;
      this.cellphone = datosOrdenados;
      // console.table(this.cellphone)
    },
    ordenarPorFecha() {
      console.log("Ordenando por fecha ejemplo ram");
      const datos = dataTest.sort((x, y) => x.ram - y.ram);
      this.cellphone = datos;
    },
    filtroMobile: function (device) {
      if (device.toLowerCase() === "precio") {
        // ordenaPrecio()
        this.ordenarPorPrecio();
      } else {
        console.log("Filtrando por fecha");
        // ordenarPorFecha();
      }
    },
    filtroCheck: function (filtro) {
      const datos = JSON.parse(JSON.stringify(filtro));
      const filtrado = [];
      for (const data of datos) {
        for (const l in data) {
          if (datos[0][l]) {
            filtrado.push(l);
          }
        }
      }
      console.log("Buscando: ", filtrado);
      let contador = 0;
      const data = dataTest.filter((x) => {
        console.log(dataTest[contador]);

        for (const l in x) {
          // console.log(`key ${l} : value: ${dataTest[contador][l]}`);
          const convertir = dataTest[contador][l] + "";
          if (filtrado.includes(convertir.toLowerCase())) {
            console.log(`Esta es la coinsidencia: ${dataTest[contador][l]}`);
            contador++;
            return true;
          }
        }
        contador++;
      });
      this.cellphone = data;
    },
  },
});
</script>
