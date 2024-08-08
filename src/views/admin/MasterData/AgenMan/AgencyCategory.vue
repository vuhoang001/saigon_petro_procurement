<template>
  <div class="flex justify-content-between align-items-center mb-4">
    <div class="text-2xl font-semibold uppercase">Danh mục nhà phân phối</div>
    <div class="flex gap-3">
      <Button
        label="Thêm mới"
        icon="fa-solid fa-plus"
        class="bg-info-700"
        @click="newDistributor"
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
        :value="Distributor"
        :paginator="true"
        :rows="dataTable.size"
        :page="dataTable.page"
        :totalRecords="dataTable.total_count"
        header="surface-200"
        v-model="selectedDistributor"
        dataKey="partner_id"
        @page="onPageChange($event)"
        :rowsPerPageOptions="[10, 20, 30]"
        lazy
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Hiển thị {first} - {last} trên tổng {totalRecords} nhà phân phối"
      >
        <Column selectionMode="multiple"></Column>
        <Column field="partner_code" header="Mã NPP"></Column>
        <Column field="partner_name" header="Tên nhà phân phối"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone_number" header="Số điện thoại"></Column>
        <Column field="is_active" header="Trạng thái">
          <template #body="slotProps">
            <span>{{
              slotProps.data.is_active ? "Đang hoạt động" : "Không hoạt động"
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
              <Button
                @click="openDialog(slotProps.data)"
                icon="fa-solid fa-pen"
                text
              ></Button>
              <Button
                @click="deleteItem($event, slotProps.data)"
                severity="danger"
                icon="fa-solid fa-trash"
                text
              ></Button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>

  <Dialog
    v-model:visible="dialogOnOff"
    modal
    :header="dataEdit.headerDialog"
    :style="{ width: '85rem' }"
    class="p-fluid"
  >
    <div class="card">
      <div class="grid align-items-center">
        <div class="col-6">
          <div class="field">
            <label for="name">Mã nhà nhà phân phối</label>
            <InputText
              disabled
              placeholder="Mã nhà phân phối tự động sinh"
              aria-describedby="name-help"
              v-model="dataEdit.partner_code"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label for="name">Tên nhà nhà phân phối</label>
            <InputText
              placeholder="Nhập tên nhà phân phối"
              aria-describedby="name-help"
              v-model="dataEdit.partner_name"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label>Email</label>
            <InputText
              placeholder="Nhập email"
              v-model="dataEdit.email"
              aria-describedby="name-help"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="block">Số điện thoại</label>
            <InputText
              placeholder="Nhập số điện thoại"
              aria-describedby="name-help"
              v-model="dataEdit.phone_number"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="block">Tỉnh/Thành phố</label>
            <InputText
              placeholder="Nhập số điện thoại"
              aria-describedby="name-help"
              v-model="dataEdit.city"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="block">Quận/Huyện</label>
            <InputText
              placeholder="Nhập quận/huyện"
              aria-describedby="name-help"
              v-model="dataEdit.district"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="block">Phường/Xã</label>
            <InputText
              placeholder="Nhập phường/xã"
              aria-describedby="name-help"
              v-model="dataEdit.street"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="block">Địa chỉ cụ thể</label>
            <InputText
              placeholder="Nhập địa chỉ cụ thể"
              aria-describedby="name-help"
              v-model="dataEdit.house_number"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="field">
            <label class="block">Trạng thái hoạt động</label>
            <InputSwitch v-model="dataEdit.is_active" />
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
          @click="clearDistributor()"
        ></Button>
        <Button type="button" label="Lưu" @click="saveEditDistributor()"></Button>
      </div>
    </template>
  </Dialog>
  <Dialog
    v-model:visible="dialogOnOffDelete"
    modal
    header="Xác nhận xoá nhà phân phối"
    :style="{ width: '35rem' }"
    class="p-fluid"
  >
  </Dialog>
  <ConfirmPopup group="templateDelete">
    <template #message="slotProps">
      <div
        class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border p-3 mb-3 pb-0"
      >
        <i :class="slotProps.message.icon" class="text-6xl text-red-500"></i>
        <p>{{ slotProps.message.message }}</p>
      </div>
    </template>
  </ConfirmPopup>
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
import { useGlobal } from "@/services/useGlobal";
import { useRouter, useRoute } from "vue-router";
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();
const router = useRouter();
const route = useRoute();
const { toast, FunctionGlobal } = useGlobal();
const API_URL = "business-partners";
const dialogOnOff = ref(false);
const dialogOnOffDelete = ref(false);
const selectedDistributor = ref();
const Distributor = ref([]);
const dataEdit = ref({});
const dataTable = ref({
  page: route.query.page ? route.query.page : 1,
  size: route.query.size ? route.query.size : 10,
});

onBeforeMount(() => {
  fetchAllDistributor();
});
watch(dialogOnOff, (newValue) => {
  if (newValue == false) {
    clearDistributor();
  }
});

const openDialog = (value) => {
  dataEdit.value = value;
  dataEdit.value.fix = true;
  dataEdit.value.headerDialog = "CHỈNH SỬA NHÀ PHÂN PHỐI";
  dialogOnOff.value = true;
};

const newDistributor = () => {
  dialogOnOff.value = true;
  dataEdit.value.partner_type = "C";
  dataEdit.value.headerDialog = "THÊM MỚI NHÀ PHÂN PHỐI";
};

const clearDistributor = () => {
  dialogOnOff.value = false;
  dataEdit.value = {};
};

const saveEditDistributor = async () => {
  if (!ValidateData()) return;
  try {
    const FUNCAPI = !dataEdit.value.id
      ? API.add(`${API_URL}`, dataEdit.value)
      : API.update(`${API_URL}/${dataEdit.value.id}`, dataEdit.value);

    const res = await FUNCAPI;
    if (res.data) FunctionGlobal.$notify("S", "Cập nhật thành công", toast);
  } catch (error) {
    FunctionGlobal.$notify("E", error, toast);
  } finally {
    clearDistributor();
    fetchAllDistributor();
  }
};

const ValidateData = () => {
  let status = true;
  const fields = [
    {
      value: dataEdit.value.email,
      message: "Vui lòng nhập email",
      validate: validateEmail,
      invalidMsg: "Vui lòng nhập đúng định dạng mail",
    },
    { value: dataEdit.value.partner_name, message: "Vui lòng nhập tên nhà phân phối" },
    {
      value: dataEdit.value.phone_number,
      message: "Vui lòng nhập số điện thoại",
      validate: validatePhoneNumber,
      invalidMsg: "Vui lòng nhập đúng định dạng số điện thoại",
    },
  ];

  fields.forEach((field) => {
    if (!field.value) {
      FunctionGlobal.$notify("E", field.message, toast);
      status = false;
    } else if (field.validate && !field.validate(field.value)) {
      FunctionGlobal.$notify("E", field.invalidMsg, toast);
      status = false;
    }
  });

  return status;
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\d{10}$/; // Ví dụ: kiểm tra số điện thoại có 10 chữ số
  return phoneRegex.test(phone);
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
    const res = await API.get(
      `${API_URL}?size=${dataTable.value.size}&page=${dataTable.value.page}`
    );
    Distributor.value = res.data.business_partners;
    dataTable.value = res.data;
  } catch (error) {
    FunctionGlobal.$notify("E", error, toast);
  } finally {
    router.push(`?size=${dataTable.value.size}&page=${dataTable.value.page}`);
  }
};
const onPageChange = (event) => {
  dataTable.value.page = event.page;
  dataTable.value.size = event.rows;
  fetchAllDistributor();
};

const deleteItem = (event, data) => {
  confirm.require({
    target: event.currentTarget,
    group: "templateDelete",
    message: `Bạn có chắc chắn xoá nhà phân phối ${data.partner_name} không?`,
    icon: "pi pi-info-circle",
    rejectClass: "p-button-secondary p-button-outlined p-button-sm",
    acceptClass: "p-button-danger p-button-sm",
    rejectLabel: "Huỷ",
    acceptLabel: "Xoá",
    accept: async () => {
      try {
        const res = await API.delete(`${API_URL}/${data.id}`);
        if (res.data) FunctionGlobal.$notify("S", "Đã xoá thành công", toast);
      } catch (error) {
        FunctionGlobal.$notify("E", error, toast);
      } finally {
        fetchAllDistributor();
      }
    },
  });
};
</script>
