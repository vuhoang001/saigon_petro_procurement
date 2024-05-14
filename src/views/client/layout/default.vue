<script setup>
import HeaderClient from './headerClient.vue';
import FooterClient from './footerClient.vue';
import SearchClient from './search.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="header h-5rem w-full">
        <header-client></header-client>
    </div>
    <div>
        <search-client></search-client>
    </div>
    <div class="content w-full">
        <RouterView></RouterView>
    </div>
    <div class="w-full">
        <footer-client></footer-client>
    </div>
</template>
