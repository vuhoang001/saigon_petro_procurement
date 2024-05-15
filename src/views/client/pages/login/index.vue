<script setup>
import { reactive } from 'vue';
const objForm = reactive({
    username: '',
    password: ''
});
const handleSubmit = () => {
    console.log(objForm.username);
    console.log(objForm.password);
};
</script>

<template>
    <div class="w-full h-screen flex align-items-center justify-content-center">
        <div class="w-30rem bg-white px-5 py-5 border-round-3xl">
            <div class="mb-5 w-full text-center text-3xl font-bold">SAIGON PETRO</div>

            <form @submit.prevent="handleSubmit" class="flex flex-column">
                <label for="" class="font-medium mb-2">Tên đăng nhập</label>
                <InputText type="text" v-model="objForm.username" />
                <label for="" class="font-medium mt-3 mb-2">Mật khẩu</label>
                <InputText type="text" v-model="objForm.password" />
                <Button type="submit" class="w-full mt-5 mb-3" style="display: block">Đăng nhập</Button>
                <div class="text-right underline"><a href="#">Quên mật khẩu?</a></div>
            </form>
        </div>
    </div>
</template>
