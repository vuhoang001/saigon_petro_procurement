<template>
  <div class="flex justify-content-between align-items-center mb-4">
    <div class="text-2xl font-semibold uppercase">Danh mục nhà phân phối</div>
    <div class="flex gap-3">
      <Button
        label="Thêm mới"
        icon="fa-solid fa-plus"
        class="bg-info-700"
        @click="newProduct"
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
      <DataTable
        :value="products"
        :paginator="true"
        :rows="10"
        header="surface-200"
        v-model="selectedProducts"
      >
        <Column selectionMode="multiple"></Column>
        <Column field="id" header="Mã NPP"></Column>
        <Column field="distrName" header="Tên nhà phân phối"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Số điện thoại"></Column>
        <Column field="status" header="Trạng thái">
          <template #body="slotProps">
            <span>{{
              slotProps.data.status ? "Đang hoạt động" : "Không hoạt động"
            }}</span>
          </template>
        </Column>
        <Column field="activeStatus" header="Trạng thái kích hoạt">
          <template #body="slotProps">
            <span :class="styleActiveStatus(slotProps.data.activeStatus)">
              {{ slotProps.data.activeStatus ? "Đã kích hoạt" : "Chưa kích hoạt" }}</span
            >
          </template>
        </Column>
        <Column field="action" header="Hành động">
          <template #body="slotProps">
            <div class="flex justify-content-around">
              <i
                class="cursor-pointer fa-solid fa-pen"
                @click="openDialog(slotProps.data)"
              ></i>
              <i class="cursor-pointer fa-solid fa-trash"></i>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>

  <Dialog
    v-model:visible="dialogOnOff"
    modal
    :header="nameDialog"
    :style="{ width: '45rem' }"
    class="p-fluid"
  >
    <div class="card">
      <div class="grid">
        <div class="col-6 mt-2 hidden">
          <span class="block mb-2">Mã số thuế</span>
          <div class="flex align-items-center">
            <InputText
              id="code"
              style="width: 55%"
              placeholder="_____"
              aria-describedby="code-help"
              :value="product.vendorCode"
            />
            <span class="text-center font-semibold" style="width: 10%">-</span>
            <InputText
              id="code"
              style="width: 35%"
              placeholder="xxx"
              aria-describedby="code-help"
            />
          </div>
        </div>
        <div class="col-12 mt-2">
          <div class="field">
            <label for="name">Tên nhà nhà phân phối</label>
            <InputText
              placeholder="Nhập tên nhà phân phối"
              aria-describedby="name-help"
              :value="product.vendorName"
            />
          </div>
        </div>

        <div class="col-12 pt-0 mt-2">
          <div class="flex justify-content-between mb-2">
            <span>Email</span>
            <span class="text-gray-400 font-italic underline"
              >(Tài khoản và mật khẩu sẽ được gửi tới email này)</span
            >
          </div>
          <InputText
            placeholder="Nhập email"
            :value="product.email"
            aria-describedby="name-help"
          />
        </div>

        <div class="col-12 pt-0 mt-2">
          <div>
            <span class="block mb-2">Số điện thoại</span>
            <InputText
              placeholder="Nhập số điện thoại"
              aria-describedby="name-help"
              :value="product.phone"
            />
          </div>
        </div>

        <div class="col-12 pt-0 mt-2 hidden">
          <span class="block mb-2">Trạng thái</span>
          <div class="flex justify-content-around">
            <div class="flex align-items-center">
              <RadioButton
                inputId="ingredient1"
                name="status"
                v-model="product.status"
                :value="true"
              />
              <label for="ingredient1" class="ml-2">Đang kích hoạt</label>
            </div>
            <div class="flex align-items-center hidden">
              <RadioButton
                inputId="ingredient2"
                name="status"
                v-model="product.status"
                :value="false"
              />
              <label for="ingredient2" class="ml-2">Không kích hoạt</label>
            </div>
          </div>
        </div>

        <div class="col-12 pt-0 mt-2 hidden">
          <span class="block mb-2">Trạng thái kích hoạt</span>
          <div class="flex justify-content-around">
            <div class="flex align-items-center">
              <RadioButton
                v-model="product.statusSelected"
                inputId="statusSelected1"
                name="statusSelected"
                :value="true"
              />
              <label for="statusSelected1" class="ml-2">Đã kích hoạt</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton
                v-model="product.statusSelected"
                inputId="statusSelected2"
                name="statusSelected"
                :value="false"
              />
              <label for="statusSelected2" class="ml-2">Chưa kích hoạt</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Huỷ"
          severity="secondary"
          @click="clearProduct()"
        ></Button>
        <Button type="button" label="Lưu" @click="saveEditProduct()"></Button>
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
import { ref, watch, onBeforeMount } from "vue";
import API from "@/api/api-main";

const API_URL = "business-partner";
const dialogOnOff = ref(false);
const selectedProducts = ref();
const nameDialog = ref("");
const products = ref([]);

onBeforeMount(() => {
  fetchAllDistributor();
});
watch(dialogOnOff, (newValue) => {
  if (newValue == false) {
    clearProduct();
  }
});

const product = ref({
  vendorCode: "",
  vendorName: "",
  email: "",
  phone: "",
  status: true,
  statusSelected: true,
});

const openDialog = (value) => {
  dialogOnOff.value = true;
  nameDialog.value = "CHỈNH SỬA NHÀ PHÂN PHỐI";
  product.value.vendorCode = value.id;
  product.value.vendorName = value.distrName;
  product.value.email = value.email;
  product.value.phone = value.phone;
  product.value.status = value.status;
  product.value.statusSelected = value.activeStatus;
};

const newProduct = () => {
  dialogOnOff.value = true;
  nameDialog.value = "THÊM MỚI NHÀ PHÂN PHỐI";
};

const clearProduct = () => {
  dialogOnOff.value = false;
  (product.value.vendorCode = ""),
    (product.value.vendorName = ""),
    (product.value.email = ""),
    (product.value.phone = ""),
    (product.value.status = ""),
    (product.value.statusSelected = "");
};

const saveEditProduct = (event) => {
  console.log(event);
};

const styleActiveStatus = (value) => {
  switch (value) {
    case true:
      return "text-green-400";
    case false:
      return "text-red-400";
    default:
      return null;
  }
};

const fetchAllDistributor = async () => {
  try {
    const res = await API.get(API_URL);
    console.log(res.data);
  } catch (error) {}
};
</script>
