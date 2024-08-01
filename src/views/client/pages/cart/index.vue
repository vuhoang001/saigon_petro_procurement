<template>
  <div class="mx-7 mt-6">
    <div class="grid">
      <div class="col-9">
        <div class="card font-medium text-lg">Số lượng ({{ CartData.length }})</div>

        <div v-for="(item, index) in CartData" :key="index" class="card">
          <div class="flex justify-content-between text-lg">
            <label for="">#{{ index + 1 }}</label>
            <label for="">
              <i class="fa-regular fa-pen-to-square cursor-pointer"></i>
              <i
                @click="deleteItem(item.product_id)"
                class="fa-regular fa-trash-can ml-3 cursor-pointer"
              ></i>
            </label>
          </div>
          <div class="grid mt-2">
            <div class="col-2">
              <div class="bg-gray-100 py-3 text-center border-round-md mx-4">
                <img
                  class="w-auto h-6rem"
                  :src="item.product.main_image_path"
                  alt="img"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="text-2xl font-bold">{{ item.product.name }}</div>
              <div class="mt-3 mb-2 text-lg">{{ formatPrice(item.price) }}</div>
              <InputGroup class="h-3rem w-5">
                <Button
                  icon="fa-solid fa-minus"
                  style="background-color: white; color: black"
                  @click="decreaseQuantity(index)"
                />
                <InputNumber v-model="item.quantity"></InputNumber>
                <Button
                  icon="fa-solid fa-plus"
                  style="background-color: white; color: black"
                  @click="increaseQuantity(index)"
                />
              </InputGroup>
            </div>
            <div class="col-4 text-right text-lg font-bold">
              Tổng cộng: {{ formatPrice(item.quantity * item.price) }}
            </div>
            <div class="ml-3">
              <Accordion>
                <AccordionTab header="Thông tin chi tiết">
                  <TabView>
                    <TabPanel header="Thông tin">
                      <p class="m-0">
                        {{ item.product.description }}
                      </p>
                    </TabPanel>
                    <TabPanel header="Tính năng">
                      <div v-html="item.product.feature"></div>
                    </TabPanel>
                    <TabPanel header="Thông số">
                      <div v-html="item.product.specifications"></div>
                    </TabPanel>
                  </TabView>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex justify-content-between align-items-center">
            <div>
              <Checkbox v-model="checked" :binary="true" />
              <span class="ml-3">Chọn tất cả ({{ CartData.length }})</span>
            </div>
            <div class="flex gap-2 align-items-center">
              <span class="font-bold"
                >Tổng thanh toán ({{ CartData.length }} Sản phẩm):<b
                  class="text-orange-500 text-2xl ml-2"
                  >{{ formatPrice(totalPrice(CartData)) }}</b
                ></span
              >
              <router-link to="/client/check-out">
                <Button class="btn" label="Thanh toán" severity="warning" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="font-bold text-lg">Thông tin tóm tắt</div>
          <div class="mt-2">
            <label class="">Địa điểm giao hàng:</label>
            <div class="mt-1">{{ infoBuyer.address }}</div>
          </div>
          <div class="mt-2">
            <label class="">Người nhận hàng:</label>
            <div class="mt-1">{{ infoBuyer.receiver }}</div>
          </div>
          <div class="mt-2">
            <label class="">Ngày cần hàng:</label>
            <div class="mt-1">{{ infoBuyer.dateNeeded }}</div>
          </div>
          <div class="flex justify-content-between font-bold text-lg mt-5">
            <label for="">Tổng cộng: </label>
            <label for="">{{ formatPrice(totalPrice(CartData)) }}</label>
          </div>
          <div style="height: 1px; background-color: black; margin: 10px 0"></div>
          <router-link to="/client/check-out">
            <Button class="btn w-full" label="Thanh toán" severity="primary" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep .p-inputgroup button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

::v-deep .p-inputgroup button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

::v-deep .p-accordion .p-accordion-header .p-accordion-header-link {
  flex-direction: row;
  justify-content: left;
}
:deep(.p-inputnumber-input) {
  text-align: center;
}
</style>
<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import API from "@/api/api-main";
import { useGlobal } from "@/services/useGlobal";

const { toast, FunctionGlobal } = useGlobal();
const route = useRoute();
const infoBuyer = reactive({
  address: "31 Thái Hà, Đống Đa, Hà Nội",
  receiver: "Đại lý Hùng Lâm",
  dateNeeded: "30/4/2024",
});
const CartData = ref([]);

onBeforeMount(() => {
  getCart();
});

const getCart = async () => {
  try {
    const res = await API.get(`carts/${route.params.id}`);
    if (res.data) CartData.value = res.data;
  } catch (error) {}
};

const increaseQuantity = (index) => {};
const decreaseQuantity = (index) => {};
const formatPrice = (price) => {
  return price
    .toFixed(3)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.")
    .concat(" đ");
};
const totalPrice = (obj) => {
  const total = obj.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return total;
};
const deleteItem = (id) => {
  try {
    const res = API.delete(`carts/${id}`);
    if (res.data) FunctionGlobal.$notify("S", "Đã xoá thành công", toast);
    getCart();
  } catch (error) {
    FunctionGlobal.$notify("E", error, toast);
  }
};
const confirmCart = () => {};
</script>
