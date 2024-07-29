<script setup>
import { ref, onBeforeMount } from "vue";
import api from "@/api/api-main"
const categoryChecked = ref(null);
const sliderValue = ref([0, 19000]);
const priceRangeChecked = ref(null);
const priceRange = ref([
  "Tất cả",
  "Dưới $20",
  "$25 đến $100",
  "$300 đến $500",
  "$500 đến $1,000",
  "$1,000 đến $10,000",
]);

const categories = ref([
  "Dầu nhớt xe số",
  "Dầu nhớt xe tay ga",
  "Dầu động cơ 2 kỳ",
  "Dầu cầu, dầu hộp số",
  "Dầu động cơ xăng",
  "Dầu động cơ Diesel",
  "Dầu động cơ 2 kỳ thấp tốc",
  "Dầu động cơ 2 kỳ trung tốc",
  "Dầu động cơ Turbo",
  "Dầu thủy lực không kẽm",
  "Dầu thủy lực gốc kẽm",
  "Sản phẩm khác",
]);

const brandsChecked = ref([]);
const brands = ref([
  "SaiGon Petro",
  "AP Oil",
  "Sino",
  "Polaris",
  "Singtec",
  "Export & Toll Blending",
]);

const options = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const selectedOption = ref(null);

const selectedTest = ref([
  {
    name: "SaiGon Petro",
  },
  {
    name: "AP Oil",
  },
  {
    name: "Sino",
  },
]);

const data = ref()

const getData = async () => {
  const res = await api.get("products?size=10&page=1")
  data.value = res.data.products
}

onBeforeMount(() => {
  getData()
})

const updateChecked = (index) => {
  const brand = brands.value[index];
  if (brandsChecked.value.includes(brand)) {
    brandsChecked.value = brandsChecked.value.filter((item) => item !== brand);
  } else {
    brandsChecked.value.push(brand);
  }
};

const products = ref([
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4.5,
    voted: 123123,
    title: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit",
    price: "$123",
  },
]);
</script>

