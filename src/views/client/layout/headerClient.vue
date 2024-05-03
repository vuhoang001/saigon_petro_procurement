<template>
    <div class="layout-topbar bg-green-700">
        <router-link to="#" class="layout-topbar-logo">
            <img src="@/assets/images/logo-removebg-preview.png" class="h-3rem" alt="logo" />
            <span class="text-xl font-bold uppercase text-yellow-300">saigon petro <br />procurement </span>
        </router-link>
        <div class="layout-topbar-menu">
            <button class="bg-green-700 border-none p-link layout-topbar-button">
                <i class="fa-solid fa-bell text-white"></i>
            </button>
            <div class="bg-white ml-2" style="width: 0.5px"></div>
            <button class="p-link flex align-items-center ml-3">
                <i class="fa-solid fa-circle-user text-white text-3xl"></i>
                <p class="text-lg text-white ml-3">
                    Công ty ABC
                    <i class="fa-solid fa-chevron-down ml-1 text-base"></i>
                </p>
            </button>
        </div>
    </div>
</template>
