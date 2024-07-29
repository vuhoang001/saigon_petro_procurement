<template>
    <div class="border-1 border-round-md border-solid border-gray-300">
        <div class="font-medium py-3 border-bottom-1 border-gray-300 bg-white">
            <p class="ml-3 font-semibold text-xl">KHO & HÀNG TỒN</p>
        </div>

        <div>
            <DataTable :value="products" paginator :rows="10" header="Product Inventory" tableStyle="min-width: 50rem">
                <Column field="sku" header="MÃ SẢN PHẨM" style="font-size: 14px;"></Column>
                <Column field="name" header="TÊN SẢN PHẨM" style="font-size: 14px;"></Column>
                <Column field="stock" header="TỒN KHO" style="font-size: 14px;"></Column>
            </DataTable>
        </div>
    </div>
</template>


<script setup>
import { ref, onBeforeMount } from 'vue'
import api from '@/api/api-main'
const products = ref()

const getData = async () => {
    const res = await api.get("products?size=8&page=1");
    products.value = res.data.products;
}

onBeforeMount(() => {
    getData()
})

</script>