<template>
  <div class="bg-white">
    <div class="grid container mx-auto">
      <div class="col-3 pl-0">
        <div>
          <h1 class="size-16px">DANH MỤC</h1>
          <div v-for="(item, index) in categories" :key="index">
            <div class="mb-3">
              <RadioButton v-model="categoryChecked" :inputId="`categoryChecked${index + 1}`" name="category"
                :value="item" />
              <label :for="`categoryChecked${index + 1}`" class="ml-2 gray-color-4 hover:text-green-600">{{ item
                }}</label>
            </div>
          </div>
        </div>
        <div>
          <Divider />
        </div>
        <div>
          <h1 class="size-16px">GIÁ</h1>
          <Slider v-model="sliderValue" range class="max-w-full" pt:range:class="orange-color-bg" />
          <InputText v-model.number="sliderValue" class="w-full mt-4" />
        </div>

        <div class="flex justify-content-between mt-3">
          <button class="px-5 py-2 bg-white border-1 border-round-sm gray-color-2 hover:text-orange-500"
            style="border-color: #cbd5e1">
            <span class="text-base">Giá thấp nhất</span>
          </button>
          <button class="px-5 py-2 bg-white border-1 border-round-sm gray-color-2 hover:text-orange-500"
            style="border-color: #cbd5e1">
            <span class="text-base">Giá cao nhất</span>
          </button>
        </div>

        <div class="mt-4">
          <div v-for="(item, index) in priceRange" :key="index">
            <div class="mb-2">
              <RadioButton v-model="priceRangeChecked" :inputId="`priceRangeChecked${index + 1}`" name="priceRange"
                :value="item" pt:input:class="bg-orange-500" />
              <label :for="`priceRangeChecked${index + 1}`" class="ml-2 gray-color-4 hover:text-green-600">{{ item
                }}</label>
            </div>
          </div>
        </div>
        <div>
          <Divider />
        </div>

        <div>
          <h1 class="size-16px">THƯƠNG HIỆU</h1>
          <div class="" v-for="(item, index) in brands" :key="index">
            <div class="mt-2">
              <TriStateCheckbox :model="brandsChecked.includes(item)" @change="updateChecked(index)" variant="filled" />
              <span class="ml-2">{{ item }}</span>
            </div>
          </div>
        </div>

        <div>
          <Divider />
        </div>

        <div class="p-3 border-3" style="border-color: #ffe7d6">
          <div class="flex flex-column justify-content-center align-items-center mb-2">
            <img src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png"
              alt="" style="width: 180px; height: 180px" />
          </div>
          <div class="flex flex-column justify-content-center align-items-center">
            <span class="size-24px font-semibold flex text-center mt-3">
              Heavy on Features. <br />
              Light on Price.
            </span>
            <span class="mt-3">Only for:
              <button class="font-semibold py-2 px-3 border-none border-round-sm ml-1"
                style="background-color: #f3de6d">
                $299 USD
              </button></span>
            <button class="w-full text-white py-3 border-none mt-3 border-round-xs font-bold"
              style="background-color: #fa8232">
              <i class="fa-solid fa-cart-shopping"></i>
              THÊM VÀO GIỎ
            </button>
            <button class="w-full text-white py-3 border-2 mt-3 border-round-xs font-bold"
              style="border-color: #fa8232">
              <span style="color: #fa8232">XEM CHI TIẾT</span>

              <i class="fa-solid fa-arrow-right ml-2" style="color: #fa8232"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-9 pr-0">
        <div class="flex justify-content-between">
          <div class="w-30rem">
            <IconField iconPosition="right">
              <InputIcon class="pi pi-search"> </InputIcon>
              <InputText class="w-30rem" placeholder="Tìm kiếm sản phẩm..." />
            </IconField>
          </div>
          <div>
            <span class="mr-3">Sắp xếp:</span>
            <Dropdown v-model="selectedOption" :options="options" optionLabel="name" placeholder="Select"
              class="w-full md:w-14rem" />
          </div>
        </div>

        <div class="mt-4">
          <div class="flex align-items-center justify-content-between p-3" style="background-color: #f2f4f5">
            <div class="border-round-md">
              <span>Bộ lọc: </span>

              <span v-for="(item, index) in selectedTest" :key="index">
                <Chip class="mx-2" :label="item.name" removable />
              </span>
            </div>
            <div>
              <span class="font-bold">
                {{ products.length }}
              </span>
              kết quả
            </div>
          </div>
        </div>

        <div>
          <div class="grid mt-4">
            <div class="col-3 p-2" v-for="(item, index) in data" :key="index">
              <div class="p-3 border-1 border-round-md hover:shadow-2 item-container" style="border-color: #cbd5e1">
                <div class="mb-2 image-wrapper">
                  <img src="/demo/data/images/image-11.png" alt="" style="width: 216px; height: 188px" />
                  <div class="overlay flex justify-content-center align-items-center">
                    <i class="cursor-pointer bg-white p-3 border-circle mx-2 fa-regular fa-heart"
                      style="font-size: 18px"></i>
                    <router-link to="/client/cart">
                      <i class="cursor-pointer bg-white p-3 border-circle mx-2 fa-solid fa-cart-shopping"
                        style="font-size: 18px"></i>
                    </router-link>
                    <router-link :to="`/client/detail/${item.id}`">
                      <i class="cursor-pointer bg-orange-400 text-white p-3 border-circle mx-2 fa-regular fa-eye"
                        style="font-size: 18px"></i>
                    </router-link>
                  </div>
                </div>
                <div class="flex flex-column">
                  <span class="flex size-12px my-2">
                    <Rating v-model="item.rating" :cancel="false" />
                    <span class="ml-2">({{ item.stock }})</span>
                  </span>
                  <span class="my-2 h-3rem">{{ item.name }}</span>
                  <span class="my-2" style="color: #2da5f3">$ {{ item.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Paginator :rows="5" :totalRecords="products.length"></Paginator>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(.p-radiobutton.p-highlight .p-radiobutton-box) {
  border-color: #fa8232;
}

:deep(.p-radiobutton .p-radiobutton-box .p-radiobutton-icon) {
  background-color: #fa8232;
}

.item-container {
  position: relative;
  overflow: hidden;
}

.image-wrapper {
  position: relative;
}

.image-wrapper img {
  display: block;
  transition: all 0.3s ease;
}

.image-wrapper .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.item-container:hover .image-wrapper .overlay {
  opacity: 1;
}
</style>
