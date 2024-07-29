<template>
  <div class="container mx-auto mt-6">
    <div class="grid">
      <div class="col-3">
        <div
          class="w-19rem border-1 border-round-md border-solid border-gray-300 shadow-2"
        >
          <ul class="list-none my-0 pl-0">
            <router-link :to="{ name: 'boardSetup' }">
              <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
                <i class="ml-4 mr-3 fa-solid fa-table-columns"></i>
                Tổng quan
              </li>
            </router-link>
            <router-link :to="{ name: 'hisPur' }">
              <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
                <i class="ml-4 mr-3 fa-solid fa-store"></i>
                Lịch sử mua hàng
              </li>
            </router-link>
            <router-link to="/client/setup/inventory">
              <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
                <i class="ml-4 mr-3 fa-solid fa-cart-shopping"></i>
                Kho & hàng tồn
              </li>
            </router-link>
            <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
              <i class="ml-4 mr-3 fa-regular fa-heart"></i>
              Yêu thích
            </li>
            <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
              <i class="ml-4 mr-3 fa-solid fa-arrow-right-arrow-left"></i>
              Đổi trả
            </li>
            <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
              <i class="ml-4 mr-3 fa-solid fa-address-book"></i>
              Địa chỉ giao hàng
            </li>
            <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
              <i class="ml-4 mr-3 fa-solid fa-clock-rotate-left"></i>
              Lịch sử tìm kiếm
            </li>
            <router-link :to="{ name: 'user' }">
              <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
                <i class="ml-4 mr-3 fa-solid fa-gear"></i>
                Cấu hình thông tin tài khoản
              </li>
            </router-link>
            <li class="py-3 hover:bg-blue-100 cursor-pointer font-medium">
              <i class="ml-4 mr-3 fa-solid fa-right-from-bracket"></i>
              Đăng xuất
            </li>
          </ul>
        </div>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
