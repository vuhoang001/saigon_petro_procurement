<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import API from "../../../../api/api-main";

const route = useRoute();

const product = reactive({
  productName: "SP FORCE 4T",
  rating: 3,
  voted: 123.213,
  status: "Còn hàng",
  price: 3124.123,
  description:
    "Lorem is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon",
  quantity: 5,
  productInfor:
    "is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon",
  warrantyPolicy:
    "is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon",
  image:
    "https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png",
});
const dataEdit = ref({});

const decrementQuantity = () => {
  if (product.quantity > 0) {
    product.quantity--;
  }
};

onBeforeMount(() => {
  GetByIdItem(route.params.id);
});

const GetByIdItem = async (id) => {
  try {
    const res = await API.get("products/" + id);
    dataEdit.value.product = res.data;
    console.log(dataEdit.value);
  } catch (error) {}
};
</script>

<template>
  <div v-if="dataEdit.product" class="grid nested-grid mt-5">
    <div class="lg:col-4 md:col-12 col-12 px-7">
      <div class="text-center bg-white border-round-md">
        <img
          class="w-auto h-26rem py-5 my-3"
          :src="dataEdit.product.main_image_path"
          :alt="product.productName"
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
              <Rating v-model="product.rating" :cancel="false" />
              <div class="ml-3 text-gray-400">({{ product.voted }} nhận xét)</div>
              <div class="mx-3">|</div>
              <div style="color: #00ff66">{{ product.status }}</div>
            </div>
            <div class="mt-3 text-2xl font-medium">{{ dataEdit.product.price }} đ</div>
            <div class="font-medium mt-3 line-height-3">
              {{ dataEdit.product.description }}
            </div>
          </div>
          <div class="w-full bg-gray-400 my-3" style="height: 1px"></div>
          <div class="flex">
            <div class="w-10rem">
              <InputGroup class="h-3rem">
                <Button
                  icon="fa-solid fa-minus"
                  style="background-color: white; color: black"
                  @click="decrementQuantity"
                />
                <InputText v-model="product.quantity"></InputText>
                <Button
                  icon="fa-solid fa-plus"
                  style="background-color: #0d733b"
                  @click="product.quantity++"
                />
              </InputGroup>
            </div>
            <div class="ml-4">
              <router-link to="/client/cart"
                ><Button class="btn">Thêm vào giỏ</Button></router-link
              >
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
                  Enter your postal code for Delivery Availability
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
                  Free 30 Days Delivery Returns.
                  <a href="#" class="underline cursor-pointer">Detail</a>
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
  background-color: #0d733b;
  color: white;
  border: none;
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
</style>
