<script setup>
import { reactive } from 'vue';

const objCart = reactive([
    {
        quantity: 1,
        price: 120.345,
        image: 'https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png',
        desc: 'This is description of cart',
        name: 'SP FORCE P4'
    },
    {
        quantity: 2,
        price: 120.0,
        image: 'https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png',
        desc: 'This is description of cart',
        name: 'SP FORCE P4'
    },
    {
        quantity: 2,
        price: 120.0,
        image: 'https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png',
        desc: 'This is description of cart',
        name: 'SP FORCE P4'
    }
]);

const increaseQuantity = (index) => {
    objCart[index].quantity++;
};
const decreaseQuantity = (index) => {
    if (objCart[index].quantity > 0) {
        objCart[index].quantity--;
    }
};
const formatPrice = (price) => {
    return price
        .toFixed(3)
        .replace(/\d(?=(\d{3})+\.)/g, '$&.')
        .concat(' đ');
};
const totalPrice = (obj) => {
    const total = obj.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    return total;
};
const deleteItem = (index, obj) => {
    obj.splice(index, 1);
};
const confirmCart = () => {
    console.log('confirm');
};
</script>
<template>
    <div class="mx-7 mt-6">
        <div class="grid">
            <div class="col-9">
                <div class="mx-3 px-3 py-3 bg-white font-medium text-lg">Số lượng ({{ objCart.length }})</div>

                <div v-for="(item, index) in objCart" :key="index" class="mx-3 mt-4 px-3 py-3 bg-white">
                    <div class="flex justify-content-between text-lg">
                        <label for="">#{{ index + 1 }}</label>
                        <label for="">
                            <i class="fa-regular fa-pen-to-square cursor-pointer"></i>
                            <i @click="deleteItem(index, objCart)" class="fa-regular fa-trash-can ml-3 cursor-pointer"></i>
                        </label>
                    </div>
                    <div class="grid mt-2">
                        <div class="col-2">
                            <div class="bg-gray-100 py-3 text-center border-round-md mx-4">
                                <img class="w-auto h-6rem" :src="item.image" alt="img" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-2xl font-bold">{{ item.name }}</div>
                            <div class="mt-3 mb-2 text-lg">{{ formatPrice(item.price) }}</div>
                            <InputGroup class="h-3rem w-5">
                                <Button icon="fa-solid fa-minus" style="background-color: white; color: black" @click="decreaseQuantity(index)" />
                                <InputText v-model="item.quantity"></InputText>
                                <Button icon="fa-solid fa-plus" style="background-color: white; color: black" @click="increaseQuantity(index)" />
                            </InputGroup>
                        </div>
                        <div class="col-4 text-right text-lg font-bold">Tổng cộng: {{ formatPrice(item.quantity * item.price) }}</div>
                        <div class="ml-3">
                            <Accordion>
                                <AccordionTab header="Thông tin chi tiết">
                                    <p class="m-0">
                                        {{ item.desc }}
                                    </p>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="bg-white px-5 py-4">
                    <div class="font-bold text-lg">Thông tin tóm tắt</div>
                    <div class="mt-2">
                        <label class="">Địa điểm giao hàng:</label>
                        <div class="mt-1">31 Thái Hà, Đống Đa, Hà Nội</div>
                    </div>
                    <div class="mt-2">
                        <label class="">Người nhận hàng:</label>
                        <div class="mt-1">Đại lý Hùng Lâm</div>
                    </div>
                    <div class="mt-2">
                        <label class="">Ngày cần hàng:</label>
                        <div class="mt-1">30/4/2024</div>
                    </div>
                    <div class="flex justify-content-between font-bold text-lg mt-5">
                        <label for="">Tổng cộng: </label>
                        <label for="">{{ formatPrice(totalPrice(objCart)) }}</label>
                    </div>
                    <div style="height: 1px; background-color: black; margin: 10px 0"></div>
                    <Button @click="confirmCart" class="w-full mb-3" style="display: block">Hoàn tất đặt hàng</Button>
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
</style>
