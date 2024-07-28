<template>
  <div>
    <div class="flex justify-content-between align-items-center mb-4">
      <div class="text-2xl font-semibold uppercase">Danh sách khuyến mãi</div>
      <router-link to="discount/action/new">
        <Button
          label="Tạo khuyến mãi"
          icon="fa-solid fa-plus"
          class="bg-green-700"
          @click="pageTransition"
        ></Button>
      </router-link>
    </div>

    <div class="grid mt-3">
      <div class="col-12 h-screen bg-white">
        <DataTable
          v-model:selection="selectedDiscount"
          :value="existingData"
          tableStyle="min-width: 50rem;"
          header="surface-200"
          dataKey="id"
        >
          <Column selectionMode="multiple" :style="{ width: '5%' }"></Column>
          <Column header="Tên khuyến mãi" :style="{ width: '20%' }">
            <template #body="slotProps">
              <span>{{ slotProps.data.discountName }}</span>
              <br />
              <span class="text-gray-400 text-sm">{{ slotProps.data.discountDesc }}</span>
            </template>
          </Column>
          <Column field="discountType" header="Loại khuyến mãi" :style="{ width: '20%' }">
            <template #body="slotProps">
              <span>{{ slotProps.data.discountType.name }}</span>
            </template>
          </Column>
          <Column field="startDate" header="Bắt đầu" :style="{ width: '12%' }">
            <template #body="slotProps">
              <div>{{ format(slotProps.data.startDate, "dd/MM/yyyy") }}</div>
            </template>
          </Column>
          <Column field="endDate" header="Kết thúc" :style="{ width: '12%' }">
            <template #body="slotProps">
              <div>{{ format(slotProps.data.endDate, "dd/MM/yyyy") }}</div>
            </template>
          </Column>
          <Column header="Trạng thái" :style="{ width: '12%' }">
            <template #body="slotProps">
              <div>
                {{
                  new Date(slotProps.data.startDate) <= new Date() &&
                  new Date(slotProps.data.endDate) >= new Date()
                    ? "Đang hoạt động"
                    : "Chưa hoạt động"
                }}
              </div>
            </template>
          </Column>
          <Column field="actions" header="Hành động" :style="{ width: '14%' }">
            <template #body="slotProps">
              <div>
                <Button class="mr-1" icon="fa-regular fa-eye" text />
                <Button
                  class="ml-1"
                  icon="fa-regular fa-pen-to-square"
                  text
                  @click="UpdateData(slotProps.data.id)"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
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
<script setup>
import { ref, watch, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { format } from "date-fns/format";
const router = useRouter();
const route = useRoute();

const page = ref({
  main: true,
});

let existingData = JSON.parse(localStorage.getItem("myDataPromotion") || "[]");

onBeforeMount(() => {
  getData();
  window.scrollTo(0, 0);
});

watch(() => {
  if (existingData) {
    existingData = JSON.parse(localStorage.getItem("myDataPromotion") || "[]");
  }
});
const getData = () => {};

const UpdateData = (id) => {
  router.push("/admin/discount/action/" + id);
};
</script>
