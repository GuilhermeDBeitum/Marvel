<template>
    <v-col>
        <v-pagination v-model="appStore.$state.pagination.page" :length="pagesNumber" circle
            v-if="appStore.select === 'getCharacters'" @click="appStore.getCharacters"></v-pagination>
        <v-pagination v-model="appStore.$state.pagination.page" :length="pagesNumber" circle
            v-if="appStore.select === 'searchCharacter'" @click="appStore.searchCharacter"></v-pagination>
    </v-col>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { AppStore } from '../store/app';

const appStore = AppStore()

const pagesNumber = computed(() => {
    return Math.ceil(appStore.$state.pagination.totalItems / appStore.$state.pagination.rowPerPage)
})

</script>
