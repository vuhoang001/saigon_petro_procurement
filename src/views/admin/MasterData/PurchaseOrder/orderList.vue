<script setup>
import { ref } from "vue";
const products = ref([
  {
    id: "001",
    docName: "Yêu cầu đặt hàng 001",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
  },
  {
    id: "002",
    docName: "Yêu cầu đặt hàng 002",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng 003",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng 003",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng 003",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
  },
  {
    id: "003",
    docName: "Yêu cầu đặt hàng 003",
    docCode: "YCDHxxx",
    createdBy: "Đại lý Trường an",
    startDate: "21312",
    tmpForm: "Phê duyệt 3 cấp",
    status: "Chờ phê duyệt",
    note: "Đơn đặt hàng 04/2024 - Đợt 2",
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
      <Column field="id" header="#" :style="{ width: '3%' }"></Column>
      <Column field="docCode" header="Mã đơn hàng" :style="{ width: '10%' }">
        <template #body="data">
          <span
            ><i class="pi pi-arrow-right mr-3 text-yellow-500"></i
            >{{ data.data.docCode }}</span
          >
        </template>
      </Column>
      <Column field="docName" header="Tên đơn hàng" :style="{ width: '15%' }"></Column>
      <Column field="createdBy" header="Khách hàng" :style="{ width: '10%' }"></Column>
      <Column field="status" header="Trạng thái" :style="{ width: '13%' }"></Column>
      <Column field="note" header="Ghi chú" :style="{ width: '20%' }"></Column>
      <Column header="Hành động" :style="{ width: '20%' }">
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
