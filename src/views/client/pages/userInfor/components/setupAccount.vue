<template>
    <div class="border-1 border-round-md border-solid border-gray-300">
        <div class="font-medium py-3 border-bottom-1 border-gray-300">
            <p class="ml-3">THIẾT LẬP THÔNG TIN TÀI KHOẢN</p>
        </div>

        <div class="grid mt-1">
            <div class="col-3 pl-4">
                <div class="flex justify-content-center">
                    <Image class=""
                        src="https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0&h=180"
                        alt="Image" width="100%" />
                </div>
            </div>
            <div class="col-9">
                <div class="grid gap-4 mt-2">
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Tên hiển thị</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Tên đăng nhập</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Họ và tên</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Email</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Email phụ</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Số điện thoại</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <label for="">Quốc gia</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-6 p-0 w-25rem">
                        <div class="grid">
                            <div class="col-6">
                                <label for="">Tỉnh/Thành phố</label>
                                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                                    placeholder="Select a City" class="w-full mt-2" />
                            </div>
                            <div class="col-6">
                                <label for="">Quận/Huyện</label>
                                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                                    placeholder="Select a City" class="w-full mt-2" />
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="grid">
                        <div class="col-12 pl-0">
                            <Button>Lưu thông tin</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid flex justify-content-between px-3 mt-3">
        <div class="col-6 p-0 border-1 border-round-md border-solid border-gray-300 mt-3" style="width: 34rem;">
            <div class="font-medium py-3 border-bottom-1 border-gray-300">
                <p class="ml-3">ĐỊA CHỈ XUẤT HÓA ĐƠN</p>
            </div>

            <form action="">
                <div class="grid flex justify-content-center mt-2">
                    <div class="col-6 w-16rem">
                        <label for="">Họ</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 w-16rem">
                        <label for="">Tên</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Tên công ty (Không bắt buộc)</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Địa chỉ</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Quốc gia</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Tỉnh/Thành phố</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-6 w-16rem pt-0">
                        <label for="">Quận/Huyện</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-6 w-16rem pt-0">
                        <label for="">Xã/Phường</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Email</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Số điện thoại</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                </div>
                <Button class="ml-5 my-3">Submit</Button>
            </form>


        </div>
        <div class="col-6 p-0 border-1 border-round-md border-solid border-gray-300 mt-3" style="width: 34rem;">
            <div class="font-medium py-3 border-bottom-1 border-gray-300">
                <p class="ml-3">ĐỊA CHỈ GIAO HÀNG</p>
            </div>

            <form action="">
                <div class="grid flex justify-content-center mt-2">
                    <div class="col-6 w-16rem">
                        <label for="">Họ</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-6 w-16rem">
                        <label for="">Tên</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Tên công ty (Không bắt buộc)</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Địa chỉ</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Quốc gia</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Tỉnh/Thành phố</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-6 w-16rem pt-0">
                        <label for="">Quận/Huyện</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-6 w-16rem pt-0">
                        <label for="">Xã/Phường</label>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Select a City" class="w-full mt-2" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Email</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                    <div class="col-12 pt-0" style="width: 32rem;">
                        <label for="">Số điện thoại</label>
                        <InputText class="w-full mt-2" type="text" v-model="value" />
                    </div>
                </div>
                <Button class="ml-5 my-3">Submit</Button>
            </form>
        </div>
    </div>

    <div class="border-1 border-round-md border-solid border-gray-300 mt-4">
        <div class="font-medium py-3 border-bottom-1 border-gray-300">
            <p class="ml-3">ĐỔI MẬT KHẨU</p>
        </div>

        <div class="mx-3">
            <form action="">
                <div class="mt-3">
                    <label for="">Mật khẩu hiện tại</label>
                    <IconField class="my-2">
                        <InputIcon class="fa-solid fa-eye cursor-pointer" :class="{ 'text-green-300': isClicked1 }"
                            @click="togglePasswordVisibility(1)">
                        </InputIcon>
                        <InputText :type="type1" class="w-full" v-model="value2" />
                    </IconField>
                </div>
                <div class="mt-3">
                    <label for="">Mật khẩu hiện tại</label>
                    <IconField class="my-2">
                        <InputIcon class="fa-solid fa-eye cursor-pointer" :class="{ 'text-green-300': isClicked2 }"
                            @click="togglePasswordVisibility(2)">
                        </InputIcon>
                        <InputText type="password" class="w-full" v-model="value2" />
                    </IconField>
                </div>
                <div class="mt-3">
                    <label for="">Mật khẩu hiện tại</label>
                    <IconField class="my-2">
                        <InputIcon class="fa-solid fa-eye cursor-pointer" :class="{ 'text-green-300': isClicked3 }"
                            @click="togglePasswordVisibility(3)">
                        </InputIcon>
                        <InputText type="password" class="w-full" v-model="value2" />
                    </IconField>
                </div>

                <Button class="my-2">ĐỔI MẬT KHẨU</Button>
            </form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isClicked1 = ref(false)
const isClicked2 = ref(false)
const isClicked3 = ref(false)

const type1 = ref('password')
const type2 = ref('password')
const type3 = ref('password')

const togglePasswordVisibility = field => {
    if (field === 1) {
        isClicked1.value = !isClicked1.value
        type1.value = isClicked1.value ? 'text' : 'password'
    } else if (field === 2) {
        isClicked2.value = !isClicked2.value
        type2.value = isClicked2.value ? 'text' : 'password'
    } else if (field === 3) {
        isClicked3.value = !isClicked3.value
        type3.value = isClicked3.value ? 'text' : 'password'
    }
}
</script>