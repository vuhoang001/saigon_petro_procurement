<script setup>
import { reactive, ref } from 'vue';

const selectedAppLv = ref();
const visible = ref(false);
const products = ref([
    {
        id: '001',
        appLvName: 'Product 1',
        desc: 'Category 1',
        status: 'Đang hoạt động',
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
        status: 'Đang hoạt động',
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
        status: 'Đang hoạt động',
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
    approvaTmplName: '',
    desc: '',
    reqApply: false,
    apprProcess: Boolean,
    status: false
});

const submitForm = () => {
    console.log(formData.userName);
    console.log(formData.email);
};

const apprProcess = ref('');
</script>

<template>
    <div class="flex justify-content-between align-items-center mb-4">
        <div class="text-2xl font-semibold uppercase">Mẫu phê duyệt</div>
        <Button label="Cập nhật" icon="fa-solid fa-rotate-right" class="bg-green-700 btn" @click="visible = true"></Button>
    </div>

    <div class="grid mt-3">
        <div class="col-12 h-screen bg-white">
            <DataTable v-model:selection="selectedAppLv" :value="products" tableStyle="min-width: 50rem;" header="surface-200">
                <Column selectionMode="multiple" class="center" :style="{ width: '5%' }"></Column>
                <Column field="id" header="#" :style="{ width: '5%' }"></Column>
                <Column field="appLvName" header="Tên mẫu phê duyệt" :style="{ width: '20%' }"></Column>
                <Column field="desc" header="Mô tả" :style="{ width: '25%' }"></Column>
                <Column field="status" header="Trạng thái" :style="{ width: '20%' }"></Column>
                <Column field="actions" header="Hành động" :style="{ width: '20%' }">
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

    <Dialog v-model:visible="visible" modal header="Thêm mới mẫu phê duyệt" :style="{ width: '50rem' }">
        <Divider />
        <form @submit.prevent="submitForm">
            <div class="flex flex-column">
                <label for="approvalTmpName" class="font-semibold my-2">Tên mẫu phê duyệt</label>
                <InputText id="approvalTmpName" v-model="formData.approvaTmplName" class="flex-auto" autocomplete="off" required />
            </div>
            <div class="flex flex-column mt-3">
                <label for="desc" class="font-semibold my-2">Mô tả</label>
                <Textarea id="desc" rows="3" v-model="formData.desc" class="flex-auto" autocomplete="off"></Textarea>
            </div>

            <div class="mt-2">
                <TabView>
                    <TabPanel header="Người tạo">
                        <div class="h-18rem">
                            <DataTable class="">
                                <Column field="id" header="#"></Column>
                                <Column field="id" header="Người duyệt"></Column>
                                <Column field="appLvName" header="Đơn vị trực thuộc"></Column>
                            </DataTable>
                        </div>
                    </TabPanel>
                    <TabPanel header="Chứng từ">
                        <div class="h-18rem">
                            <div class="pt-3">
                                <TriStateCheckbox v-model="formData.reqApply" />
                                <label class="ml-3">Yêu cầu nhập hàng</label>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="Quy trình">
                        <div class="h-18rem">
                            <DataTable class="">
                                <Column field="id" header="#" :style="{ width: '20%' }"></Column>
                                <Column field="appLvName" header="Tên cấp phê duyệt" :style="{ width: '40%' }"></Column>
                                <Column field="desc" header="Mô tả" :style="{ width: '40%' }"></Column>
                            </DataTable>
                        </div>
                    </TabPanel>
                    <TabPanel header="Quy định">
                        <div class="h-18rem">
                            <div>
                                <label>Khởi động quy trình phê duyệt: </label>
                                <div class="mt-3">
                                    <RadioButton v-model="apprProcess" name="applyProduct" value="productGrp"></RadioButton>
                                    <label for="applyProduct" class="ml-2">Luôn luôn</label>
                                </div>
                                <div class="mt-3">
                                    <RadioButton v-model="apprProcess" name="applyProduct" value="product"></RadioButton>
                                    <label for="applyProduct" class="ml-2">Khi thỏa mãn các điều kiện sau</label>
                                </div>

                                <div>
                                    <div class="grid mt-4" style="background-color: #dedede">
                                        <div class="col-4">
                                            <label> Quy định </label>
                                        </div>
                                        <div class="col-4">
                                            <label> Điều kiện </label>
                                        </div>
                                        <div class="col-4">
                                            <label> Giá trị </label>
                                        </div>
                                    </div>

                                    <div class="grid mt-2">
                                        <div class="col-4 align-items-center">
                                            <label> Tổng giá trị chứng từ </label>
                                        </div>
                                        <div class="col-4">
                                            <Dropdown class="w-full" />
                                        </div>
                                        <div class="col-4">
                                            <InputText type="text" class="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
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
:deep(.p-datatable-thead th:nth-child(2) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(5) .p-column-header-content),
:deep(.p-datatable-thead th:nth-child(6) .p-column-header-content) {
    display: flex;
    justify-content: center;
}

:deep(.p-datatable-tbody td:nth-child(1)),
:deep(.p-datatable-tbody td:nth-child(2)),
:deep(.p-datatable-tbody td:nth-child(5)),
:deep(.p-datatable-tbody td:nth-child(6)) {
    text-align: center;
}
</style>
