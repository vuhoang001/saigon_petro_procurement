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
                <Stepper>
                    <StepperPanel header="Step 1: Basic Info">
                        <template
                            #content="{ index, active, highlighted, clickCallback, prevCallback, nextCallback }">
                            <div :class="class">
                                <p>This is the content for Step 1.</p>
                                <button @click="nextCallback">Go to Step 2</button>
                            </div>
                        </template>
                    </StepperPanel>
                    <StepperPanel header="Step 2: Details">
                        <template
                            #content="{ index, active, highlighted, clickCallback, prevCallback, nextCallback }">
                            <div :class="class">
                                <p>This is the content for Step 2.</p>
                                <button @click="prevCallback">Go to Step 1</button>
                                <button @click="nextCallback">Go to Step 3</button>
                            </div>
                        </template>
                    </StepperPanel>
                    <StepperPanel header="Step 3: Confirmation">
                        <template
                            #content="{ index, active, highlighted, clickCallback, prevCallback, nextCallback }">
                            <div :class="class">
                                <p>This is the content for Step 3.</p>
                                <button @click="prevCallback">Go to Step 2</button>
                                <button @click="finishProcess">Finish</button>
                            </div>
                        </template>
                    </StepperPanel>
                </Stepper>
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
import { ref } from "vue";
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';

steps: [
    { label: 'Step 1', content: 'Content for step 1' },
    { label: 'Step 2', content: 'Content for step 2' },
    { label: 'Step 3', content: 'Content for step 3' }
]
</script>