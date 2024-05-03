<script setup>
import { reactive, ref } from 'vue';

const selectedAppLv = ref();
const visible = ref(false);
const products = ref([
    {
        id: '001',
        appLvName: 'Product 1',
        desc: 'Category 1',
        numbOfApp: 10,
        numbOfRejec: 10,
        actions: [
            {
                action: 'fa-regular fa-pen-to-square'
            },
            {
                action: 'fa-regular fa-trash-can'
            }
        ]
    },
    {
        id: '002',
        appLvName: 'Product 2',
        desc: 'Category 2',
        numbOfApp: 20,
        numbOfRejec: 20,
        actions: [
            {
                action: 'fa-regular fa-pen-to-square'
            },
            {
                action: 'fa-regular fa-trash-can'
            }
        ]
    },
    {
        id: '003',
        appLvName: 'Product 3',
        desc: 'Category 3',
        numbOfApp: 15,
        numbOfRejec: 15,
        actions: [
            {
                action: 'fa-regular fa-pen-to-square'
            },
            {
                action: 'fa-regular fa-trash-can'
            }
        ]
    }
]);

const formData = reactive({
    approvalName: '',
    desc: '',
    numbOfApp: 0,
    numberOfRej: 0,
    status: {
        type: Boolean
    }
});

const submitForm = () => {
    console.log(formData);
};
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Cấp phê duyệt</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700" @click="visible = true"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable v-model:selection="selectedAppLv" :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column selectionMode="multiple"></Column>
                <Column field="id" header="#"></Column>
                <Column field="appLvName" header="Tên cấp phê duyệt"></Column>
                <Column field="desc" header="Mô tả"></Column>
                <Column field="numbOfApp" header="Số lượng phê duyệt"></Column>
                <Column field="numbOfRejec" header="Số lượng từ chối"></Column>
                <Column field="actions" header="Hành động">
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

    <Dialog v-model:visible="visible" modal header="Thêm mới cấp phê duyệt" :style="{ width: '50rem' }">
        <Divider />
        <form @submit.prevent="submitForm">
            <div class="flex flex-column">
                <label for="approvalName" class="font-semibold my-2">Tên cấp phê duyệt</label>
                <InputText id="approvalName" class="flex-auto" v-model="formData.approvalName" autocomplete="off" required />
            </div>
            <div class="flex flex-column mt-2">
                <label for="desc" class="font-semibold my-2">Mô tả</label>
                <Textarea id="desc" rows="3" class="flex-auto" v-model="formData.desc" autocomplete="off"></Textarea>
            </div>
            <div>
                <div class="grid mt-2">
                    <div class="col-6">
                        <div class="flex flex-column">
                            <label for="approvalName" class="font-semibold my-2">Số lượng phê duyệt</label>
                            <InputText id="numbOfApp" class="flex-auto" v-model="formData.numbOfApp" autocomplete="off" required />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="flex flex-column">
                            <label for="approvalName" class="font-semibold my-2">Số lượng từ chối</label>
                            <InputText id="numberOfRej" class="flex-auto" v-model="formData.numberOfRej" autocomplete="off" required />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <DataTable>
                    <Column field="id" header="#"></Column>
                    <Column field="id" header="Người duyệt"></Column>
                    <Column field="appLvName" header="Đơn vị trực thuộc"></Column>
                </DataTable>
            </div>
            <div class="flex align-items-center mt-2">
                <label class="mr-4">Trạng thái</label>
                <InputSwitch v-model="formData.status" />
            </div>
            <div class="flex justify-content-end gap-2 mt-2">
                <Button class="px-4" type="button" label="Hủy" severity="secondary" @click="visible = false"></Button>
                <Button class="px-4" type="submit" label="Lưu" @click="visible = false"></Button>
            </div>
        </form>
    </Dialog>
</template>

<style scoped>
:deep(.p-datatable-table .p-datatable-thead tr th) {
    background-color: #dedede;
    color: black;
    font-weight: bold;
}

:deep(.p-datatable-thead th:nth-child(1) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(5) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(6) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(7) .p-column-header-content) {
    display: flex;
    justify-content: center;
}

:deep(.p-datatable-table) {
    height: 150px;
}

:deep(.p-datatable-tbody td:nth-child(1)),
:deep(.p-datatable-tbody td:nth-child(5)),
:deep(.p-datatable-tbody td:nth-child(6)),
:deep(.p-datatable-tbody td:nth-child(7)) {
    text-align: center;
}
</style>
