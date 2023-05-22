<template>
    <v-footer class="d-flex flex-column">
        <v-col>
            <Pagination v-if="appStore.$state.characterData.length" />
        </v-col>
        <div class="bg-red d-flex w-100 align-center px-4">
            <strong>MARVEL</strong>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
        </div>
        <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </v-footer>
</template>

<script lang="ts" setup>
import Pagination from '../../components/Pagination.vue'
import { AppStore } from '../../store/app'

const appStore = AppStore()

const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-instagram',
]

</script>