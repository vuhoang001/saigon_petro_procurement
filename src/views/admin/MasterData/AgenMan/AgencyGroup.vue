<script setup>
import { ref } from 'vue';
const products = ref([
    {
        id: '001',
        groupCode: 'Product 1',
        groupName: 'Category 1',
        desciption: 10
    },
    {
        id: '002',
        groupCode: 'Product 2',
        groupName: 'Category 2',
        desciption: 20
    },
    {
        id: '003',
        groupCode: 'Product 3',
        groupName: 'Category 3',
        desciption: 15
    }
]);
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Danh mục nhóm đại lý</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column field="id" header="#" :style="{ width: '5%' }"></Column>
                <Column field="groupCode" header="Mã nhóm" :style="{ width: '15%' }"></Column>
                <Column field="groupName" header="Tên nhóm đại lý" :style="{ width: '35%' }"></Column>
                <Column field="desciption" header="Mô tả" :style="{ width: '45%' }"></Column>
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
