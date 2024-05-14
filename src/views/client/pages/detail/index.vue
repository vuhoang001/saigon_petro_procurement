<script setup>
import { ref } from 'vue';

const value = ref(null);
const count = ref(1);
</script>

<template>
    <div class="grid nested-grid mt-5">
        <div class="col-4 px-7">
            <div class="text-center bg-white border-round-md">
                <img class="w-auto h-26rem py-5 my-3" src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png" alt="img" />
            </div>
            <div class="grid mt-2">
                <div class="col-4">
                    <div class="bg-white py-3 text-center border-round-md">
                        <img class="w-full h-auto" src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png" alt="img" />
                    </div>
                </div>
                <div class="col-4">
                    <div class="bg-white py-3 text-center border-round-md">
                        <img class="w-full h-auto" src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png" alt="img" />
                    </div>
                </div>
                <div class="col-4">
                    <div class="bg-white py-3 text-center border-round-md">
                        <img class="w-full h-auto" src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="grid">
                <div class="col-6 px-5" style="word-wrap: break-word">
                    <div>
                        <div class="font-bold text-3xl">SP FORCE 4T</div>
                        <div class="flex mt-3">
                            <Rating v-model="value" :cancel="false" />
                            <div class="ml-3 text-gray-400">(150 nhận xét)</div>
                            <div class="mx-3">|</div>
                            <div style="color: #00ff66">Còn hàng</div>
                        </div>
                        <div class="mt-3 text-2xl font-medium">329.000 đ</div>
                        <div class="font-medium mt-3 line-height-3">pricepric epricepricepricepricepricepricepriceprice pricepricepricepr icepricepricepricepricepricepricepricep ricepricepr icepricepricepricepricepriceprice</div>
                    </div>
                    <div class="w-full bg-gray-400 my-3" style="height: 1px"></div>
                    <div class="flex">
                        <div class="w-10rem">
                            <InputGroup class="h-3rem">
                                <Button icon="fa-solid fa-minus" style="background-color: white; color: black" @click="count--" />
                                <InputText v-model="count"></InputText>
                                <Button icon="fa-solid fa-plus" style="background-color: #0d733b" @click="count++" />
                            </InputGroup>
                        </div>
                        <div class="ml-4"><Button class="btn">Thêm vào giỏ</Button></div>
                    </div>
                </div>
                <div class="col-6 px-5 mt-6" style="word-wrap: break-word">
                    <div class="w-28rem ml-7">
                        <div class="flex border-1 font-medium" style="border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom: 0px">
                            <div class="col-1 text-center align-content-center"><i class="fa-solid fa-truck"></i></div>
                            <div class="col-10">
                                <div>Miễn phí vận chuyển</div>
                                <div class="text-xs mt-2 underline">Enter your postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div class="flex border-1 font-medium" style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px">
                            <div class="col-1 text-center align-content-center"><i class="fa-solid fa-rotate"></i></div>
                            <div class="col-10">
                                <div>Dễ dàng hoàn trả</div>
                                <div class="text-xs mt-2">Free 30 Days Delivery Returns. <a href="#" class="underline">Detail</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-8 pr-8">
                    <TabView>
                        <TabPanel header="Thông tin sản phẩm">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </TabPanel>
                        <TabPanel header="Chính sách bảo hành">
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
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
