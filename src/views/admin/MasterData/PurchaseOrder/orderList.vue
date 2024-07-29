<script setup>
import { ref } from "vue";
const products = ref([
  {
    id: "001",
    docName: "Yêu cầu đặt hàng",
    docCode: "YCDHxxx",
    createdBy: "Công ty TNHH Đức Phượng",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
  },
  {
    id: "002",
    docName: "Yêu cầu đặt hàng",
    docCode: "YCDHxxx",
    createdBy: "Công ty Cổ phần thương mại Nhân Hòa",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 3",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 07/2024 - Đợt 1",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng",
    docCode: "YCDHxxx",
    createdBy: "Công ty TNHH HBG",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 06/2024 - Đợt 3",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng",
    docCode: "YCDHxxx",
    createdBy: "Công ty Cổ phần Xăng dầu An Phước",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 5",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng",
    docCode: "YCDHxxx",
    createdBy: "Công ty TNHH Alimex",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 4",
  },
]);

const data = ref([
  {
    process: "Phê duyệt cấp 1",
    createdBy: "hoanggggf",
    result: "Phê duyệt",
    approvalDate: "16/04-2024",
  },
  {
    process: "Phê duyệt cấp 1",
    createdBy: "hoanggggf",
    result: "Phê duyệt",
    approvalDate: "16/04-2024",
  },
  {
    process: "Phê duyệt cấp 1",
    createdBy: "hoanggggf",
    result: "Phê duyệt",
    approvalDate: "16/04-2024",
  },
]);
function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
</script>
<template>
  <div class="">
    <div class="flex justify-content-between align-items-center mb-4">
      <div class="text-2xl font-semibold uppercase">Danh sách đơn hàng</div>
      <Button
        label="Cập nhật"
        icon="fa-solid fa-rotate-right"
        class="bg-green-700"
      ></Button>
    </div>

    <DataTable :value="products" tableStyle="min-width: 50rem;" header="surface-200">
      <Column field="id" header="#" :style="{ width: '3%' }">
        <template #body="slotProps">
          {{ slotProps.index + 1 }}
        </template>
      </Column>
      <Column field="docCode" header="Mã đơn hàng" :style="{ width: '10%' }">
        <template #body>
          <span
            ><router-link to="/admin/order/1"
              ><i class="pi pi-arrow-right mr-3 text-yellow-500"></i></router-link
            >{{ generateRandomString(6) }}</span
          >
        </template>
      </Column>
      <Column field="docName" header="Tên đơn hàng" :style="{ width: '15%' }">
        <template #body="slotProps">
          {{ slotProps.data.docName + " " + generateRandomString(3) }}
        </template>
      </Column>
      <Column field="createdBy" header="Khách hàng" :style="{ width: '23%' }"></Column>
      <Column field="status" header="Trạng thái" :style="{ width: '10%' }"></Column>
      <Column field="note" header="Ghi chú" :style="{ width: '18%' }"></Column>
      <Column header="Hành động" :style="{ width: '10%' }">
        <template #body> <Button label="Phê duyệt" text outlined /> </template
      ></Column>
    </DataTable>
    <Paginator class="" :rows="10" :totalRecords="120"></Paginator>
  </div>

  <!-- <div class="mt-3">
    <DataTable :value="data" tableStyle="min-width: 50rem;" header="surface-200">
      <Column field="process" header="Quy trình"></Column>
      <Column field="createdBy" header="Người duyệt"></Column>
      <Column field="result" header="Kết quả"></Column>
      <Column field="approvalDate" header="Người duyệt"></Column>
    </DataTable>
  </div> -->
</template>

<style scoped>
:deep(.p-datatable-table .p-datatable-thead tr th) {
  background-color: #dedede;
  color: black;
  font-weight: bold;
}
</style>
