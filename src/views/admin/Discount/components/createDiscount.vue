<template>
  <div class="flex justify-content-between align-items-center mb-4">
    <div class="text-2xl font-semibold uppercase">
      {{ dataEdit.status == "Fix" ? "Cập nhật khuyến mãi" : "Tạo khuyến mãi" }}
    </div>
  </div>

  <form>
    <div class="grid nested-grid">
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-23rem">
          <label class="mb-3 text-xl font-bold">Tên chương trình khuyến mãi</label>
          <InputText v-model="dataEdit2.discountName" class="w-full my-3" type="text"
            placeholder="Nhập tên chương trình khuyến mãi" />
          <label class="font-bold">Mô tả</label>
          <Textarea v-model="dataEdit2.discountDescription" class="w-full my-3" type="text" placeholder="Nhập mô tả"
            rows="7" cols="30" />
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-23rem overflow-auto">
          <label for="" class="text-xl font-bold">Tóm tắt</label>
          <div>
            <div class="mt-3">
              <label for="" class="text-base font-bold">Tên khuyến mãi</label>
              <div class="p-2">{{ dataEdit2.discountName }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Chi tiết</label>
              <div class="p-2">{{ dataEdit2.discountDescription }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Loại khuyến mãi</label>
              <div class="mt-3 ml-2">{{ dataEdit2.discountType }}</div>
              
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Thời hạn</label>
              <ul>
                <li>
                  Có hiệu lực từ:<b class="ml-2 mr-2">{{
                    format(dataEdit2.timeRange.startDate, "dd/MM/yyyy")
                  }}</b>
                  <p v-if="value" class="inline-block">
                    đến
                    <b class="ml-2 mr-2">{{
                      format(dataEdit2.timeRange.endDate, "dd/MM/yyyy")
                    }}</b>
                  </p>
                </li>
              </ul>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Điều kiện tối thiểu</label>
              <div class="p-2">{{ dataEdit2.discountCondition }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Sản phẩm áp dụng</label>
              <div class="p-2">{{ dataEdit2.discountProductApply }}</div>
            </div>
            <div class="mt-3">
              <label class="text-base font-bold">Đối tượng khách hàng</label>
              <div class="p-2">{{ dataEdit2.discountCustomer }}</div>
            </div>
            <Divider></Divider>
            <span class="text-base">Chương trình khuyến mãi được tạo bảo Admin vào ngày {{}}</span>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div>
            <span class="text-xl font-bold">Hình thức khuyến mãi</span>
          </div>
          <div class="grid">
            <div class="col-6">
              <div class="my-2">
                <span class="font-semibold w-5 white-space-nowrap">Khuyến mãi theo</span>
              </div>

              {{ dataEdit2.discountType }}
              <Dropdown class="w-full" :options="saleOffData.promo" optionLabel="name" optionValue="id"
                v-model="dataEdit2.discountType" @change="changeSubType()"></Dropdown>
            </div>
            <div class="col-6">
              <div class="my-2">
                <div>
                  <span class="font-semibold w-5 white-space-nowrap my-2 ">
                    Hình thức
                  </span>
                </div>
              </div>
              <div class="flex gap-2">
                <Dropdown class="w-full" :options="checkCondition()" optionLabel="name" optionValue="id"
                  v-model="dataEdit2.discountSubType"></Dropdown>
                {{ dataEdit2.discountSubType }}
                {{ checkCondition() }}
                <!-- <div v-if="['2-1', '2-2', '2-4'].includes(dataEdit2.discountSubType)"
                  class="w-full flex align-items-center ">
                  <Checkbox v-model="checkCondition().filter((val) => {
                    return val.id == dataEdit2.discountSubType
                  })[0].isMulti" trueValue="Y" falseValue="N" :binary="true" class="mx-2"></Checkbox>
                  <span>{{
                    dataEdit.discountSubType == "2-1"
                      ? "Hàng giảm giá không nhân theo SL mua." : dataEdit2.discountSubType == "2-2" ?
                        "Hàng tặng không nhận theo số lượng mua." : "Số lượng voucher không nhận theo SL mua."
                  }}</span>
                </div> -->
              </div>

            </div>
            <div class="col-12" v-if="checkFormality()">
              <DataTable :value="checkFormality()" tableStyle="min-width: 50rem">
                <Column v-if="['1-1', '1-2', '1-3', '1-4', '3-1', '3-2', '3-3'].includes(dataEdit2.discountSubType)"
                  header="Tổng tiền hàng">
                </Column>

              </DataTable>
            </div>

          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card">
          <label for="" class="text-xl font-bold">Thời gian hiệu lực</label>
          <div class="grid mt-0">
            <div class="col-6">
              <div class="mb-3">
                <label for="">Thời gian bắt đầu</label>
              </div>
              <Calendar dateFormat="dd/mm/yy" showIcon iconDisplay="input" v-model="dataEdit2.timeRange.startDate" />
            </div>
            <div class="col-6">
              <div class="mb-3">
                <Checkbox v-model="value" :binary="true" />
                <span class="ml-3">Có thời gian kết thúc</span>
              </div>
              <Calendar dateFormat="dd/mm/yy" v-if="value" showIcon iconDisplay="input"
                v-model="dataEdit2.timeRange.endDate" />

            </div>
            <div class="col-12">
              <div>
                <Checkbox v-model="dataEdit2.timeRange.limitTime" :binary="true" class="mr-2"></Checkbox>
                <span>
                  Giới hạn ngày và giờ áp dụng trong tuần
                </span>
              </div>
            </div>

            <div v-if="dataEdit2.timeRange.limitTime" class="col-12 pt-0">
              <div v-for="(day, dayIndex) in weekDays" :key="dayIndex" class="">
                <div class="grid flex mt-2">
                  <div class="col-3">
                    <Checkbox v-model="showDays[dayIndex]" :binary="true" class="mr-2"></Checkbox>
                    <span>{{ day }}</span>
                  </div>
                  <div class="col-9 pt-2">
                    <div v-if="showFullDay[dayIndex]" class="flex justify-content-between align-items-center mt-2">
                      <span :class="{
                        'text-gray-400 font-italic': !showDays[dayIndex]
                      }">
                        Cả ngày
                      </span>
                      <i v-if="showDays[dayIndex]" class="pi pi-plus-circle cursor-pointer"
                        @click="addDiv(dayIndex)"></i>
                    </div>

                    <div v-for="(item, index) in dataEdit2.timeRange.schedule[dayIndex]" :key="index"
                      class="flex justify-content-between align-items-center mb-3">
                      <div class="flex align-items-center" :class="{ 'additional-class': showDays[dayIndex] }
                        ">
                        <Dropdown class="w-11rem" :options="times" optionLabel="name" v-model="item.startHour" />
                        <span class="mx-2">-</span>
                        <Dropdown class="w-11rem mr-2" :options="times" optionLabel="name" v-model="item.endHour" />
                        <i class="pi pi-times text-sm cursor-pointer" @click="removeDiv(dayIndex, index)"></i>
                      </div>
                      <i v-if="showDays[dayIndex]" class="pi pi-plus-circle cursor-pointer"
                        @click="addDiv(dayIndex, index)"></i>
                    </div>
                  </div>
                </div>
                <Divider></Divider>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>

      </div>
      <!-- <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-11rem">
          <label for="" class="text-xl font-bold">Loại khuyến mãi</label>
          <div class="mt-5">
            <Dropdown :options="discountType" v-model="objDiscount.discountType" optionLabel="name"
              placeholder="Chọn loại khuyến mãi" class="w-full" />
          </div>
        </div>
      </div> -->
      <!-- <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-12rem">
          <div class="flex flex-column">
            <label for="" class="text-xl font-bold">Giảm giá sản phẩm</label>
            <label for="" class="mt-3 text-base">Mức giảm</label>
          </div>
          <div class="mt-3">
            <InputNumber placeholder="0" class="mr-3 w-16rem ml-auto" v-model="objDiscount.discountProduct.reducelv" />
            <Dropdown optionLabel="name" optionValue="code" :options="[
              { code: 0, name: '%' },
              { code: 1, name: 'VNĐ' },
            ]" v-model="objDiscount.discountProduct.type" />
          </div>
        </div>
      </div> -->

      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-12rem">
          <label for="" class="text-xl font-bold">Sản phẩm áp dụng</label>
          <div class="mt-2">
            <div class="flex flex-column pt-2">
              <div>
                <RadioButton inputId="applyProduct" v-model="objDiscount.productApprove" value="Sản phẩm áp dụng">
                </RadioButton>
                <label for="applyProduct" class="ml-2">Nhóm sản phẩm</label>
              </div>
              <div class="mt-2">
                <RadioButton inputId="applyProduct" v-model="objDiscount.productApprove" value="Nhóm sản phẩm">
                </RadioButton>
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
                <RadioButton v-model="objDiscount.MinCondition" value="Không yêu cầu"></RadioButton>
                <label class="ml-2">Không yêu cầu</label>
              </div>
              <div class="mt-2">
                <RadioButton inputId="minCondition2" v-model="objDiscount.MinCondition" value="Giá trị mua tối thiểu">
                </RadioButton>
                <label for="minCondition2" class="ml-2">Giá trị mua tối thiểu</label>
              </div>
              <InputText type="text" class="mt-2" placeholder="0 đ" />
              <div class="mt-2">
                <RadioButton v-model="objDiscount.MinCondition" value="Số lượng sản phẩm tối thiểu"
                  inputId="minCondition3">
                </RadioButton>
                <label for="minCondition3" class="ml-2">Số lượng sản phẩm tối thiểu</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-6 lg:col-12 md:col-12 sm:12">
        <div class="card h-14rem">
          <label for="" class="text-xl font-bold">Đối tượng khách hàng</label>
          <div>
            <div class="flex flex-column mt-3">
              <div>
                <RadioButton v-model="objDiscount.CustomerAprove" value="Không giới hạn khách hàng"></RadioButton>
                <label class="ml-2">Không giới hạn khách hàng</label>
              </div>
              <div class="mt-2">
                <RadioButton inputId="minCondition2" v-model="objDiscount.CustomerAprove" value="Nhóm khách hàng">
                </RadioButton>
                <label for="minCondition2" class="ml-2">Nhóm khách hàng</label>
              </div>
              <div class="mt-2">
                <RadioButton inputId="minCondition3" v-model="objDiscount.CustomerAprove" value="Tuỳ chọn khách hàng">
                </RadioButton>
                <label for="minCondition3" class="ml-2">Tuỳ chọn khách hàng</label>
              </div>
              <div class="mt-1">
                <IconField iconPosition="left" class="mt-3">
                  <InputIcon class="pi pi-search"> </InputIcon>
                  <InputText placeholder="Tìm kiếm" class="w-full" />
                </IconField>
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
    <Button :label="dataEdit.status == 'Fix' ? 'Cập nhật' : 'Thêm mới'" @click="SavePromotion" />
  </div>
