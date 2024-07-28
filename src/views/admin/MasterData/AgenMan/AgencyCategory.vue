<script setup>
import { ref } from "vue";

const dialogAgency = ref(false);
const dataEdit = ref({
  submited: false,
});
const products = ref([
  {
    id: "001",
    distrCode: "Product 1",
    distrName: "Category 1",
    distrGroup: 10,
  },
  {
    id: "002",
    distrCode: "Product 2",
    distrName: "Category 2",
    distrGroup: 20,
  },
  {
    id: "003",
    distrCode: "Product 3",
    distrName: "Category 3",
    distrGroup: 15,
  },
]);

const NewAgency = () => {
  dialogAgency.value = true;
};
</script>

<template>
  <div class="flex justify-content-between align-items-center mb-4">
    <div class="text-2xl font-semibold uppercase">Danh mục nhà phân phối</div>
    <div class="flex gap-3">
      <Button
        label="Thêm mới"
        icon="fa-solid fa-plus"
        class="bg-info-700"
        @click="NewAgency"
      ></Button>
      <Button
        label="Cập nhật"
        icon="fa-solid fa-rotate-right"
        class="bg-green-700"
      ></Button>
    </div>
  </div>

  <div class="grid mt-3">
    <div class="col-12 h-screen bg-white">
      <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
        <Column field="id" header="#" :style="{ width: '5%' }"></Column>
        <Column
          field="distrCode"
          header="Mã nhà phân phối"
          :style="{ width: '15%' }"
        ></Column>
        <Column
          field="distrName"
          header="Tên nhà phân phối"
          :style="{ width: '35%' }"
        ></Column>
        <Column
          field="distrGroup"
          header="Nhóm nhà phân phối"
          :style="{ width: '45%' }"
        ></Column>
      </DataTable>
    </div>
  </div>

  <Dialog
    v-model:visible="dialogAgency"
    modal
    position="top"
    :draggable="false"
    header="Thêm mới nhà phân phối"
    :style="{ width: '45rem' }"
    class="p-fluid"
  >
    <div class="card">
      <div class="field">
        <label for="code">Mã nhà phân phối</label>
        <InputText id="code" v-model="value" aria-describedby="code-help" />
        <small class="text-red-300" v-if="dataEdit.submited" id="code-help"
          >Vui lòng nhập mãnhaf phân phối.</small
        >
      </div>
      <div class="field">
        <label for="name">Tên nhà nhà phân phối</label>
        <InputText id="name" v-model="value" aria-describedby="name-help" />
        <small v-if="dataEdit.submited" class="text-red-300" id="name-help"
          >Vui lòng nhập tên nhà phân phối.</small
        >
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Huỷ"
          severity="secondary"
          @click="dialogAgency = false"
        ></Button>
        <Button type="button" label="Lưu" @click="visible = false"></Button>
      </div>
    </template>
  </Dialog>
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
