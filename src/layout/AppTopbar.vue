<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
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

const store = useStore();
const router = useRouter();
const menu = ref();
const items = ref([
    {
        label: 'Thông tin cá nhân',
        icon: 'pi pi-file'
    },
    {
        label: 'Đăng xuất',
        icon: 'fa-solid fa-arrow-right-from-bracket',
        command: () => {
            store.dispatch('auth/logout').then(() => {
                router.push({ name: 'login' });
            });
        }
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <div class="layout-topbar bg-green-700">
        <router-link to="/admin" class="layout-topbar-logo">
            <img src="@/assets/images/logo-removebg-preview.png" class="h-4rem" alt="logo" />
            <span class="text-2xl font-bold uppercase ml-4" style="color: #f2ee1b">saigon petro <br />procurement </span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars text-white"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <!-- <button @click="onTopBarMenuButton()" class="bg-green-700 border-none p-link layout-topbar-button">
                <i class="fa-solid fa-bell text-white"></i>
            </button>
            <div class="bg-white ml-2" style="width: 0.5px"></div>
            <button class="p-link flex align-items-center ml-3">
                <i class="fa-solid fa-circle-user text-white text-3xl"></i>
                <p class="text-lg text-white ml-3">
                    Admin
                    <i class="fa-solid fa-chevron-down ml-1 text-base"></i>
                </p>
            </button> -->

            <button class="bg-green-700 border-none p-link layout-topbar-button relative">
                <i class="fa-solid fa-bell text-white pr-4"></i>
                <i class="fa-solid fa-cart-shopping text-white pr-7"></i>

                <i class="absolute bg-red-500 border-circle w-1rem h-1rem text-xs text-white text-center" style="top: 6px; right: 8px">4</i>
            </button>

            <div class="bg-white ml-2" style="width: 0.5px"></div>
            <button class="p-link flex align-items-center ml-3">
                <Button
                    class="w-3rem"
                    type="button"
                    icon="fa-regular fa-user"
                    @click="toggle"
                    aria-haspopup="true"
                    aria-controls="overlay_tmenu"
                    :pt="{
                        root: {
                            style: 'border-radius: 50%; width: 40px; height: 40px;'
                        },
                        label: {
                            style: 'background-color: red'
                        }
                    }"
                />
                <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
                <p class="text-lg text-white ml-3">
                    Công ty ABC
                    <i class="fa-solid fa-chevron-down ml-1 text-base"></i>
                </p>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
