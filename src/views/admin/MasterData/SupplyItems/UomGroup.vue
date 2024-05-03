<script setup>
import { ref } from 'vue';
const products = ref([
    {
        id: '01',
        unitGrpCode: 'Product 1',
        unitGrpName: 'goodsGrp 1',
        desc: 10
    },
    {
        id: '02',
        unitGrpCode: 'Product 2',
        unitGrpName: 'goodsGrp 2',
        desc: 20
    },
    {
        id: '03',
        unitGrpCode: 'Product 3',
        unitGrpName: 'goodsGrp 3',
        desc: 15
    }
]);
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Nhóm đơn vị tính</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column field="id" header="#" :style="{ width: '5%' }"></Column>
                <Column field="unitGrpCode" header="Mã nhóm đơn vị tính" :style="{ width: '20%' }"></Column>
                <Column field="unitGrpName" header="Tên nhóm đơn vị tính" :style="{ width: '30%' }"></Column>
                <Column field="desc" header="Mô tả" :style="{ width: '45%' }"></Column>
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
