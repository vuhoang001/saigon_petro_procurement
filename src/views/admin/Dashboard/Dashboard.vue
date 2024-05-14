<script setup>
import { ref, onMounted } from 'vue';

const activeIndex = ref(null);
const items = ref([{ name: 'Ngày' }, { name: 'Tuần' }, { name: 'Tháng' }, { name: 'Năm' }]);

const handleClick = (item) => {
    activeIndex.value = item;
};

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: documentStyle.getPropertyValue('--cyan-500'),
                borderColor: documentStyle.getPropertyValue('--cyan-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: documentStyle.getPropertyValue('--gray-500'),
                borderColor: documentStyle.getPropertyValue('--gray-500'),
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
};
</script>

<template>
    <div class="uppercase font-bold text-2xl">Tổng quan</div>
    <div class="grid grid-nogutter gap-3 mt-5">
        <div class="col bg-white border-round-md">
            <div class="p-2">
                <div class="flex">
                    <div class="col-3 flex align-items-center justify-content-center">
                        <div class="w-3rem h-3rem border-circle" style="background-color: #99bd62">
                            <span class="flex align-items-center justify-content-center h-full text-2xl"> $ </span>
                        </div>
                    </div>
                    <div class="col-9 pl-0">
                        <div class="flex justify-content-between">
                            <div class="mt-3 text-lg font-bold text-gray-400">Doanh thu</div>
                            <div>
                                <div class="py-1 px-3 text-xs" style="background-color: #e2e6da">+ 4%</div>
                            </div>
                        </div>
                        <div class="flex align-items-center mt-3">
                            <div class="text-2xl font-bold">$45800</div>
                            <div class="text-base ml-2">Tháng này</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col bg-white border-round-md">
            <div class="p-2">
                <div class="flex">
                    <div class="col-3 flex align-items-center justify-content-center">
                        <div class="w-3rem h-3rem border-circle" style="background-color: #b36fa8">
                            <span class="flex align-items-center justify-content-center h-full text-2xl"> $ </span>
                        </div>
                    </div>
                    <div class="col-9 pl-0">
                        <div class="flex justify-content-between">
                            <div class="mt-3 text-lg font-bold text-gray-400">Đơn đặt hàng</div>
                            <div>
                                <div class="py-1 px-3 text-xs" style="background-color: #f3e8f1">+ 4%</div>
                            </div>
                        </div>
                        <div class="flex align-items-center mt-3">
                            <div class="text-2xl font-bold">245</div>
                            <div class="text-base ml-2">Tháng này</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col bg-white border-round-md">
            <div class="p-2">
                <div class="flex">
                    <div class="col-3 flex align-items-center justify-content-center">
                        <div class="w-3rem h-3rem border-circle" style="background-color: #1e7dec">
                            <span class="flex align-items-center justify-content-center h-full text-2xl"> $ </span>
                        </div>
                    </div>
                    <div class="col-9 pl-0">
                        <div class="flex justify-content-between">
                            <div class="mt-3 text-lg font-bold text-gray-400">Tổng số đại lý</div>
                            <div>
                                <div class="py-1 px-3 text-xs" style="background-color: #c5ddfa">+ 4%</div>
                            </div>
                        </div>
                        <div class="flex align-items-center mt-3">
                            <div class="text-2xl font-bold">1500</div>
                            <div class="text-base ml-2">Tháng này</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col bg-white border-round-md">
            <div class="p-2">
                <div class="flex">
                    <div class="col-3 flex align-items-center justify-content-center">
                        <div class="w-3rem h-3rem border-circle" style="background-color: #ac5dea">
                            <span class="flex align-items-center justify-content-center h-full text-2xl"> $ </span>
                        </div>
                    </div>
                    <div class="col-9 pl-0">
                        <div class="flex justify-content-between">
                            <div class="mt-3 text-lg font-bold text-gray-400">Đăng ký mới</div>
                            <div>
                                <div class="py-1 px-3 text-xs" style="background-color: #f2e9fd">+ 4%</div>
                            </div>
                        </div>
                        <div class="flex align-items-center mt-3">
                            <div class="text-2xl font-bold">25</div>
                            <div class="text-base ml-2">Tháng này</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-nogutter mt-5">
        <div class="col-8 pr-2 bg-white border-round-md">
            <div class="p-3">
                <div class="flex align-items-center justify-content-between">
                    <div class="text-xl font-bold">Báo cáo mua hàng</div>
                    <ul>
                        <li
                            class="inline-block mr-7 cursor-pointer font-semibold text-lg"
                            v-for="(item, index) in items"
                            v-bind:key="index"
                            @click="handleClick(item)"
                            :class="{ 'text-gray-400': activeIndex !== item, 'text-purple-700': activeIndex === item }"
                        >
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
            </div>
        </div>
        <div class="col-4 pl-3">
            <div class="bg-white pl-3 pr-4 align-items-center pb-1 border-round-md">
                <div class="flex align-items-center">
                    <div class="col-9">
                        <div class="font-bold text-xl">Top sản phẩm bán chạy</div>
                        <div class="text-gray-400 mt-3">145 đơn hàng trong tháng này</div>
                    </div>
                    <div class="col-3 flex align-items-center justify-content-end">
                        <a href="#">Chi tiết</a>
                    </div>
                </div>
                <div class="flex align-items-center mb-2">
                    <div class="col-3 flex justify-content-center align-items-center bg-gray-200 border-round-md">
                        <image src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/xe-cong-nghe-scooter-4786.png" alt="Image" width="100%" />
                    </div>
                    <div class="col-9">
                        <div class="font-bold text-lg">SP GREEN POWER PLUS SN 10W-40 XE CÔNG NGHỆ</div>
                        <div class="flex mt-2">
                            <div class="bg-green-300 px-1 py-1 border-round-lg text-white">#124557</div>
                            <div class="px-1 py-1 ml-3">18240 chai</div>
                        </div>
                    </div>
                </div>
                <div class="flex align-items-center mb-2">
                    <div class="col-3 bg-gray-200 border-round-md">
                        <Image src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png" alt="Image" width="100%" />
                    </div>
                    <div class="col-9">
                        <div class="font-bold text-lg">Dầu động cơ xe số 4T cao cấp</div>
                        <div class="flex mt-2">
                            <div class="bg-green-300 px-1 py-1 border-round-lg text-white">#124557</div>
                            <div class="px-1 py-1 ml-3">18240 chai</div>
                        </div>
                    </div>
                </div>
                <div class="flex align-items-center mb-2">
                    <div class="col-3 flex justify-content-center align-items-center bg-gray-200 border-round-md">
                        <image src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/xe-cong-nghe-scooter-4786.png" alt="Image" width="100%" />
                    </div>
                    <div class="col-9">
                        <div class="font-bold text-lg">SP GREEN POWER PLUS SN 10W-40 XE CÔNG NGHỆ</div>
                        <div class="flex mt-2">
                            <div class="bg-green-300 px-1 py-1 border-round-lg text-white">#124557</div>
                            <div class="px-1 py-1 ml-3">18240 chai</div>
                        </div>
                    </div>
                </div>
                <div class="flex align-items-center mb-2">
                    <div class="col-3 bg-gray-200 border-round-md">
                        <Image src="https://apsaigonpetro.com/watermark/product/560x560x2/upload/product/sp-force-4t-sl-1739.png" alt="Image" width="100%" />
                    </div>
                    <div class="col-9">
                        <div class="font-bold text-lg">Dầu động cơ xe số 4T cao cấp</div>
                        <div class="flex mt-2">
                            <div class="bg-green-300 px-1 py-1 border-round-lg text-white">#124557</div>
                            <div class="px-1 py-1 ml-3">18240 chai</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white mt-5 p-3 border-round-md">
        <div class="font-bold text-xl mb-4">Đơn hàng gần nhất</div>

        <table class="w-full text-left" style="border-spacing: 0px">
            <tr>
                <th class="border-bottom-1 border-500 p-2">Mã đơn hàng</th>
                <th class="border-bottom-1 border-500 p-2">Đơn hàng</th>
                <th class="border-bottom-1 border-500 p-2">Số lượng</th>
                <th class="border-bottom-1 border-500 p-2">Tổng tiền</th>
                <th class="border-bottom-1 border-500 p-2">Ngày đặt hàng</th>
                <th class="border-bottom-1 border-500 p-2">Trạng thái</th>
            </tr>
            <tr>
                <td><div class="mt-1 p-2">PO00003</div></td>
                <td><div class="mt-1 p-2">Đơn đặt hàng 2404</div></td>
                <td><div class="mt-1 p-2">04</div></td>
                <td><div class="mt-1 p-2">1.7999.000đ</div></td>
                <td><div class="mt-1 p-2">20/4/2024</div></td>
                <td><div class="mt-1 pending">Chờ duyệt</div></td>
            </tr>

            <tr>
                <td><div class="mt-1 p-2">PO00003</div></td>
                <td><div class="mt-1 p-2">Đơn đặt hàng 2404</div></td>
                <td><div class="mt-1 p-2">04</div></td>
                <td><div class="mt-1 p-2">1.7999.000đ</div></td>
                <td><div class="mt-1 p-2">20/4/2024</div></td>
                <td><div class="mt-1 appoved">Đã duyệt</div></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.pending {
    display: inline-block;
    padding: 0.5rem;
    background-color: var(--red-100);
    color: var(--red-400);
    border-radius: 0.375rem;
    width: 6rem;
    text-align: center;
}
.appoved {
    display: inline-block;
    padding: 0.5rem;
    background-color: var(--green-100);
    color: var(--green-400);
    border-radius: 0.375rem;
    width: 6rem;
    text-align: center;
}
</style>
