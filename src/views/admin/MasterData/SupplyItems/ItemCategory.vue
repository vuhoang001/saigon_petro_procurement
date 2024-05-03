<script setup>
import { ref } from 'vue';
const products = ref([
    {
        id: '001',
        goodsCode: 'Product 1',
        goodsName: 'goods 1',
        goodsGroup: 10
    },
    {
        id: '002',
        goodsCode: 'Product 2',
        goodsName: 'goods 2',
        goodsGroup: 20
    },
    {
        id: '003',
        goodsCode: 'Product 3',
        goodsName: 'goods 3',
        goodsGroup: 15
    }
]);
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Danh mục hàng hóa</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column field="id" header="#" :style="{ width: '5%' }"></Column>
                <Column field="goodsCode" header="Mã hàng hóa" :style="{ width: '15%' }"></Column>
                <Column field="goodsName" header="Tên hàng hóa" :style="{ width: '40%' }"></Column>
                <Column field="goodsGroup" header="Nhóm hàng hóa" :style="{ width: '40%' }"></Column>
            </DataTable>
        </div>
    </div>
</template>

<style scoped>
:deep(.p-datatable-table .p-datatable-thead tr th) {
    background-color: #dedede;
    color: black;
    font-weight: bold;
}

:deep(.p-datatable-thead th:nth-child(1) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(2) .p-column-header-content) {
    display: flex;
    justify-content: center;
}

:deep(.p-datatable-tbody td:nth-child(1)),
:deep(.p-datatable-tbody td:nth-child(2)) {
    text-align: center;
}
</style>
