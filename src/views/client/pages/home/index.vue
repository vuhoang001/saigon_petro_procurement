<script setup>
// import ProductsCard from './components/ProductsCard.vue';
import { ref, reactive, computed } from 'vue';

const productMainFS = ref([
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123.123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 1
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    },
    {
        image: '/src/assets/images/image-11.png',
        rating: 3,
        voted: 123123,
        title: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        oldPrice: 123,
        newPrice: 123,
        description: 'LoremLorem ipsum dolor sit amet consectetur adipisicing elitLoremLorem ipsum dolor sit amet consectetur adipisicing elit',
        saleOne: '32% OFF',
        saleTwo: '',
        main: 0
    }
]);

const companies = reactive([
    {
        image: '/src/assets/images/image-8.png',
        companyName: 'SINO'
    },
    {
        image: '/src/assets/images/image-11.png',
        companyName: 'SINOaaaaaaaaaaaaaaaaa'
    },
    {
        image: '/src/assets/images/image-8.png',
        companyName: 'SINO'
    },
    {
        image: '/src/assets/images/image-8.png',
        companyName: 'SINO'
    },
    {
        image: '/src/assets/images/image-8.png',
        companyName: 'SINO'
    },
    {
        image: '/src/assets/images/image-8.png',
        companyName: 'SINO'
    }
]);

const filteredProductMainFS = computed(() => {
    return productMainFS.value.filter((item) => item.main === 1);
});

const filteredSubProductMainFS = computed(() => {
    return productMainFS.value.filter((item) => item.main === 0);
});
</script>

