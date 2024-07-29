<template>
    <div class="container mx-auto mt-5">

        <div class="card">
            <div class="flex justify-content-between card border-1 border-solid"
                style="background-color: #FDFAE7; border-color: #F7E99E;">
                <div>
                    <span class="block text-xl font-semibold mb-2">#9217234</span>
                    <span>
                        4 products
                    </span>
                    <span>
                        Order placed in 17 Jan, 2021 at 7:32 PM
                    </span>
                </div>
                <div class="flex align-items-center">
                    <span class="text-2xl font-semibold text-blue-400">
                        #1199.00
                    </span>
                </div>
            </div>

            <span>Order expected arrival <span class="font-semibold">23 Jan, 2021</span></span>

            <div class="mt-4 mx-4">
                <div class="stepper-wrapper">
                    <div class="stepper-item completed">
                        <div class="step-counter"><i class="fa-solid fa-check text-white" style="font-size: 10px;"></i>
                        </div>
                        <div class="step-name">
                            <div class="flex flex-column align-items-center">
                                <i class="fa-solid fa-book text-3xl my-3 block text-green-400"></i>
                                <span class="text-base font-medium">Order Placed</span>
                            </div>
                        </div>
                    </div>
                    <div class="stepper-item ">
                        <div class="step-counter"><i class="fa-solid fa-check text-white" style="font-size: 10px;"></i>
                        </div>
                        <div class="step-name">
                            <div class="flex flex-column align-items-center">
                                <i class="fa-solid fa-box-archive text-3xl my-3 block text-orange-400"></i>
                                <span class="text-base font-medium">Packaging</span>
                            </div>
                        </div>
                    </div>
                    <div class="stepper-item active">
                        <div class="step-counter"><i class="fa-solid fa-check text-white" style="font-size: 10px;"></i>
                        </div>
                        <div class="step-name">
                            <div class="flex flex-column align-items-center">
                                <i class="fa-solid fa-car-side text-3xl my-3 block text-orange-400"></i>
                                <span class="text-base font-medium">Packaging</span>
                            </div>
                        </div>
                    </div>
                    <div class="stepper-item">
                        <div class="step-counter"><i class="fa-solid fa-check text-white" style="font-size: 10px;"></i>
                        </div>
                        <div class="step-name">
                            <div class="flex flex-column align-items-center">
                                <i class="fa-solid fa-handshake text-3xl my-3 block text-orange-400"></i>
                                <span class="text-base font-medium">Packaging</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <div>
                <span class="text-xl font-medium my-4 block">Order Activity</span>

                <div class="flex flex-col mt-3">
                    <div>
                        <i class="fa-solid fa-check-double p-3 bg-green-200 text-green-600 border-round-sm"></i>
                    </div>
                    <div class="flex flex-column justify-content-around ml-3">
                        <span>Your order has been delivered. Thank you for shopping at Clicon!</span>
                        <span>23 Jan, 2021 at 7:32 PM</span>
                    </div>
                </div>
                <div class="flex flex-col mt-3">
                    <div>
                        <i class="fa-regular fa-user p-3 bg-blue-100 text-blue-600 border-round-sm"></i>
                    </div>
                    <div class="flex flex-column justify-content-around ml-3">
                        <span>Our delivery man (John Wick) has picked-up your order for delivery.</span>
                        <span>23 Jan, 2021 at 7:32 PM</span>
                    </div>
                </div>
                <div class="flex flex-col mt-3">
                    <div>
                        <i class="fa-solid fa-location-dot p-3 bg-blue-100 text-blue-600 border-round-sm"></i>
                    </div>
                    <div class="flex flex-column justify-content-around ml-3">
                        <span>Your order has reached at last mile hub.</span>
                        <span>23 Jan, 2021 at 7:32 PM</span>
                    </div>
                </div>
                <div class="flex flex-col mt-3">
                    <div>
                        <i class="fa-regular fa-map p-3 bg-blue-100 text-blue-600 border-round-sm"></i>
                    </div>
                    <div class="flex flex-column justify-content-around ml-3">
                        <span>Your order on the way to (last mile) hub.</span>
                        <span>23 Jan, 2021 at 7:32 PM</span>
                    </div>
                </div>
                <div class="flex flex-col mt-3">
                    <div>
                        <i class="fa-regular fa-circle-check p-3 bg-green-200 border-round-sm"></i>
                    </div>
                    <div class="flex flex-column justify-content-around ml-3">
                        <span>Your order is successfully verified</span>
                        <span>23 Jan, 2021 at 7:32 PM</span>
                    </div>
                </div>
                <div class="flex flex-col mt-3">
                    <div>
                        <i class="fa-regular fa-calendar p-3 bg-blue-100 text-blue-600 border-round-sm"></i>
                    </div>
                    <div class="flex flex-column justify-content-around ml-3">
                        <span>Your order has been comfirmed.</span>
                        <span>23 Jan, 2021 at 7:32 PM</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.stepper-wrapper {
    font-family: Arial;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.stepper-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    @media (max-width: 768px) {
        font-size: 12px;
    }
}

.stepper-item::before {
    position: absolute;
    content: "";
    width: 100%;
    top: 9px;
    left: -50%;
    z-index: 2;
}

.stepper-item::after {
    position: absolute;
    content: "";
    border-bottom: 8px solid #FFE7D6;
    width: 100%;
    top: 9px;
    left: 50%;
    z-index: 2;
}

.stepper-item .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    border: 2px solid #FA8232;
    margin-bottom: 6px;
}

.stepper-item.active {
    font-weight: bold;
}

.stepper-item.completed .step-counter {
    background-color: #FA8232;
}

.stepper-item.completed::after {
    position: absolute;
    content: "";
    border-bottom: 8px solid #FA8232;
    width: 100%;
    top: 9px;
    left: 50%;
    z-index: 3;
}

.stepper-item:first-child::before {
    content: none;
}

.stepper-item:last-child::after {
    content: none;
}
</style>