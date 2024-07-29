<template>
  <div class="flex justify-content-between">
    <h5>Tổng quan</h5>
    <div class="flex gap-2">
      <Button label="Tuỳ chỉnh" outlined icon="pi pi-cog" severity="secondary" />
      <Button label="Tuỳ chỉnh" outlined icon="pi pi-chevron-down" severity="secondary" />
    </div>
  </div>
  <div class="card mt-5">
    
  </div>
</template>
<script setup>
import { ref } from "vue";

const year = ref({ name: "Năm nay" });
</script>