<template>
    <div class="container mx-auto">
        <div class="grid mx-0 my-0 border-round-sm">
            <div class="col-8 bg-gray-200">
                <div class="flex mx-6" style="height: 500px">
                    <div class="flex align-items-start flex-column justify-content-center">
                        <span class="flex align-items-center">
                            <svg class="mr-2" width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1" x2="24" y2="1" stroke="#2DA5F3" stroke-width="2" />
                            </svg>
                            <span class="blue-color font-semibold">Ưu đãi mới nhất</span>
                        </span>
                        <h2 class="size-46px">Sản phẩm mới</h2>
                        <span class="size-18px inline-block"> Lorem ipsum dolor sit amet consectetur. Blandit ultrices velit aenean est cras turpis. </span>
                        <button class="btn mt-4 border-none px-5 h-4rem" style="background-color: #f2ee1b">
                            <span class="font-bold pr-2"> Mua ngay </span>
                            <svg class="pl-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12H20.25" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex align-items-center relative">
                        <img src="@/assets/images/group-23.png" alt="" srcset="" style="height: 390px; width: 420px" />
                        <div class="sale-absolute absolute bg-green-300 border-circle h-7rem w-7rem flex align-items-center justify-content-center text-2xl font-medium border-3" style="border-color: #f2ee1b">
                            <span class="yellow-color">SALE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 px-0 py-0 flex flex-column">
                <div class="flex-1 mb-2 ml-3 border-round-sm" style="background-color: #5c9c78">
                    <div class="mx-5 flex relative h-full align-items-center">
                        <div class="">
                            <div class="flex flex-column">
                                <span class="yellow-color">SUMBER SALES</span>
                                <span class="text-white text-3xl">SP FORCE</span>
                                <span class="text-white text-3xl">New arrival</span>
                            </div>
                            <div>
                                <button class="btn mt-3 border-none px-4 h-3rem" style="background-color: #f2ee1b">
                                    <span class="font-bold pr-2"> Mua ngay </span>
                                    <svg class="pl-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12H20.25" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img class="absolute" src="@/assets/images/image-8.png" alt="" style="bottom: 0px" />
                            <img class="absolute" src="@/assets/images/image-7.png" alt="" style="bottom: 0px; right: -20px" />
                            <span class="sale-off size-16px absolute" style="top: 25px; right: 0px">-29% off</span>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div class="bg-gray-200 ml-3 flex-1 mt-2 border-round-sm">
                    <div class="flex mx-4 align-items-center h-full">
                        <div>
                            <img class="mx-2" src="@/assets/images/image-11.png" alt="" />
                        </div>

                        <div>
                            <div class="flex flex-column">
                                <span class="text-3xl font-semibold my-2">SP KEPMAX F1 20W-50</span>
                                <span class="blue-color size-18px font-semibold my-1">$299 USD</span>
                            </div>
                            <button class="btn mt-3 border-none px-4 h-3rem" style="background-color: #f2ee1b">
                                <span class="font-bold pr-2"> Mua ngay </span>
                                <svg class="pl-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto mt-4 card">
        <div class="flex justify-content-between">
            <div class="flex align-items-center">
                <div class="mr-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M35 27.7031V12.2968C34.9988 12.0743 34.939 11.856 34.8265 11.664C34.714 11.4719 34.5529 11.313 34.3594 11.2031L20.6094 3.4687C20.4241 3.36173 20.2139 3.30542 20 3.30542C19.7861 3.30542 19.5759 3.36173 19.3906 3.4687L5.64062 11.2031C5.44711 11.313 5.28599 11.4719 5.17352 11.664C5.06105 11.856 5.0012 12.0743 5 12.2968V27.7031C5.0012 27.9256 5.06105 28.1439 5.17352 28.3359C5.28599 28.528 5.44711 28.6869 5.64062 28.7968L19.3906 36.5312C19.5759 36.6382 19.7861 36.6945 20 36.6945C20.2139 36.6945 20.4241 36.6382 20.6094 36.5312L34.3594 28.7968C34.5529 28.6869 34.714 28.528 34.8265 28.3359C34.939 28.1439 34.9988 27.9256 35 27.7031V27.7031Z"
                            stroke="#191C1F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M27.6562 23.8281V15.7031L12.5 7.34375" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M34.8281 11.6562L20.1406 20L5.17188 11.6562" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.1406 20L20 36.6875" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="flex flex-column">
                    <span class="font-medium mb-1">VẬN CHUYỂN NHANH</span>
                    <span>Vận chuyển trong 24h</span>
                </div>
            </div>
            <div class="flex align-items-center">
                <div class="mx-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.75 8.75V17.3594C8.75 23.5625 13.7187 28.7031 19.9219 28.75C21.4058 28.7603 22.8771 28.4769 24.2511 27.9162C25.625 27.3554 26.8744 26.5284 27.9274 25.4827C28.9803 24.437 29.816 23.1933 30.3862 21.8233C30.9565 20.4533 31.25 18.984 31.25 17.5V8.75C31.25 8.41848 31.1183 8.10054 30.8839 7.86612C30.6495 7.6317 30.3315 7.5 30 7.5H10C9.66848 7.5 9.35054 7.6317 9.11612 7.86612C8.8817 8.10054 8.75 8.41848 8.75 8.75Z"
                            stroke="#191C1F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M15 35H25" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 28.75V35" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M30.9688 20H32.5C33.8261 20 35.0979 19.4732 36.0355 18.5355C36.9732 17.5979 37.5 16.3261 37.5 15V12.5C37.5 12.1685 37.3683 11.8505 37.1339 11.6161C36.8995 11.3817 36.5815 11.25 36.25 11.25H31.25"
                            stroke="#191C1F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.0625 20H7.48438C6.15829 20 4.88652 19.4732 3.94884 18.5355C3.01116 17.5979 2.48438 16.3261 2.48438 15V12.5C2.48438 12.1685 2.61607 11.8505 2.85049 11.6161C3.08491 11.3817 3.40285 11.25 3.73438 11.25H8.73438"
                            stroke="#191C1F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div class="flex flex-column">
                    <span class="font-medium mb-1">HOÀN TRẢ TRONG 24H</span>
                    <span>100% hoàn tiền</span>
                </div>
            </div>
            <div class="flex align-items-center">
                <div class="mx-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M35 8.75H5C4.30964 8.75 3.75 9.30964 3.75 10V30C3.75 30.6904 4.30964 31.25 5 31.25H35C35.6904 31.25 36.25 30.6904 36.25 30V10C36.25 9.30964 35.6904 8.75 35 8.75Z"
                            stroke="#191C1F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M26.25 26.25H31.25" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.75 26.25H21.25" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.75 15.1406H36.25" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="flex flex-column">
                    <span class="font-medium mb-1">THANH TOÁN BẢO MẬT</span>
                    <span>Thanh toán an toàn</span>
                </div>
            </div>
            <div class="flex align-items-center">
                <div class="mx-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M35.2344 21.25H30.2344C29.5713 21.25 28.9354 21.5134 28.4666 21.9823C27.9978 22.4511 27.7344 23.087 27.7344 23.75V30C27.7344 30.6631 27.9978 31.299 28.4666 31.7678C28.9354 32.2366 29.5713 32.5 30.2344 32.5H32.7344C33.3974 32.5 34.0333 32.2366 34.5021 31.7678C34.971 31.299 35.2344 30.6631 35.2344 30V21.25ZM35.2344 21.25C35.2344 19.2696 34.8424 17.3088 34.0807 15.4808C33.3191 13.6527 32.203 11.9935 30.7969 10.599C29.3907 9.20447 27.7224 8.10219 25.888 7.35576C24.0537 6.60933 22.0897 6.23353 20.1094 6.25003C18.1304 6.2356 16.1681 6.61294 14.3355 7.36029C12.503 8.10765 10.8365 9.21026 9.432 10.6046C8.02751 11.9989 6.91283 13.6574 6.15218 15.4844C5.39153 17.3115 4.99995 19.271 5 21.25V30C5 30.6631 5.26339 31.299 5.73223 31.7678C6.20107 32.2366 6.83696 32.5 7.5 32.5H10C10.663 32.5 11.2989 32.2366 11.7678 31.7678C12.2366 31.299 12.5 30.6631 12.5 30V23.75C12.5 23.087 12.2366 22.4511 11.7678 21.9823C11.2989 21.5134 10.663 21.25 10 21.25H5"
                            stroke="#191C1F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div class="flex flex-column">
                    <span class="font-medium mb-1">HỖ TRỢ 24/7</span>
                    <span>Hỗ trợ trực tiếp / tin nhắn</span>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto my-6">
        <div class="flex justify-content-between align-items-center">
            <div class="flex align-items-center">
                <span class="text-3xl font-semibold mr-3">Flashsale</span>
                <span class="mx-2">Thời gian kết thúc</span>
                <span class="sale-off">16d : 21h : 57m : 23s</span>
            </div>
            <div class="flex align-items-center">
                <span class="blue-color mx-2 font-medium cursor-pointer hover:underline"> Xem tất cả </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.125 10H16.875" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>

        <div>
            <div class="grid nested-grid">
                <div class="col-3" v-for="(item, index) in filteredProductMainFS" :key="index">
                    <div class="p-4 px-3 border-1 border-round-xs" style="border-color: var(--surface-border)">
                        <div class="flex justify-content-center mb-3">
                            <img :src="item.image" :alt="item.title" style="width: 254px; height: 254px" />
                        </div>
                        <div class="flex flex-column">
                            <span class="flex my-1">
                                <Rating v-model="item.rating" :cancel="false" />
                                <span class="gray-color-3 text-sx ml-2">({{ item.voted }})</span>
                            </span>
                            <span class="hidden-text size-16px my-1">{{ item.title }}</span>
                            <span class="my-1">
                                <span class="size-16px line-through gray-color"> $ {{ item.oldPrice }} </span>
                                <span class="ml-1 size-18px blue-color"> $ {{ item.newPrice }} </span>
                            </span>
                            <span>{{ item.description }}</span>
                        </div>

                        <div class="mt-4">
                            <div class="flex justify-content-between">
                                <span class="p-3 border-round-xs" style="background-color: #ffe7d5">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                                <span class="text-white p-3 border-round-xs" style="background-color: #fa8232">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span class="ml-2"> Thêm vào giỏ </span>
                                </span>
                                <span class="p-3 border-round-xs" style="background-color: #ffe7d5">
                                    <i class="fa-regular fa-eye"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="grid">
                        <div v-for="(item, index) in filteredSubProductMainFS" :key="index" class="col-3">
                            <div>
                                <img :src="item.image" :alt="item.description" />
                            </div>
                            <div class="flex flex-column">
                                <span>
                                    {{ item.title }}
                                </span>
                                <span>
                                    {{ item.newPrice }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto my-6">
            <div class="flex justify-content-center">
                <span class="text-4xl font-semibold hover:text-blue-700"> Danh mục sản phẩm </span>
            </div>

            <div class="flex justify-content-between my-6">
                <div v-for="(company, index) in companies" :key="index" class="flex flex-column justify-content-center border-round-xs border-1" style="width: 205px; height: 236px; border-color: var(--surface-border)">
                    <img :src="company.image" class="mx-auto mb-3" alt="" style="width: 148px; height: 148px" />
                    <p class="text-center mt-2 mx-auto cursor-pointer hover:underline hidden-product-categories">{{ company.companyName }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.sale-absolute {
    left: 325px;
    top: 114px;
}

.sale-off {
    padding: 8px 16px;
    background: #efd33d;
    border-radius: 3px;
}

.sale-off-left {
    padding: 5px 10px;
    border-radius: 2px;
    position: absolute;
    top: 15px;
    left: 15px;
}

.sale-off-left-2 {
    top: 50px;
}

.hidden-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hidden-product-categories {
    white-space: nowrap; /* Ngăn văn bản xuống dòng */
    overflow: hidden; /* Ẩn phần văn bản vượt quá kích thước của phần tử */
    text-overflow: ellipsis; /* Hiển thị dấu ... khi văn bản bị cắt */
    max-width: 110px;
}
</style>
