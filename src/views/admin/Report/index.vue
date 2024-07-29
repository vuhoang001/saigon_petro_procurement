<template>
  <div class="flex justify-content-between">
    <h5>Tổng quan</h5>
    <div class="flex gap-2">
      <Button label="Tuỳ chỉnh" outlined icon="pi pi-cog" severity="secondary" />
      <Button label="Tuỳ chỉnh" outlined icon="pi pi-chevron-down" severity="secondary" />
    </div>
  </div>
  <div class="mt-5">
    <div class="grid card">
      <div class="col-2">
        <Dropdown
          :options="[{ name: 'Năm nay' }]"
          optionLabel="name"
          v-model="year"
          class="w-full"
        ></Dropdown>
      </div>
      <div class="col-3">
        <Dropdown
          :options="[{ name: 'So sánh : Năm trước' }]"
          optionLabel="name"
          v-model="compare"
          class="w-full"
        ></Dropdown>
      </div>
      <div class="col-3">
        <Dropdown
          :options="[{ name: 'Tất cả Kho bán' }]"
          optionLabel="name"
          v-model="AllW"
          class="w-full"
        ></Dropdown>
      </div>
      <div class="col-3">
        <Dropdown
          :options="[{ name: 'Tất cả Kênh bán' }]"
          optionLabel="name"
          v-model="AllC"
          class="w-full"
        ></Dropdown>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <div class="grid">
      <div class="col-3">
        <div class="card">
          <h6 class="m-0 mb-2">Số đơn hàng</h6>
          <h5 class="m-0 mb-2">48</h5>
          <div class="text-red-500">
            <i class="pi pi-caret-down"></i> <span>47,67%</span>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <h6 class="m-0 mb-2">Doanh số</h6>
          <h5 class="m-0 mb-2">98,334,233đ</h5>
          <div class="text-green-500">
            <i class="pi pi-caret-up"></i> <span>134,67%</span>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <h6 class="m-0 mb-2">Thực nhận</h6>
          <h5 class="m-0 mb-2">11,654,322đ</h5>
          <div class="text-red-500">
            <i class="pi pi-caret-down"></i> <span>57,67%</span>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <h6 class="m-0 mb-2">Biên lợi nhuận gộp</h6>
          <h5 class="m-0 mb-2">97.12%</h5>
          <div class="text-red-500">
            <i class="pi pi-caret-down"></i> <span>1,67%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <div class="grid">
      <div class="col-6">
        <div class="card">
          <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <Chart
            type="line"
            :data="chartData2"
            :options="chartOptions2"
            class="h-30rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const year = ref({ name: "Năm nay" });
const compare = ref({ name: "So sánh : Năm trước" });
const AllW = ref({ name: "Tất cả Kho bán" });
const AllC = ref({ name: "Tất cả Kênh bán" });

const chartData = ref();
const chartOptions = ref();
const chartData2 = ref();
const chartOptions2 = ref();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
  chartData2.value = setChartData2();
  chartOptions2.value = setChartOptions2();
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["01/2024", "04/2024", "07/2024"],
    datasets: [
      {
        label: "Doanh thu thuần",
        data: [10, 59, 90],
        fill: false,
        borderColor: documentStyle.getPropertyValue("--cyan-500"),
        tension: 0.4,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};

const setChartData2 = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["01/2024", "02/2024", "03/2024", "4/2024", "05/2024", "06/2024", "07/2024"],
    datasets: [
      {
        label: "Lượng đơn hàng theo tháng",
        data: [650, 5900, 8000, 8100, 5600, 10000, 12000],
        fill: false,
        tension: 0.4,
        borderColor: documentStyle.getPropertyValue("--orange-500"),
      },
    ],
  };
};
const setChartOptions2 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>
