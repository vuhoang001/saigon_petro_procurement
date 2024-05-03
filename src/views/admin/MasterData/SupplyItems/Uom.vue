<script setup>
import { ref } from 'vue';
const products = ref([
    {
        id: '01',
        unitCode: 'Product 1',
        unitName: 'goodsGrp 1',
        length: 10,
        width: 10,
        height: 10,
        volumn: 10
    },
    {
        id: '02',
        unitCode: 'Product 2',
        unitName: 'goodsGrp 2',
        length: 10,
        width: 10,
        height: 10,
        volumn: 10
    },
    {
        id: '03',
        unitCode: 'Product 3',
        unitName: 'goodsGrp 3',
        length: 10,
        width: 10,
        height: 10,
        volumn: 10
    }
]);
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Đơn vị tính</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column field="id" header="#"> </Column>
                <Column field="unitCode" header="Mã nhóm hàng hóa"></Column>
                <Column field="unitName" header="Tên nhóm hàng hóa"></Column>
                <Column field="length" header="Chiều dài"></Column>
                <Column field="width" header="Chiều rộng"></Column>
                <Column field="height" header="Chiều cao"></Column>
                <Column field="volumn" header="Thể tích"></Column>
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
:deep(.p-datatable-thead th:nth-child(4) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(5) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(6) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(7) .p-column-header-content) {
    display: flex;
    justify-content: center;
}

:deep(.p-datatable-tbody td:nth-child(1)),
:deep(.p-datatable-tbody td:nth-child(4)),
:deep(.p-datatable-tbody td:nth-child(5)),
:deep(.p-datatable-tbody td:nth-child(6)),
:deep(.p-datatable-tbody td:nth-child(7)) {
    text-align: center;
}
</style>
