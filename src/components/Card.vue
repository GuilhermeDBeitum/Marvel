<template>
  <v-card max-width="1350" class="mx-auto">
    <v-layout>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3" v-for="item in appStore.$state.characterData" :key="item">
              <v-card>
                <v-card class="mb-2" density="compact" :title=item.name variant="text">
                  <v-img :src=item.thumbnail.path height="250" cover></v-img>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { AppStore } from '../store/app'

const appStore = AppStore()

onBeforeMount(() => {
  appStore.getCharacters()
})

</script>
