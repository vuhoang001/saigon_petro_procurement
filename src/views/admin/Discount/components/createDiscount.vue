<template>
  <div class="flex justify-content-between align-items-center mb-4">
    <div class="text-2xl font-semibold uppercase">Tạo khuyến mãi</div>
  </div>

  <form>
    <div class="grid nested-grid">
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-23rem">
          <label class="mb-3 text-xl font-bold">Tên chương trình khuyến mãi</label>
          <InputText
            v-model="objDiscount.discountName"
            class="w-full my-3"
            type="text"
            placeholder="Nhập tên chương trình khuyến mãi"
          />
          <label class="font-bold">Mô tả</label>
          <Textarea
            v-model="objDiscount.discountDesc"
            class="w-full my-3"
            type="text"
            placeholder="Nhập mô tả"
            rows="7"
            cols="30"
          />
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-23rem overflow-auto">
          <label for="" class="text-xl font-bold">Tóm tắt</label>
          <div>
            <div class="mt-3">
              <label for="" class="text-base font-bold">Tên khuyến mãi</label>
              <div class="p-2">{{ objDiscount.discountName }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Chi tiết</label>
              <div class="p-2">{{ objDiscount.discountDesc }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Loại khuyến mãi</label>
              <div class="mt-3 ml-2">{{ objDiscount.discountType.name }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Thời hạn</label>
              <ul>
                <li>
                  Có hiệu lực từ:<b class="ml-2 mr-2">{{
                    format(objDiscount.startDate, "dd/MM/yyyy")
                  }}</b>
                  <p v-if="value" class="inline-block">
                    đến
                    <b class="ml-2 mr-2">{{
                      format(objDiscount.endDate, "dd/MM/yyyy")
                    }}</b>
                  </p>
                </li>
              </ul>
            </div>
            <Divider></Divider>
            <span class="text-base"
              >Chương trình khuyến mãi được tạo bảo Admin vào ngày {{}}</span
            >
          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-11rem">
          <label for="" class="text-xl font-bold">Thời gian hiệu lực</label>
          <div class="grid mt-0">
            <div class="col-6">
              <div class="mb-3">
                <label for="">Thời gian bắt đầu</label>
              </div>
              <Calendar
                dateFormat="dd/mm/yy"
                showIcon
                iconDisplay="input"
                v-model="objDiscount.startDate"
              />
            </div>
            <div class="col-6">
              <div class="mb-3">
                <Checkbox v-model="value" :binary="true" />
                <span class="ml-3">Có thời gian kết thúc</span>
              </div>
              <Calendar
                dateFormat="dd/mm/yy"
                v-if="value"
                showIcon
                iconDisplay="input"
                v-model="objDiscount.endDate"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-11rem">
          <label for="" class="text-xl font-bold">Loại khuyến mãi</label>
          <div class="mt-5">
            <Dropdown
              :options="discountType"
              v-model="objDiscount.discountType"
              optionLabel="name"
              placeholder="Chọn loại khuyến mãi"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-12rem">
          <div class="flex flex-column">
            <label for="" class="text-xl font-bold">Giảm giá sản phẩm</label>
            <label for="" class="mt-3 text-base">Mức giảm</label>
          </div>
          <div class="mt-3">
            <InputNumber
              placeholder="0"
              class="mr-3 w-16rem ml-auto"
              v-model="objDiscount.discountProduct.reducelv"
            />
            <Dropdown
              optionLabel="name"
              optionValue="code"
              :options="[
                { code: 0, name: '%' },
                { code: 1, name: 'VNĐ' },
              ]"
              v-model="objDiscount.discountProduct.type"
            />
          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-12rem">
          <label for="" class="text-xl font-bold">Sản phẩm áp dụng</label>
          <div class="mt-2">
            <div class="flex flex-column pt-2">
              <div>
                <RadioButton
                  inputId="applyProduct"
                  name="applyProduct"
                  value="productGrp"
                ></RadioButton>
                <label for="applyProduct" class="ml-2">Nhóm sản phẩm</label>
              </div>
              <div class="mt-2">
                <RadioButton
                  inputId="applyProduct"
                  name="applyProduct"
                  value="product"
                ></RadioButton>
                <label for="applyProduct" class="ml-2">Sản phẩm</label>
              </div>
            </div>
            <IconField iconPosition="left" class="mt-3">
              <InputIcon class="pi pi-search"> </InputIcon>
              <InputText placeholder="Tìm kiếm" class="w-full" />
            </IconField>
          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-14rem">
          <label for="" class="text-xl font-bold">Điều kiện tối thiểu</label>
          <div>
            <div class="flex flex-column mt-3">
              <div>
                <RadioButton
                  inputId="minCondition1"
                  name="minCondition"
                  value="notRequired"
                ></RadioButton>
                <label for="minCondition1" class="ml-2">Không yêu cầu</label>
              </div>
              <div class="mt-2">
                <RadioButton
                  inputId="minCondition2"
                  name="minCondition"
                  value="minPurchase"
                ></RadioButton>
                <label for="minCondition2" class="ml-2">Giá trị mua tối thiểu</label>
              </div>
              <InputText type="text" class="mt-2" placeholder="0 đ" />
              <div class="mt-2">
                <RadioButton
                  inputId="minCondition3"
                  name="minCondition"
                  value="minProduct"
                ></RadioButton>
                <label for="minCondition3" class="ml-2"
                  >Số lượng sản phẩm tối thiểu</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <div class="flex gap-2 card justify-content-end bg-gray-200">
    <router-link to="/admin/discount">
      <Button type="button" label="Huỷ" severity="secondary" />
    </router-link>
    <Button label="Thêm mới" @click="SavePromotion" />
  </div>
</template>

<style scoped>
:deep(.p-dropdown-items-wrapper) {
  max-width: 100px;
}

ul li {
  margin-bottom: 4px;
}
</style>
<script setup>
import { ref, reactive } from "vue";
import { format } from "date-fns";
import { useGlobal } from "@/services/useGlobal";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const { toast, FunctionGlobal } = useGlobal();
const value = ref(true);
const discountType = ref([{ name: "Giảm giá sản phẩm" }, { name: "Đồng giá sản phẩm" }]);
const objDiscount = reactive({
  discountName: "",
  discountDesc: "",
  startDate: new Date(),
  endDate: new Date(),
  discountProduct: {
    reducelv: 5,
    type: 0,
  },
  discountType: [],
  minCondition: "",
  productApply: "",
});

const SavePromotion = () => {
  objDiscount.id = createId();
  const existingData = JSON.parse(localStorage.getItem("myDataPromotion") || "[]");
  existingData.push(objDiscount);
  localStorage.setItem("myDataPromotion", JSON.stringify(existingData));
  FunctionGlobal.$notify("S", "Đã thêm thành công", toast);
  router.replace("/admin/discount");
};

const Cancel = () => {
  //   router.push("/admin/discount");
};

const createId = () => {
  let id = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};
</script>
