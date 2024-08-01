<template>
  <div v-if="dataEdit.product" class="grid nested-grid mt-5">
    <div class="lg:col-4 md:col-12 col-12 px-7">
      <div class="text-center bg-white border-round-md">
        <img
          class="w-auto h-26rem py-5 my-3"
          :src="dataEdit.product.main_image_path"
          alt=""
        />
      </div>
      <!-- <div class="grid mt-2">
        <div class="col-4">
          <div class="bg-white py-3 text-center border-round-md">
            <img class="w-full h-auto" :src="product.image" :alt="product.productName" />
          </div>
        </div>
        <div class="col-4">
          <div class="bg-white py-3 text-center border-round-md">
            <img class="w-full h-auto" :src="product.image" :alt="product.productName" />
          </div>
        </div>
        <div class="col-4">
          <div class="bg-white py-3 text-center border-round-md">
            <img
              class="w-full h-auto"
              src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png"
              alt="img"
            />
          </div>
        </div>
      </div> -->
    </div>
    <div class="lg:col-8 md:col-12 col-12">
      <div class="grid">
        <div class="lg:col-6 md:col-12 px-5" style="word-wrap: break-word">
          <div>
            <div class="font-bold text-3xl">{{ dataEdit.product.name }}</div>
            <div class="flex mt-3">
              <!-- <Rating v-model="product.rating" :cancel="false" /> -->
              <!-- <div class="ml-3 text-gray-400">({{ product.voted }} nhận xét)</div> -->
              <!-- <div class="mx-3">|</div> -->
              <!-- <div style="color: #00ff66">{{ product.status }}</div> -->
            </div>
            <div class="mt-3 text-2xl font-medium">
              {{ formattedNumber(dataEdit.product.price) }}
            </div>
            <div class="font-medium mt-3 line-height-3">
              {{ dataEdit.product.description }}
            </div>
          </div>
          <div class="w-full bg-gray-400 my-3" style="height: 1px"></div>
          <div class="flex gap-3 align-items-center">
            <div class="w-10rem">
              <InputGroup class="h-3rem">
                <Button
                  icon="fa-solid fa-minus"
                  severity="secondary"
                  raised
                  @click="decrementQuantity"
                />
                <InputNumber
                  v-model="dataEdit.product.quantity"
                  class="text-center-number"
                ></InputNumber>
                <Button
                  icon="fa-solid fa-plus"
                  @click="dataEdit.product.quantity++"
                  severity="secondary"
                  raised
                />
              </InputGroup>
            </div>
            <div>
              <span
                ><b>{{ numeral(dataEdit.product.stock).format("0,0") }}</b> sản phẩm có
                sẵn</span
              >
            </div>
          </div>
          <div class="mt-3 flex gap-2">
            <div>
              <Button label="Mua ngay" class="btn" severity="warning" />
            </div>
            <div>
              <Button
                label="Thêm vào giỏ"
                class="btn"
                severity="warning"
                icon="pi pi-cart-plus"
                outlined
                @click="AddCart"
              />
            </div>
          </div>
        </div>
        <div class="lg:col-6 md:col-12 px-5 mt-6" style="word-wrap: break-word">
          <div class="w-28rem ml-7">
            <div
              class="flex border-1 font-medium"
              style="
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border-bottom: 0px;
              "
            >
              <div class="col-1 text-center align-content-center">
                <i class="fa-solid fa-truck"></i>
              </div>
              <div class="col-10">
                <div>Miễn phí vận chuyển</div>
                <div class="text-xs mt-2 underline cursor-pointer">
                  Nhập mã bưu chính của bạn để biết Tình trạng sẵn sàng giao hàng
                </div>
              </div>
            </div>
            <div
              class="flex border-1 font-medium"
              style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px"
            >
              <div class="col-1 text-center align-content-center">
                <i class="fa-solid fa-rotate"></i>
              </div>
              <div class="col-10">
                <div>Dễ dàng hoàn trả</div>
                <div class="text-xs mt-2">
                  Trả lại hàng miễn phí trong 30 ngày.
                  <a href="#" class="underline cursor-pointer">Chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-8 pr-8">
          <TabView>
            <TabPanel header="Thông tin sản phẩm">
              <div v-html="dataEdit.product.information"></div>
            </TabPanel>
            <TabPanel header="Tính năng">
              <div v-html="dataEdit.product.feature"></div>
            </TabPanel>
            <TabPanel header="Thông số">
              <div v-html="dataEdit.product.specifications"></div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: yellow;
}

.btn {
  height: 3rem;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 48px 10px 48px;
}

.p-inputgroup button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.p-inputgroup button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
:deep(.p-inputnumber-input) {
  text-align: center;
}
</style>
<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import API from "../../../../api/api-main";
import { useGlobal } from "@/services/useGlobal";
import numeral from "numeral";

const { toast, FunctionGlobal } = useGlobal();

const route = useRoute();

const dataEdit = ref({});
const payload = ref({
  customer_id: 1,
  id: 0,
  price: 0,
  product: {
    category: "",
    code_in_sap: "",
    created_at: "",
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
  },
  product_id: 0,
  quantity: 0,
});
const dataClear = JSON.stringify(payload.value);

const decrementQuantity = () => {
  if (dataEdit.value.product.quantity > 0) {
    dataEdit.value.product.quantity--;
  }
};

onBeforeMount(() => {
  GetByIdItem(route.params.id);
});

const GetByIdItem = async (id) => {
  try {
    const res = await API.get("products/" + id);
    dataEdit.value.product = res.data;
    dataEdit.value.product.quantity = 1;
  } catch (error) {}
};

const formattedNumber = (number) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    number
  );
};

const AddCart = async () => {
  payload.value.price = dataEdit.value.product.price;
  payload.value.quantity = dataEdit.value.product.quantity;
  payload.value.product_id = dataEdit.value.product.id;
  payload.value.product = dataEdit.value.product;

  if (!Validate()) return;
  try {
    const res = await API.add("carts", payload.value);
    if (res.data) {
      FunctionGlobal.$notify("S", "Sản phẩm đã được thêm vào giỏ hàng", toast);
      ResetData();
    }
  } catch (error) {}
};
const Validate = () => {
  let status = true;

  if (parseInt(dataEdit.value.product.quantity) < 1) {
    status = false;
    FunctionGlobal.$notify("E", "Vui lòng nhập số lượng dặt hàng", toast);
  }
  if (dataEdit.value.product.stock < parseInt(dataEdit.value.product.quantity)) {
    status = false;
    FunctionGlobal.$notify("E", "Số lượng đặt hàng vượt quá số lượng trong kho", toast);
  }

  if (dataEdit.value.product.stock < 1) {
    status = false;
    FunctionGlobal.$notify("E", "Hiện tại sản phẩm trong kho đang hết hàng", toast);
  }

  return status;
};
const ResetData = () => {
  payload.value = JSON.parse(dataClear);
};
</script>
