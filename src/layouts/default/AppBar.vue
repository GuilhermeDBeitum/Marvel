<template>
  <v-app-bar color="red" density="prominent">
    <template v-slot:prepend>
      <v-img src="../../assets/logo-marvel-2048.png" cover></v-img>
    </template>
    <v-card min-width="280" class="mx-auto mt-8 d-flex">
      <v-text-field label="Search" clearable hide-details solo-inverted v-model="search"
        v-on:keyup.enter="appStore.searchCharacter"></v-text-field>
    </v-card>
    <template v-slot:append>
      <v-img src="../../assets/logo-marvel-2048.png" cover></v-img>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { AppStore } from '../../store/app';

const appStore = AppStore()

const search = computed({
  get() {
    return appStore.search
  },
  set(value) {
    appStore.search = value
  }
})
</script>
