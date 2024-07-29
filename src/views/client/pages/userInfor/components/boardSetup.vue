<template>
  <div>
    <div>
      <p class="text-4xl font-semibold">Xin chào, User</p>
      <p class="">
        Từ bảng điều khiển tài khoản của bạn, bạn có thể dễ dàng kiểm trả và xem các
        <a href="" class="font-semibold text-green-500">Đơn hàng gần đây</a>, quản lý
        <a href="" class="font-semibold text-green-500">Địa chỉ giao hàng. </a>
        <a>Chỉnh sửa Mật khẩu</a> và
        <a href="" class="font-semibold text-green-500">Thông tin tài khoản của bạn.</a>
      </p>
    </div>

    <div class="grid mt-4 flex justify-content-around">
      <div
        class="col-4 p-0 bg-white w-22rem border-1 border-solid border-gray-200 border-round-md"
      >
        <div class="mx-0 px-0 border-bottom-1 border-gray-200">
          <p class="ml-3 my-3 font-semibold">THÔNG TIN TÀI KHOẢN</p>
        </div>

        <div class="ml-3 mt-3">
          <div class="flex mb-4">
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <div class="flex flex-column">
              <label class="my-2 font-semibold">User</label>
              <label class="text-gray-500">Quận 1, TP. Hồ Chí Minh</label>
            </div>
          </div>

          <div class="flex flex-column">
            <label class="my-1 text-gray-500"
              ><label class="font-medium text-gray-900">Email:</label>
              minhdang1102@gmail.com</label
            >
            <label class="my-1 text-gray-500"
              ><label for="" class="font-medium text-gray-900">Sec Email:</label>
              minhdang1102@gmail.com</label
            >
            <label class="my-1 text-gray-500"
              ><label for="" class="font-medium text-gray-900">Số điện thoại:</label>
              153.426.157</label
            >
          </div>

          <div class="my-3">
            <button
              class="bg-white border-3 border-blue-200 border-round-sm px-4 py-3 uppercase text-blue-600 font-semibold"
            >
              Chỉnh sửa thông tin
            </button>
          </div>
        </div>
      </div>
      <div
        class="col-4 bg-white p-0 w-22rem border-1 border-solid border-gray-200 border-round-md"
      >
        <div class="mx-0 px-0 border-bottom-1 border-gray-200 bg-white">
          <p class="ml-3 my-3 font-semibold">ĐỊA CHỈ GIAO HÀNG</p>
        </div>

        <div class="mx-3 mt-3">
          <div class="flex">
            <div class="flex flex-column mb-3">
              <label class="my-2 font-semibold">User</label>
            </div>
          </div>

          <div class="flex flex-column">
            <label class="my-1 text-gray-500"
              >Số 12, Hẻm 12 Nguyễn Thị Minh Khai, Phường Hai Bà Trưng, Quận 1, Thành phố
              Hồ Chí Minh</label
            >
            <label class="my-1 text-gray-500"
              ><label for="" class="font-medium text-gray-900">Sec Email:</label>
              minhdang1102@gmail.com</label
            >
            <label class="my-1 text-gray-500"
              ><label for="" class="font-medium text-gray-900">Số điện thoại:</label>
              153.426.157</label
            >
          </div>

          <div class="my-3">
            <button
              class="bg-white border-3 border-blue-200 border-round-sm px-4 py-3 uppercase text-blue-600 font-semibold"
            >
              Chỉnh sửa địa chỉ
            </button>
          </div>
        </div>
      </div>
      <div class="col-4 p-0 w-22rem flex flex-column justify-content-between">
        <div class="bg-blue-100 border-round-sm p-3">
          <div class="flex align-items-center">
            <i
              class="fa-solid fa-rocket p-3 bg-white border-round-sm text-3xl mr-3 text-blue-300"
            ></i>
            <div class="flex flex-column justify-content-around">
              <label for="" class="text-2xl font-bold">154</label>
              <label for="">Tổng số đơn hàng</label>
            </div>
          </div>
        </div>
        <div class="bg-orange-100 border-round-sm p-3">
          <div class="flex">
            <i
              class="fa-regular fa-newspaper p-3 bg-white border-round-sm text-3xl mr-3 text-orange-300"
            ></i>
            <div class="flex flex-column justify-content-around">
              <label for="" class="text-2xl font-bold">154</label>
              <label for="">Đơn hàng chưa hoàn tất</label>
            </div>
          </div>
        </div>
        <div class="bg-green-100 border-round-sm p-3">
          <div class="flex">
            <i
              class="fa-solid fa-box-archive p-3 bg-white border-round-sm text-3xl mr-3 text-green-300"
            ></i>
            <div class="flex flex-column justify-content-around">
              <label for="" class="text-2xl font-bold">154</label>
              <label for="">Đơn hàng đã hoàn tất</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-1 border-round-md border-solid border-gray-200 mt-4 bg-white">
      <div class="font-medium border-bottom-1 border-gray-200 bg-white">
        <div class="mx-3 mt-4 flex justify-content-between">
          <p class="">LỊCH SỬ MUA HÀNG</p>
          <a href="" class="text-orange-400 hover:underline"
            >Xem tất cả <i class="fa-solid fa-arrow-right ml-2"></i
          ></a>
        </div>
      </div>

      <div>
        <DataTable
          :value="products"
          header="surface-200"
          :rowStyleClass="getRowClass"
          tableStyle="min-width: 50rem"
        >
          <Column
            field="productCode"
            header="MÃ ĐƠN HÀNG"
            style="font-size: 14px"
          ></Column>
          <Column field="status" header="TRẠNG THÁI" style="font-size: 14px">
            <template #body="slotProps">
              <div
                class="text-sm font-medium"
                :class="getSeverity(slotProps.data.status)"
              >
                {{ slotProps.data.status }}
              </div>
            </template>
          </Column>
          <Column
            field="orderDate"
            header="NGÀY ĐẶT HÀNG"
            style="font-size: 14px"
          ></Column>
          <Column field="total" header="TỔNG TIỀN" style="font-size: 14px"></Column>
          <Column field="action" header="HÀNG ĐỘNG" style="font-size: 14px">
            <template #body="slotProps">
              <div class="text-blue-400 cursor-pointer hover:underline">
                {{ slotProps.data.action }}<i class="fa-solid fa-arrow-right ml-2"></i>
              </div>
            </template>
          </Column>
        </DataTable>
        <Paginator
          :rows="10"
          :totalRecords="120"
          :rowsPerPageOptions="[10, 20, 30]"
        ></Paginator>
      </div>
    </div>

    <div class="border-1 border-round-md border-solid border-gray-200 mt-4 bg-white">
      <div class="font-medium border-bottom-1 border-gray-300 bg-white">
        <div class="mx-3 mt-4 flex justify-content-between">
          <p class="">LỊCH SỬ TÌM KIẾM</p>
          <a href="" class="text-orange-400 hover:underline"
            >Xem tất cả <i class="fa-solid fa-arrow-right ml-2"></i
          ></a>
        </div>
      </div>

      <div class="mt-5">
        <div class="grid flex justify-content-between">
          <div
            v-for="item in searchProducts"
            class="p-0 mx-3 w-16rem col-3 border-1 border-solid border-gray-200 border-round-sm text-sm"
          >
            <img :src="item.image" class="p-2" alt="" />
            <div class="px-3 mt-2">
              <div class="flex">
                <Rating v-model="item.rating" :cancel="false" />
                <label class="ml-2" for="">({{ item.voted }})</label>
              </div>
              <div
                class="my-2 text-base font-medium cursor-pointer hover:underline"
                for=""
              >
                {{ item.title }}
              </div>
              <div class="mb-2 text-base text-blue-400" for="">${{ item.price }}</div>
            </div>
          </div>
        </div>
        <Paginator :rows="10" :totalRecords="120"></Paginator>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    productCode: "#712413",
    status: "HỦY",
    orderDate: "2/06/20024 07:52",
    total: "15.500.000đ (5 sản phẩm)",
    action: "Xem chi tiết",
  },
  {
    productCode: "#712413",
    status: "ĐÃ GIAO HÀNG",
    orderDate: "2/06/20024 07:52",
    total: "15.500.000đ (5 sản phẩm)",
    action: "Xem chi tiết",
  },
  {
    productCode: "#712413",
    status: "ĐANG GIAO HÀNG",
    orderDate: "2/06/20024 07:52",
    total: "15.500.000đ (5 sản phẩm)",
    action: "Xem chi tiết",
  },
  {
    productCode: "#712413",
    status: "ĐANG GIAO HÀNG",
    orderDate: "2/06/20024 07:52",
    total: "15.500.000đ (5 sản phẩm)",
    action: "Xem chi tiết",
  },
]);

const searchProducts = ref([
  {
    image: "/src/assets/images/image-8.png",
    rating: 4,
    voted: 743,
    title: "SP GEAR OIL EP GP-5 82W-90",
    price: 70,
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4,
    voted: 743,
    title: "SP GEAR OIL EP GP-5 82W-90",
    price: 70,
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4,
    voted: 743,
    title: "SP GEAR OIL EP GP-5 82W-90",
    price: 70,
  },
  {
    image: "/src/assets/images/image-8.png",
    rating: 4,
    voted: 743,
    title: "SP GEAR OIL EP GP-5 82W-90",
    price: 70,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "HỦY":
      return "danger";

    case "ĐÃ GIAO HÀNG":
      return "success";

    case "ĐANG GIAO HÀNG":
      return "warning";

    case "renewal":
      return null;
  }
};

const getRowClass = (rowData) => {
  if (rowData.status === "Đang giao hàng") {
    return "completed-row";
  } else {
    return "";
  }
};
</script>

<style scoped>
.success {
  color: #2db224;
}

.warning {
  color: #fa8232;
}

.danger {
  color: #ee5858;
}
</style>
