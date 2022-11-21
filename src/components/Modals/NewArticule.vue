<template>
  <div class="q-gutter-sm">
    <q-btn icon="fa-solid fa-square-plus" flat @click="dialog = true" />
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-secondary text-white">
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <!-- Titulo del modal -->
        <q-card-section>
          <div class="text-h6">Agregar a articulo</div>
        </q-card-section>
        <!-- Contenido -->
        <q-card-section class="q-pt-none row">
          <!-- Seccion 1 -->
          <div class="col-6 q-pa-lg">
            <fieldset style="border: 1px solid white; border-radius: 5px">
              <legend>_</legend>
              <!-- Options group -->
              <div class="row items-center q-pa-sm">
                <span>Estado:</span>
                <q-option-group
                  class="row"
                  v-model="group"
                  :options="options"
                  color="primary"
                />
              </div>
              <!-- Inputs -->
              <div class="row items-center q-pa-sm">
                <span style="width: 100px">Marca: </span>
                <q-input filled v-model="text" dense />
              </div>
              <div class="row items-center q-pa-sm">
                <span style="width: 100px">Modelo: </span>
                <q-input filled v-model="text" dense />
              </div>
              <div class="row items-center q-pa-sm">
                <span style="width: 100px">Pantalla: </span>
                <q-input filled v-model="text" dense />
                <span class="q-px-sm">Pulgadas</span>
              </div>
              <div class="row items-center q-pa-sm">
                <span style="width: 100px">Sistema: </span>
                <q-select
                  standout="bg-teal text-white"
                  v-model="Sistema"
                  :options="optionsSistema"
                  label="Sistema"
                />
              </div>
              <div class="row items-center q-pa-sm">
                <span style="width: 100px">Rom: </span>
                <q-input filled v-model="text" dense />
              </div>
              <div class="row items-center q-pa-sm">
                <span style="width: 100px">RAM: </span>
                <q-input filled v-model="text" dense />
              </div>
            </fieldset>
            <fieldset style="border: 1px solid white; border-radius: 5px">
              <legend>_</legend>
              <q-file
                filled
                bottom-slots
                v-model="modelImg"
                label="Imagen del Producto"
                counter
                clearable
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                  <q-icon
                    name="close"
                    @click.stop.prevent="model = null"
                    class="cursor-pointer"
                  />
                </template>
              </q-file>
            </fieldset>
          </div>
          <!-- Seccion 2 image -->
          <div class="col-6 q-pa-lg">
            <fieldset style="border: 1px solid white; border-radius: 5px">
              <legend>_</legend>
              <div class="column">
                <span class="text-h5">Titulo breve del anuncio</span>
                <q-input filled v-model="text" dense />
                <div class="row q-pa-sm items-center">
                  <span style="width: 100px">Vendedor: </span>
                  <q-input filled v-model="text" dense />
                </div>
                <div class="row q-pa-sm items-center">
                  <span style="width: 100px">Telefono: </span>
                  <q-input filled type="number" v-model="text" dense />
                </div>
                <div class="column q-pa-sm">
                  <span>Descripcion: </span>
                  <q-input v-model="text" filled type="textarea" />
                </div>
              </div>

              <div class="column q-pa-xl items-center">
                <fieldset
                  class="q-pa-sm"
                  style="
                    width: 30%;
                    border: 2px solid white;
                    border-radius: 5px;
                  "
                >
                  <legend>PRECIO</legend>
                  <q-input filled type="number" v-model="text" dense />
                </fieldset>

                <div class="row q-pa-lg justify-evenly" style="width: 100%">
                  <q-btn
                    icon="fa-solid fa-xmark"
                    label="Cancelar"
                    v-close-popup
                  ></q-btn>
                  <q-btn icon="fa-solid fa-floppy-disk" label="Crear"></q-btn>
                </div>
              </div>
            </fieldset>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default {
  name: "NuevoArticulo",
  setup() {
    return {
      modelImg: ref("null"),
      dialog: ref(false),
      maximizedToggle: ref(true),
      // Option Group
      group: ref("op1"),
      options: [
        {
          label: "Nuevo",
          value: "nuevo",
        },
        {
          label: "Usado",
          value: "usado",
        },
      ],
      Sistema: ref(null),
      optionsSistema: ["Android", "Iphone"],
    };
  },
};
</script>
