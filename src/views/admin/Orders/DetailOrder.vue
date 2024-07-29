<template>
  <div>
    <div class="grid align-items-center">
      <div class="col-7">
        <div class="grid">
          <div class="col-4">
            <div class="flex gap-2 flex-column">
              <span class="font-bold uppercase text-sm">Mã</span>
              <h3 class="m-0 font-bold">#NGOO104338</h3>
            </div>
          </div>
          <div class="col-4">
            <div class="flex gap-2 flex-column">
              <span class="font-bold uppercase text-sm">Trạng thái giao hàng</span>
              <Button outlined label="Chưa giao hàng" severity="warning" />
            </div>
          </div>
          <div class="col-4">
            <div class="flex gap-2 flex-column">
              <span class="font-bold uppercase text-sm">Trạng thái thanh toán</span>
              <Button outlined label="Chờ xử lý" severity="info" />
            </div>
          </div>
          <div class="col-12 p-0 pl-3 pr-3">
            <span>20/05/2024 07:00 SA, Kênh bán hàng <b>Web</b></span>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="flex gap-2 justify-content-end">
          <Button
            label="Thao tác"
            icon="pi pi-angle-down"
            iconPos="right"
            severity="secondary"
            raised
          />
          <Button
            label="In"
            icon="pi pi-print"
            iconPos="right"
            severity="secondary"
            raised
          />
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="col-9">
        <div class="card">
          <div class="p-3">
            <Button label="Chưa giao hàng" severity="warning" outlined />
          </div>
          <hr />
          <div class="bg-gray-100 card p-2">
            <div class="grid justify-content-end p-2">
              <div class="col-2">
                <span class="text-gray-500 font-bold">Số lượng</span>
              </div>
              <div class="col-2 flex justify-content-end">
                <span class="text-gray-500 font-bold">Giá</span>
              </div>
              <div class="col-2 flex justify-content-end">
                <span class="text-gray-500 font-bold">Thành tiền</span>
              </div>
            </div>
            <div class="grid justify-content-end p-2 align-items-center">
              <div class="col-6">
                <div class="flex">
                  <div class="w-1">
                    <img
                      src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/xo-sp-6783.png"
                      style="width: 30px"
                    />
                  </div>
                  <div class="w-10 flex flex-column gap-1">
                    <span class="font-bold text-primary text-sm"
                      >SP GREEN POWER SCOOTER PLUS SN 10W-40</span
                    >
                    <span class="text-sm">Còn khả dụng 0 trong kho Kho Thái Hà</span>
                    <div class="flex gap-2">
                      <i class="pi pi-times text-primary"></i>
                      <span class="font-bold text-sm">Khuyến mại:</span>
                      <span>1003925137 - 2/9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 flex justify-content-center">
                <span class="text-gray-500 font-bold">1</span>
              </div>
              <div class="col-2 flex justify-content-end">
                <span class="text-gray-500 font-bold">589,000 ₫</span>
              </div>
              <div class="col-2 flex justify-content-end">
                <span class="text-gray-500 font-bold">589,000 ₫</span>
              </div>
            </div>
            <hr />
            <div class="flex justify-content-end p-2">
              <Button label="Giao hàng" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="p-3">
            <Button label="Chưa giao hàng" severity="info" outlined />
          </div>
          <hr />
          <div class="bg-gray-100 card p-2">
            <div class="grid p-2">
              <div class="col-6">
                <div class="flex flex-column gap-3">
                  <span class="font-bold">Ghi Chú Đơn Hàng</span>
                  <InputText class="w-full" placeholder="Thêm ghi chú cho đơn hàng" />
                </div>
                <div class="mt-3 flex justify-content-end">
                  <Button label="Cập nhật" severity="secondary" raised />
                </div>
              </div>
              <div class="col-6">
                <div class="flex justify-content-between mb-3">
                  <span>Số lượng sản phẩm</span>
                  <span>1</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Số lượng sản phẩm</span>
                  <span>1</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Số lượng sản phẩm</span>
                  <span>1</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Tổng tiền hàng</span>
                  <span>589,000 ₫</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Giảm giá</span>
                  <span>0 ₫</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Vận chuyển<br />Giao hàng tận nơi 0 kg</span>
                  <span>0 ₫</span>
                </div>
                <div class="flex justify-content-between mb-3 font-bold">
                  <span class="flex flex-column gap-1"
                    >Tổng giá trị đơn hàng
                    <small class="font-normal"
                      >Thanh toán khi giao hàng (COD)</small
                    ></span
                  >
                  <span>589,000 ₫</span>
                </div>
                <div class="flex justify-content-between mb-3 font-bold">
                  <span>Đã thanh toán</span>
                  <span>0 ₫</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Đã hoàn trả</span>
                  <span>0 ₫</span>
                </div>
                <div class="flex justify-content-between mb-3">
                  <span>Thực nhận</span>
                  <span>0 ₫</span>
                </div>
                <div class="flex justify-content-end mb-3">
                  <Button label="Thanh toán"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6 class="font-bold">Lịch sử</h6>
          <div class="mt-3">
            <div class="flex gap-3 align-items-center">
              <div class="w-1">
                <Avatar
                  label="V"
                  class="mr-2"
                  size="large"
                  style="background-color: #ece9fc; color: #2a1261"
                  shape="circle"
                />
              </div>
              <div class="w-10">
                <InputText class="w-full" />
              </div>
              <div class="w-1">
                <Button icon="pi pi-send" severity="secondary" outlined raised />
              </div>
            </div>
            <div style="border-left: 5px solid #ccc; margin-left: 18px">
              <div style="margin-left: -9.5px">
                <div>
                  <div class="mb-6 ml-4 p-3">
                    <h5 class="font-bold">20/05/2024</h5>
                  </div>
                  <div class="flex justify-content-between mb-6">
                    <div class="flex gap-2 align-items-center">
                      <i class="pi pi-circle-fill text-primary"></i>
                      <span class="text-primary"
                        >Hệ thống đã chuyển cho cửa hàng Kho Thái Hà</span
                      >
                    </div>
                    <div>
                      <span> 07:00 SA</span>
                    </div>
                  </div>
                  <div class="flex justify-content-between mb-6">
                    <div class="flex gap-2 align-items-center">
                      <i class="pi pi-circle-fill"></i>
                      <span>Email xác nhận đơn hàng đã được gửi đến khách hàng</span>
                    </div>
                    <div>
                      <span> 07:00 SA</span>
                    </div>
                  </div>
                  <div class="flex justify-content-between mb-6">
                    <div class="flex gap-2 align-items-center">
                      <i class="pi pi-circle-fill"></i>
                      <span>Đơn hàng đã được đặt từ thanh toán #1000006296</span>
                    </div>
                    <div>
                      <span> 07:00 SA</span>
                    </div>
                  </div>
                  <div class="flex justify-content-between mb-6">
                    <div>
                      <div class="flex gap-2 align-items-center">
                        <i class="pi pi-circle-fill"></i>
                        <span
                          >Thanh toán 589,000 ₫ đang chờ xử lý
                          <i class="pi pi-angle-right"></i
                        ></span>
                      </div>
                      <div class="ml-5 mt-3">
                        <div class="flex justify-content-between">
                          <span class="font-bold">Mã đơn hàng</span>
                          <span> #NGOO104338</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span> 07:00 SA</span>
                    </div>
                  </div>
                  <div class="flex justify-content-between mb-6">
                    <div class="flex gap-2 align-items-center">
                      <i class="pi pi-circle-fill"></i>
                      <span>Đã nhận đơn hàng mới #NGOO104338 từ võ văn quốc thịnh</span>
                    </div>
                    <div>
                      <span> 07:00 SA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
<script setup></script>
