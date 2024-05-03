<script setup>
import HeaderClient from './headerClient.vue';
import FooterClient from './footerClient.vue';
import SearchClient from './search.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="header h-5rem">
        <header-client></header-client>
    </div>
    <div>
        <search-client></search-client>
    </div>
    <div class="content">
        <RouterView></RouterView>
    </div>
    <footer-client></footer-client>
</template>
