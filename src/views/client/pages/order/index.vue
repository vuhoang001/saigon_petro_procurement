<script setup>
import { reactive } from 'vue';

const carts = reactive([
    {
        title: 'Đơn hàng 001',
        id: '#PO000001',
        status: 'Xử lý',
        startDate: '22/12/2022',
        endDate: '22/12/2022'
    },
    {
        title: 'Đơn hàng 001',
        id: '#PO000001',
        status: 'Xử lý',
        startDate: '22/12/2022',
        endDate: '22/12/2022'
    },
    {
        title: 'Đơn hàng 001',
        id: '#PO000001',
        status: 'Xử lý',
        startDate: '22/12/2022',
        endDate: '22/12/2022'
    },
    {
        title: 'Đơn hàng 001',
        id: '#PO000001',
        status: 'Xử lý',
        startDate: '22/12/2022',
        endDate: '22/12/2022'
    },
    {
        title: 'Đơn hàng 001',
        id: '#PO000001',
        status: 'Xử lý',
        startDate: '22/12/2022',
        endDate: '22/12/2022'
    },
    {
        title: 'Đơn hàng 001',
        id: '#PO000001',
        status: 'Xử lý',
        startDate: '22/12/2022',
        endDate: '22/12/2022'
    }
]);
</script>

<template>
    <div v-for="(item, index) in carts" :key="index">
        <div class="mt-3">
            <div class="container flex mx-auto justify-content-between align-items-center px-2 py-2 bg-gray-200 mt-3 border-round-xs">
                <div class="ml-3 mt-1 flex">
                    <div class="text-7xl">
                        <i class="fa-regular fa-file-lines"></i>
                    </div>
                    <div class="pl-3">
                        <div class="text-2xl font-bold mt-1">{{ item.title }}</div>
                        <div class="mt-2">{{ item.id }}</div>
                    </div>
                </div>
                <div>
                    <div>Trạng thái</div>
                    <div class="text-green-300 font-semibold text-lg mt-2">{{ item.status }}</div>
                </div>
                <div>
                    <div>Ngày tạo</div>
                    <div class="text-green-300 font-semibold text-lg mt-2">{{ item.startDate }}</div>
                </div>
                <div>
                    <div>Ngày cần hàng</div>
                    <div class="text-green-300 font-semibold text-lg mt-2">{{ item.endDate }}</div>
                </div>
                <div class="pr-8 mr-5 text-2xl"><i class="fa-regular fa-eye"></i></div>
            </div>
        </div>
    </div>
</template>
