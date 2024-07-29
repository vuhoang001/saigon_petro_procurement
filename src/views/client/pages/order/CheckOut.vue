<template>
  <div class="bg-gray-300 p-4">
    <div class="flex container mx-6 mx-auto">
      <div><i class="pi pi-home mr-2"></i><span>Trang chủ</span></div>
      <div>
        <i class="pi pi-arrow-right mr-2 ml-2"></i><span class="text-primary">Thanh toán</span>
      </div>
    </div>
  </div>
  <div class="container mx-7 mt-5 mx-auto">
    <div class="grid">
      <div class="col-8">
        <h6>Thông tin khách hàng</h6>
        <div class="p-fluid">
          <div class="grid align-items-end">
            <div class="col-3">
              <div class="field">
                <label>Họ và tên</label>
                <InputText />
              </div>
            </div>
            <div class="col-3">
              <div class="field">
                <InputText />
              </div>
            </div>
            <div class="col-6">
              <div class="field">
                <label>Công ty(Optional)</label>
                <InputText />
              </div>
            </div>
          </div>
          <div class="grid align-items-end">
            <div class="col-12">
              <div class="field">
                <label>Địa chỉ</label>
                <InputText />
              </div>
            </div>
          </div>
          <div class="grid align-items-end">
            <div class="col-3">
              <div class="field">
                <label>Quốc gia</label>
                <InputText />
              </div>
            </div>
            <div class="col-3">
              <div class="field">
                <label>Tỉnh/Thành phố</label>
                <InputText />
              </div>
            </div>
            <div class="col-3">
              <div class="field">
                <label>Quận huyện</label>
                <InputText />
              </div>
            </div>
            <div class="col-3">
              <div class="field">
                <label>Xã/Phường/Thị trấn</label>
                <InputText />
              </div>
            </div>
          </div>
          <div class="grid align-items-end">
            <div class="col-6">
              <div class="field">
                <label>Email</label>
                <InputText />
              </div>
            </div>
            <div class="col-6">
              <div class="field">
                <label>Số điện thoại</label>
                <InputText />
              </div>
            </div>
          </div>
          <div class="grid align-items-end">
            <div class="col-6 flex items-center">
              <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
              <label for="ingredient1" class="ml-2"> Giao hàng tại địa chỉ khác </label>
            </div>
          </div>
        </div>
        <div class="border-1 border-round mt-4">
          <div class="p-3">
            <h6>Phương thức thanh toán</h6>
          </div>
          <hr />
          <div class="flex">
            <div style="width: 20%" class="p-3">
              <div class="flex flex-column align-items-center gap-3 border-right-1">
                <img src="/image/cash-on-delivery.png" alt="" style="width: 32px; height: 32px" />
                <span>COD</span>
                <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
              </div>
            </div>
            <div style="width: 20%" class="p-3">
              <div class="flex flex-column align-items-center gap-3 border-right-1">
                <img src="/image/MoMo_Logo.png" alt="" style="width: 32px; height: 32px" />
                <span>Ví Momo</span>
                <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
              </div>
            </div>
            <div style="width: 20%" class="p-3">
              <div class="flex flex-column align-items-center gap-3 border-right-1">
                <img src="/image/340.png" alt="" style="width: 32px; height: 32px" />
                <span>Zalopay</span>
                <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
              </div>
            </div>
            <div style="width: 20%" class="p-3">
              <div class="flex flex-column align-items-center gap-3 border-right-1">
                <img src="/image/bank.png" alt="" style="width: 32px; height: 32px" />
                <span>Chuyển khoản NH</span>
                <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
              </div>
            </div>
            <div style="width: 20%" class="p-3">
              <div class="flex flex-column align-items-center gap-3">
                <img src="/image/atm-card.png" alt="" style="width: 32px; height: 32px" />
                <span>Debit/Credit Card</span>
                <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
              </div>
            </div>
          </div>
          <hr />
          <div class="p-5 p-fluid">
            <div class="grid align-items-end">
              <div class="col-12">
                <div class="field">
                  <label>Tên trên thẻ</label>
                  <InputText />
                </div>
              </div>
              <div class="col-12">
                <div class="field">
                  <label>Số thẻ</label>
                  <InputText />
                </div>
              </div>
              <div class="col-6">
                <div class="field">
                  <label>Ngày hết hạn</label>
                  <InputNumber />
                </div>
              </div>
              <div class="col-6">
                <div class="field">
                  <label>CVC</label>
                  <InputNumber />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div>
            <h6>Thông tin khác</h6>
            <span class="font-bold">Ghi chú (Optional)</span>
            <div class="p-1 mt-2">
              <Textarea class="w-full" rows="5" placeholder="Thêm ghi chú" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <h5>Tóm tắt đơn hàng</h5>
          <div class="p-2">
            <div class="grid">
              <div class="col-3">
                <img src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/xo-sp-6783.png" alt=""
                  style="width: 70px" />
              </div>
              <div class="col-9">
                <div>
                  <p>SP GREEN POWER SCOOTER PLUS SN 10W-40</p>
                  <span>1 x </span><span class="text-primary">$70</span>
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="col-3">
                <img src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/xo-sp-6783.png" alt=""
                  style="width: 70px" />
              </div>
              <div class="col-9">
                <div>
                  <p>SP GREEN POWER SCOOTER PLUS SN 10W-40</p>
                  <span>1 x </span><span class="text-primary">$70</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="flex justify-content-between">
              <h6>Tổng tiền</h6>
              <span>$320</span>
            </div>
            <div class="flex justify-content-between">
              <h6>Phí vận chuyển</h6>
              <span>Free</span>
            </div>
            <div class="flex justify-content-between">
              <h6>Giảm giá</h6>
              <span>$24</span>
            </div>
            <div class="flex justify-content-between">
              <h6>Thuế VAT</h6>
              <span>$61.67</span>
            </div>
            <hr />
          </div>
          <div class="p-2">
            <div class="flex justify-content-between">
              <h5>Thành tiền</h5>
              <span>$357.99 USD</span>
            </div>
            <router-link to="/client/success">
              <Button label="ĐẶT HÀNG" icon="pi pi-arrow-right" class="w-full bg-orange-500 p-3 border-0 mt-2 font-bold"
                iconPos="right" raised />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
</script>
