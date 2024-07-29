<template>
    <div class="border-1 border-round-md border-solid border-gray-300">
        <div class="font-medium py-3 border-bottom-1 border-gray-300 bg-white">
            <p class="ml-3">LỊCH SỬ MUA HÀNG</p>
        </div>

        <div>
            <DataTable :value="products" header="surface-200" :rowStyleClass="getRowClass"
                tableStyle="min-width: 50rem">
                <Column field="productCode" header="MÃ ĐƠN HÀNG" style="font-size: 14px;"></Column>
                <Column field="status" header="TRẠNG THÁI" style="font-size: 14px;">
                    <template #body="slotProps">
                        <div class="text-sm font-medium" :class="getSeverity(slotProps.data.status)">{{
                            slotProps.data.status }}</div>
                    </template>
                </Column>
                <Column field="orderDate" header="NGÀY ĐẶT HÀNG" style="font-size: 14px;"></Column>
                <Column field="total" header="TỔNG TIỀN" style="font-size: 14px;"></Column>
                <Column field="action" header="HÀNG ĐỘNG" style="font-size: 14px;">
                    <template #body="slotProps">
                        <div class="text-blue-400 cursor-pointer hover:underline">{{ slotProps.data.action }}<i class="fa-solid fa-arrow-right ml-2"></i></div>
                    </template>
                </Column>
            </DataTable>
            <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
    {
        productCode: "#96459761",
        status: "ĐANG GIAO HÀNG",
        orderDate: "05/07/20024 05:18",
        total: "10.500.000đ (5 sản phẩm)",
        action: "Xem chi tiết",
    },
    {
        productCode: "#712123",
        status: "ĐÃ HOÀN TẤT",
        orderDate: "02/25/20024 19:28",
        total: "25.000.000đ (11 sản phẩm)",
        action: "Xem chi tiết",
    },
    {
        productCode: "#712625",
        status: "HỦY",
        orderDate: "20/04/20024 23:55",
        total: "1.500.000đ (3 sản phẩm)",
        action: "Xem chi tiết",
    },
    {
        productCode: "#712970",
        status: "ĐÃ HOÀN TẤT",
        orderDate: "24/03/20024 19:28",
        total: "500.000đ (1 sản phẩm)",
        action: "Xem chi tiết",
    },
    {
        productCode: "#712970",
        status: "HỦY",
        orderDate: "11/02/20024 22:12",
        total: "450.000đ (1 sản phẩm)",
        action: "Xem chi tiết",
    },
    {
        productCode: "#712970",
        status: "ĐÃ HOÀN TẤT",
        orderDate: "07/12/20024 22:12",
        total: "690.000đ (1 sản phẩm)",
        action: "Xem chi tiết",
    },

]);

const getSeverity = (status) => {
    switch (status) {
        case 'HỦY':
            return 'danger';

        case 'ĐÃ HOÀN TẤT':
            return 'success';

        case 'ĐANG GIAO HÀNG':
            return 'warning';

        case 'renewal':
            return null;
    }
}

const getRowClass = (rowData) => {
    if (rowData.status === 'Đang giao hàng') {
        return 'completed-row'; // CSS class name
    } else {
        return '';
    }
};
</script>

<style scoped>
.success {
    color: #2DB224
}

.warning {
    color: #FA8232
}

.danger {
    color: #EE5858
}

.completed-row {
    background-color: green;

}
</style>