</template>


<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { format } from "date-fns";
import { useGlobal } from "@/services/useGlobal";
import { useRouter, useRoute } from "vue-router";
import merge from "lodash/merge";

const router = useRouter();
const route = useRoute();

const { toast, FunctionGlobal } = useGlobal();

const value = ref(true);
const limitTime = ref(false)
const weekDays = ref(['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật']);
const showFullDay = ref(Array(weekDays.value.length).fill(true));
const showDays = ref(Array(weekDays.value.length).fill(false))
const times = ref([
  { name: '0:00' }, { name: '0:30' }, { name: '1:00' }, { name: '1:30' },
  { name: '2:00' }, { name: '2:30' }, { name: '3:00' }, { name: '3:30' },
  { name: '4:00' }, { name: '4:30' }, { name: '5:00' }, { name: '5:30' },
  { name: '6:00' }, { name: '6:30' }, { name: '7:00' }, { name: '7:30' },
  { name: '8:00' }, { name: '8:30' }, { name: '9:00' }, { name: '9:30' },
  { name: '10:00' }, { name: '10:30' }, { name: '11:00' }, { name: '11:30' },
  { name: '12:00' }, { name: '12:30' }, { name: '13:00' }, { name: '13:30' },
  { name: '14:00' }, { name: '14:30' }, { name: '15:00' }, { name: '15:30' },
  { name: '16:00' }, { name: '16:30' }, { name: '17:00' }, { name: '17:30' },
  { name: '18:00' }, { name: '18:30' }, { name: '19:00' }, { name: '19:30' },
  { name: '20:00' }, { name: '20:30' }, { name: '21:00' }, { name: '21:30' },
  { name: '22:00' }, { name: '22:30' }, { name: '23:00' }, { name: '23:30' }
]);
const saleOffData = ref({
  total: "1",
  promo: [
    {
      id: 1,
      name: "Hoá đơn",
      formality: [
        {
          id: "1-1",
          name: "Giảm hoá đơn",
          condition: [
            {
              amount: 0,
              discount: 0,
              discountAmount: 0,
              typeDiscount: 1,
            },
          ],
        },
        {
          id: "1-2",
          name: "Tặng hàng",
          condition: [
            {
              amount: 0,
              quantityAdd: 0,
              promotionLineItem: [],
            },
          ],
        },
        {
          id: "1-3",
          name: "Giảm giá hàng",
          condition: [
            {
              amount: 0,
              discount: 0,
              discountAmount: 0,
              typeDiscount: 1,
              quantityAdd: 0,
              promotionLineItem: [],
            },
          ],
        },
        {
          id: "1-4",
          name: "Tặng voucher",
          condition: [
            {
              amount: 0,
              quantityAdd: 0,
              promotionVoucherLine: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Hàng hoá",
      formality: [
        {
          id: "2-1",
          name: "Mua hàng giảm giá",
          isMulti: "N",
          condition: [
            {
              quantity: 0,
              quantityAdd: 0,
              discount: 0,
              discountAmount: 0,
              typeDiscount: 1,
              promotionLineItem: [],
              promotionLineItemBonus: [],
            },
          ],
        },
        {
          id: "2-2",
          name: "Mua hàng tặng hàng",
          isMulti: "Y",
          condition: [
            {
              quantity: 0,
              promotionLineItem: [],
              quantityAdd: 0,
              promotionLineItemBonus: [],
            },
          ],
        },
        {
          id: "2-3",
          name: "Giá bán theo số lượng",
          condition: [
            {
              promotionLineItem: [],
              promotionDiscountLine: [
                {
                  quantity: 0,
                  type: "GB",
                  price: 0,
                  discount: 0,
                  discountAmount: 0,
                  typeDiscount: 1,
                },
              ],
            },
          ],
        },
        {
          id: "2-4",
          name: "Mua hàng tặng voucher",
          isMulti: "Y",
          condition: [
            {
              quantity: 0,
              promotionLineItem: [],
              quantityAdd: 0,
              promotionVoucherLine: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Hoá đơn & Hàng hoá",
      formality: [
        {
          id: "3-1",
          name: "Giảm giá hoá đơn",
          condition: [
            {
              amount: 0,
              quantityAdd: 0,
              discount: 0,
              discountAmount: 0,
              typeDiscount: 1,
              promotionLineItem: [],
              typeDiscount: 1,
            },
          ],
        },
        {
          id: "3-2",
          name: "Tặng hàng",
          condition: [
            {
              amount: 0,
              quantity: 0,
              promotionLineItem: [],
              quantityAdd: 0,
              promotionLineItemBonus: [],
            },
          ],
        },
        {
          id: "3-3",
          name: "Giảm giá",
          condition: [
            {
              discount: 0,
              discountAmount: 0,
              typeDiscount: 1,
              amount: 0,
              quantity: 0,
              promotionLineItem: [],
              quantityAdd: 0,
              promotionLineItemBonus: [],
            },
          ],
        },
      ],
    },
  ],
});

let futureDate = new Date()
futureDate.setMonth(futureDate.getMonth() + 6)
const dataEdit2 = ref({
  discountCode: "",
  discountName: "name",
  discountDescription: 'description',
  discountType: 1,
  discountSubType: "1-1",
  timeRange: {
    startDate: new Date(),
    endDate: new Date(),
    limitTime: false,
    schedule: [[], [], [], [], [], [], []],
  },
  isCondition: 'Y',
  isProductAppyly: 'Y',
  isCustomer: 'Y',
  discountCustomer: [],
  discountCondition: [],
  discountProductApply: []
})

const discountType = ref([{ name: "Giảm giá sản phẩm" }, { name: "Đồng giá sản phẩm" }]);
const objDiscount = ref({
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
  productApprove: "Nhóm sản phẩm",
  CustomerAprove: "Không giới hạn khách hàng",
  MinCondition: "Không yêu cầu",
  MinConditionValue: 0,
});


const checkCondition = () => {
  return saleOffData.value.promo.filter((val) => {
    return val.id == dataEdit2.value.discountType
  })[0].formality
}

const checkFormality = () => {
  return checkCondition().filter((val) => {
    return val.id == dataEdit2.value.discountSubType
  })[0]
}

const changeSubType = () => {
  dataEdit2.value.discountSubType = checkCondition()[0].id
}

const dataEdit = reactive({});

function addDiv(dayIndex, index) {
  dataEdit2.value.timeRange.schedule[dayIndex].push({ startHour: '', endHour: '' })
  showFullDay.value[dayIndex] = false;
  showDays.value[dayIndex] = true
  console.log(dataEdit2.value.timeRange.schedule)
}

function removeDiv(dayIndex, itemIndex) {
  dataEdit2.value.timeRange.schedule[dayIndex].splice(itemIndex, 1)
  if (dataEdit2.value.timeRange.schedule[dayIndex].length === 0) {
    showFullDay.value[dayIndex] = true;
  }

}

onBeforeMount(() => {
  if (route.params.q != "new") {
    dataEdit.status = "Fix";
    dataEdit.id = route.params.q;
    dataEdit.data = JSON.parse(localStorage.getItem("myDataPromotion") || "[]");
    dataEdit.dataUpdate = dataEdit.data.filter((val) => {
      return val.id == dataEdit.id;
    })[0];
    objDiscount.value = merge({}, objDiscount.value, dataEdit.dataUpdate);
    objDiscount.value.startDate = new Date(objDiscount.value.startDate);
    objDiscount.value.endDate = new Date(objDiscount.value.endDate);
  }
});

const SavePromotion = () => {
  const existingData = JSON.parse(localStorage.getItem("myDataPromotion") || "[]");
  if (dataEdit.status != "Fix") {
    objDiscount.value.id = createId();
    objDiscount.value.proxyArray = items.value
    existingData.push(objDiscount.value);
    localStorage.setItem("myDataPromotion", JSON.stringify(existingData));
    FunctionGlobal.$notify("S", "Đã thêm thành công", toast);
  } else {
    existingData[findIndexById(dataEdit.id, existingData)] = objDiscount.value;
    localStorage.setItem("myDataPromotion", JSON.stringify(existingData));
    FunctionGlobal.$notify("S", "Cập nhật thành công", toast);
  }

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

const findIndexById = (id, data) => {
  let index = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      index = i;
      break;
    }
  }
  return index;
};
</script>


<style scoped>
.additional-class {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 23rem;
}
</style>
/* :deep(.p-dropdown-items-wrapper) {
max-width: 100px;
}

ul li {
margin-bottom: 4px;
} */
