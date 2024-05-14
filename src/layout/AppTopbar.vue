<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
// import { useRouter } from 'vue-router';

const { onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
// const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

// const logoUrl = computed(() => {
//     return `/assets/images/${layoutConfig.darkTheme.value ? 'logo1' : 'logo-dark'}.png`;
// });

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
// const onSettingsClick = () => {
//     topbarMenuActive.value = false;
//     router.push('/documentation');
// };
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar bg-green-700">
        <router-link to="/" class="layout-topbar-logo">
            <img src="@/assets/images/logo-removebg-preview.png" class="h-4rem" alt="logo" />
            <span class="text-2xl font-bold uppercase" style="color: #f2ee1b">saigon petro <br />procurement </span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars text-white"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="onTopBarMenuButton()" class="bg-green-700 border-none p-link layout-topbar-button">
                <i class="fa-solid fa-bell text-white"></i>
            </button>
            <div class="bg-white ml-2" style="width: 0.5px"></div>
            <button class="p-link flex align-items-center ml-3">
                <i class="fa-solid fa-circle-user text-white text-3xl"></i>
                <p class="text-lg text-white ml-3">
                    Admin
                    <i class="fa-solid fa-chevron-down ml-1 text-base"></i>
                </p>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
