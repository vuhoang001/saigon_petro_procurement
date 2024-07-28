<template>
  <div class="flex justify-content-between align-items-center mb-4">
    <div class="text-2xl font-semibold uppercase">Danh mục sản phẩm</div>
    <div class="flex gap-2">
      <Button label="Thêm mới" icon="fa-solid fa-plus" @click="NewItem()"></Button>
      <Button
        label="Cập nhật"
        icon="fa-solid fa-rotate-right"
        class="bg-green-700"
      ></Button>
    </div>
  </div>

  <div class="grid mt-3">
    <div class="col-12 h-screen bg-white">
      <DataTable
        :value="dataEdit.products"
        tableStyle="min-width: 50rem;"
        header="surface-200"
      >
        <Column field="id" header="#" :style="{ width: '5%' }"></Column>
        <Column field="sku" header="Mã sản phẩm" :style="{ width: '15%' }"></Column>
        <Column field="name" header="Tên sản phẩm" :style="{ width: '30%' }"></Column>
        <Column field="name" header="Nhóm sản phẩm" :style="{ width: '25%' }"></Column>
        <Column field="created_at" header="Ngày tạo" :style="{ width: '15%' }">
          <template #body="slotProps">
            <div>{{ format(slotProps.data.created_at, "dd/MM/yyyy") }}</div>
          </template>
        </Column>

        <Column header="Hành động" :style="{ width: '15%' }">
          <template #body="slotProps">
            <div>
              <Button class="mr-1" icon="fa-regular fa-eye" text />
              <Button
                class="ml-1"
                icon="fa-regular fa-pen-to-square"
                text
                @click="UpdateData(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>

  <Dialog
    v-model:visible="dialogItem"
    modal
    position="top"
    :draggable="false"
    header="Thêm mới hàng hoá"
    :style="{ width: '85%' }"
    class="p-fluid"
  >
    <div>
      <div class="grid card mt-3">
        <div class="col-12">
          <div class="field">
            <label for="code">Mã sản phẩm</label>
            <InputText id="code" v-model="payload.sku" aria-describedby="code-help" />
          </div>
          <div class="field">
            <label for="name">Tên sản phẩm</label>
            <InputText id="name" v-model="payload.name" aria-describedby="name-help" />
          </div>
          <div class="field">
            <label for="name">Mô tả sản phẩm</label>
            <Textarea
              id="name"
              v-model="payload.description"
              aria-describedby="name-help"
            />
          </div>
          <div class="field">
            <label for="name">Ảnh sản phẩm</label>
            <input type="file" class="ml-2" id="file-image" @change="UploadFile" />
          </div>
        </div>
        <div class="col-12">
          <TabView>
            <TabPanel header="Thông tin">
              <div>
                <ckeditor v-model="payload.information" :editor="editor" />
              </div>
            </TabPanel>
            <TabPanel header="Tính năng">
              <div>
                <ckeditor v-model="payload.feature" :editor="editor" />
              </div>
            </TabPanel>
            <TabPanel header="Thông số">
              <div>
                <ckeditor v-model="payload.specifications" :editor="editor" />
              </div>
            </TabPanel>
            <TabPanel header="Tài liệu">
              <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
              </p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Huỷ"
          severity="secondary"
          @click="dialogItem = false"
        ></Button>
        <Button type="button" label="Lưu" @click="SaveItem()"></Button>
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
<script setup>
import { ref, onBeforeMount } from "vue";
import API from "../../../../api/api-main";
import { format } from "date-fns";
import merge from "lodash/merge";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useGlobal } from "@/services/useGlobal";

const { toast, FunctionGlobal } = useGlobal();
const editor = ClassicEditor;

const payload = ref({
  category: "",
  code_in_sap: "",
  description: "",
  feature: "",
  id: 0,
  information: "",
  is_active: true,
  main_image_path: "",
  name: "",
  price: 0,
  sku: "",
  specifications: "",
  stock: 0,
});
const dataClear = JSON.stringify(payload.value);
const dialogItem = ref(false);
const dataEdit = ref({ submited: false, products: [] });

onBeforeMount(() => {
  GetItem();
});

const GetItem = async () => {
  try {
    const res = await API.get("products?size=10&page=1");
    if (res.data) {
      dataEdit.value.products = res.data.products;
    }
  } catch (error) {}
};
const NewItem = () => {
  ClearData();
  dialogItem.value = true;
};
const UpdateData = (data) => {
  payload.value = merge({}, payload.value, data);
  console.log(payload.value);
  dialogItem.value = true;
};
const UploadFile = (event) => {
  const file = event.target.files[0];
  console.log(file);
};
const SaveItem = async () => {
  try {
    const res = await API.add("products", payload.value);
    if (res.data) {
      FunctionGlobal.$notify("S", res.data.message, toast);
      GetItem();
    }
    dialogItem.value = false;
    ClearData();
  } catch (error) {}
};
const ClearData = () => {
  payload.value = JSON.parse(dataClear);
};
</script>
