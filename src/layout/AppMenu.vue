<script setup>
import { ref } from "vue";

import AppMenuItem from "./AppMenuItem.vue";

const model = ref([
  {
    label: "",
    items: [
      {
        label: "Tổng quan",
        icon: "fa-solid fa-house",
        to: { name: "dashboard" },
      },
      {
        label: "Quản lý thông tin",
        icon: "fa-solid fa-building",
        items: [
          {
            label: "Quản lý nhà phân phối",
            icon: "fa-solid fa-briefcase",
            items: [
              {
                label: "Danh mục nhà phân phối",
                icon: "fa-solid fa-book",
                to: { name: "agencyCategory" },
              },
              {
                label: "Nhóm nhà phân phối",
                icon: "fa-solid fa-crown",
                to: { name: "agencyGroup" },
              },
            ],
          },
          {
            label: "Sản phẩm",
            icon: "fa-solid fa-box-archive",
            items: [
              {
                label: "Danh mục sản phẩm",
                icon: "fa-solid fa-box-archive",
                to: { name: "itemCategory" },
              },
              {
                label: "Nhóm sản phẩm",
                icon: "fa-solid fa-boxes-stacked",
                to: { name: "itemGroup" },
              },
              // {
              //   label: "Đơn vị tính",
              //   icon: "fa-solid fa-ruler-combined",
              //   to: { name: "unitOfMeasurement" },
              // },
              // {
              //   label: "Nhóm đơn vị tính",
              //   icon: "fa-solid fa-code-compare",
              //   to: { name: "uomGroup" },
              // },
            ],
          },
        ],
      },
      {
        label: "Khuyến mãi",
        icon: "fa-solid fa-percent",
        to: { name: "discount" },
      },
      {
        label: "Đơn đặt hàng",
        icon: "fa-solid fa-clipboard-check",
        to: { name: "purchaseList" },
      },
      {
        label: "Báo cáo",
        icon: "fas fa-chart-column",
        to: { name: "Report" },
      },
      {
        label: "Thiết lập hệ thống",
        icon: "fa-solid fa-gear",
        items: [
          {
            label: "Người dùng",
            icon: "fa-solid fa-user-large",
          },
          {
            label: "Nhóm người dùng",
            icon: "fa-solid fa-users",
          },
          {
            label: "Phân quyền tài khoản",
            icon: "fa-solid fa-users-gear",
          },
          {
            label: "Thông báo",
            icon: "fa-solid fa-bell",
          },
        ],
      },
    ],
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
