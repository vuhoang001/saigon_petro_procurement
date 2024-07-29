<template>

    <div class="container mx-auto ">
        <div class="grid mt-4">
            <div class="col-8">
                <span class="block text-4xl font-semibold my-4">
                    Tra cứu đơn hàng
                </span>
                <span class="line-height-3 text-gray-500">Để theo dõi đơn hàng của bạn, vui lòng nhập ID đơn hàng của
                    bạn vào ô nhập dưới đây và nhấn nút "Theo dõi Đơn hàng". Mã ID này đã được cung cấp cho bạn trên
                    biên nhận và trong email xác nhận bạn đã nhận được.</span>
                <div class="grid mt-2">
                    <div class="col-6">
                        <span class="mb-2 block font-semibold">Mã đơn hàng</span>
                        <InputText class="w-full" placeholder="ID..." type="text" v-model="value" />
                    </div>
                    <div class="col-6">
                        <span class="mb-2 block font-semibold">Email</span>
                        <InputText class="w-full" placeholder="Địa chỉ email" type="text" v-model="value" />
                    </div>
                </div>
                <span class="block"><i class="fa-solid fa-circle-info"></i> Mã đơn hàng mà chúng tôi đã gửi đến địa chỉ
                    email của bạn</span>
                <router-link to="/client/order-detail"><Button style="background-color: #F2EE1B"
                        class="mt-4 w-20rem text-gray-800 border-none p-3" label="TRA CỨU ĐƠN HÀNG" /></router-link>
            </div>
        </div>
    </div>
</template>