<script setup>
import { ref } from 'vue';
import createDiscount from './components/createDiscount.vue';
const page = ref({
    main: true
});

const pageTransition = () => {
    page.value.main = !page.value.main;
};
const selectedDiscount = ref();
const products = ref([
    {
        id: 1,
        discoutName: {
            label: 'Khuyến mãi tháng 04_Đại lý cấp 1',
            disc: 'Giảm giá 30% cho 4 sản phẩm với số lượng từ 200 sản phẩm'
        },
        discountType: 'Đồng giá',
        start: '12/10/2002',
        end: '24/4/2024',
        status: 'Đang hoạt động',
        actions: [
            {
                action: 'fa-regular fa-eye'
            },
            {
                action: 'fa-regular fa-pen-to-square'
            }
        ]
    },
    {
        id: 2,
        discoutName: {
            label: 'Khuyến mãi tháng 04_Đại lý cấp 1',
            disc: 'Giảm giá 30% cho 4 sản phẩm với số lượng từ 200 sản phẩm'
        },
        discountType: 'Giảm giá sản phẩm',
        start: '12/10/2002',
        end: '24/4/2024',
        status: 'Đang hoạt động',
        actions: [
            {
                action: 'fa-regular fa-eye'
            },
            {
                action: 'fa-regular fa-pen-to-square'
            }
        ]
    },
    {
        id: 3,
        discoutName: {
            label: 'Khuyến mãi tháng 04_Đại lý cấp 1',
            disc: 'Giảm giá 30% cho 4 sản phẩm với số lượng từ 200 sản phẩm'
        },
        discountType: 'Giảm giá sản phẩm',
        start: '12/10/2002',
        end: '24/4/2024',
        status: 'Đang hoạt động',
        actions: [
            {
                action: 'fa-regular fa-eye'
            },
            {
                action: 'fa-regular fa-pen-to-square'
            }
        ]
    }
]);
</script>

<template>
    <div v-if="page.main">
        <div class="flex justify-content-between align-items-center mb-4">
            <div class="text-2xl font-semibold uppercase">Danh sách khuyến mãi</div>
            <Button label="Tạo khuyến mãi" icon="fa-solid fa-plus" class="bg-green-700" @click="pageTransition"></Button>
        </div>

        <div class="grid mt-3">
            <div class="col-12 h-screen bg-white">
                <DataTable v-model:selection="selectedDiscount" :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                    <Column selectionMode="multiple" :style="{ width: '5%' }"></Column>
                    <Column field="discoutName" header="Tên khuyến mãi" :style="{ width: '20%' }">
                        <template #body="slotProps">
                            <span>{{ slotProps.data[slotProps.field].label }}</span>
                            <br />
                            <span class="text-gray-400 text-sm">{{ slotProps.data[slotProps.field].disc }}</span>
                        </template>
                    </Column>
                    <Column field="discountType" header="Loại khuyến mãi" :style="{ width: '20%' }"></Column>
                    <Column field="start" header="Bắt đầu" :style="{ width: '12%' }"></Column>
                    <Column field="end" header="Kết thúc" :style="{ width: '12%' }"></Column>
                    <Column field="status" header="Trạng thái" :style="{ width: '12%' }"></Column>
                    <Column field="actions" header="Hành động" :style="{ width: '14%' }">
                        <template #body="slotProps">
                            <div class="ml-3">
                                <i :class="slotProps.data.actions[0].action"></i>
                                <i class="mx-2"></i>
                                <i :class="slotProps.data.actions[1].action"></i>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
    <div v-if="!page.main">
        <createDiscount></createDiscount>
    </div>
</template>

<style scoped>
:deep(.p-datatable-table .p-datatable-thead tr th) {
    background-color: #dedede;
    color: black;
    font-weight: bold;
}

:deep(.p-datatable-thead th:nth-child(1) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(6) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(7) .p-column-header-content) {
    display: flex;
    justify-content: center;
}

:deep(.p-datatable-table) {
    height: 150px;
}

:deep(.p-datatable-tbody td:nth-child(1)),
:deep(.p-datatable-tbody td:nth-child(6)),
:deep(.p-datatable-tbody td:nth-child(7)) {
    text-align: center;
}
</style>
