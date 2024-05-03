<script setup>
import { ref } from 'vue';
const products = ref([
    {
        id: '001',
        goodsGrpCode: 'Product 1',
        goodsGrpName: 'goodsGrp 1',
        desc: 10
    },
    {
        id: '002',
        goodsGrpCode: 'Product 2',
        goodsGrpName: 'goodsGrp 2',
        desc: 20
    },
    {
        id: '003',
        goodsGrpCode: 'Product 3',
        goodsGrpName: 'goodsGrp 3',
        desc: 15
    }
]);

const headerStyle = {
    backgroundColor: '#DEDEDE', // choose your desired color
    color: 'black', // text color
    fontWeight: 'bold' // font weight if needed
    // add more styles as needed
};
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Danh mục nhóm hàng hóa</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column field="id" header="#" :headerStyle="headerStyle" :style="{ width: '5%' }"></Column>
                <Column field="goodsGrpCode" header="Mã nhóm hàng hóa" :headerStyle="headerStyle" :style="{ width: '20%' }"></Column>
                <Column field="goodsGrpName" header="Tên nhóm hàng hóa" :headerStyle="headerStyle" :style="{ width: '40%' }"></Column>
                <Column field="desc" header="Mô tả" :headerStyle="headerStyle" :style="{ width: '30%' }"></Column>
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

:deep(.p-datatable-thead th:nth-child(1) .p-column-header-content) {
    display: flex;
    justify-content: center;
}

:deep(.p-datatable-tbody td:nth-child(1)) {
    text-align: center;
}
</style>
