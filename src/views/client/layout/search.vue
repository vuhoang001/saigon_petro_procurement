<template>
    <div class="h-14rem flex justify-content-center align-items-center bg-green-300">
        <div class="flex flex-column">
            <label class="text-white text-center mb-2">Tìm kiếm sản phẩm bạn cần mua</label>
            <IconField iconPosition="left" class="w-full">
                <InputIcon class="pi pi-search"> </InputIcon>
                <InputText placeholder="Tìm kiếm" />
            </IconField>
        </div>
    </div>
</template>

<style scoped>
:deep(.p-component) {
    width: 450px;
}
</style>
