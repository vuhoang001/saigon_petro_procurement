<template>
    <div class="mx-auto flex justify-content-center align-items-center mt-5" style="width: 1325px; height: 300px;">
        <div class="flex justify-content-center flex-column">
            <div class="text-center">
                <i class="fa-regular fa-circle-check text-8xl text-green-400 bg-green-100 border-circle"></i>
            </div>
            <div class="w-30rem flex flex-column align-items-center">
                <span class="text-3xl text-bold my-3">Đơn hàng đã được đặt thành công</span>
                <span class="text-center text-gray-500">Cảm ơn bạn! Đơn hàng của bạn đang được xử lý.</span>
            </div>

            <div class="grid mt-3">
                <div class="col-6"><router-link to="/client">
                        <button
                            class="w-full h-3rem border-2 border-round-xs border-solid border-orange-400 bg-white text-orange-400 font-bold p-2 cursor-pointer">ĐI
                            TỚI TRANG CHỦ</button></router-link></div>
                <div class="col-6"> <router-link to="/client/setup/hisPur"><button
                            class="w-full h-3rem border-none border-round-xs cursor-pointer p-2 bg-orange-400 font-bold text-white">XEM
                            ĐƠN HÀNG</button></router-link></div>


            </div>
        </div>
    </div>
</template>