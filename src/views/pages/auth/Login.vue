<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';
const { layoutConfig } = useLayout();
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const router = useRouter();
const store = useStore();
const userCredentials = ref({})
const checked = ref(false);
const logoUrl = computed(() => {
    return `https://foxai.com.vn/wp-content/uploads/2024/07/Logo_Original-1.png`;
});

const handleSubmit = () => {

    store.dispatch("auth/store", userCredentials.value)
};
</script>

<template>
    <div
        class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5 align-items-center flex flex-column">
                        <img src="@/assets/images/logo-removebg-preview.png" class="mb-3" height="100" alt="logo" />
                        <strong class="text-2xl text-primary mb-3">Xăng dầu Sài Gòn</strong>
                        <span class="text-600 font-medium">Sign in to continue</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-base font-semibold mb-2">Tên người dùng</label>
                        <InputText id="email1" type="text" placeholder="user.name@gmail.com"
                            class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userCredentials.username" />

                        <label for="email1" class="block text-900 text-base font-semibold mb-2">Mật khẩu</label>

                        <Password id="password1" v-model="userCredentials.password" placeholder="Mật khẩu"
                            :toggleMask="true" class="w-full mb-3" inputClass="w-full"
                            :inputStyle="{ padding: '1rem' }"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Lưu đăng nhập</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer"
                                style="color: var(--primary-color)">Quên mật khẩu?</a>
                        </div>
                        <Button @click="handleSubmit()" label="Đăng nhập" class="w-full p-3 text-lg mb-3"></Button>
                        <Button label="Đăng ký" text class="w-full p-3 text-lg"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
