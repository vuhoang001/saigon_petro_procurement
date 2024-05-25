<script setup>
import HeaderClient from './headerClient.vue';
import FooterClient from './footerClient.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="header w-full">
        <header-client></header-client>
    </div>
    <div class="content w-full">
        <RouterView></RouterView>
    </div>
    <div class="w-full">
        <footer-client></footer-client>
    </div>
</template>
