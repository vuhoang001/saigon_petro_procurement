import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import Default from '../views/client/layout/default.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin',
            component: AppLayout,
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/admin/Dashboard/Dashboard.vue')
                },
                {
                    path: 'agen-man',
                    component: () => import('@/views/admin/MasterData/AgenMan/Index.vue'),
                    children: [
                        {
                            path: 'agency-category',
                            name: 'agencyCategory',
                            component: () => import('@/views/admin/MasterData/AgenMan/AgencyCategory.vue')
                        },
                        {
                            path: 'agency-grp',
                            name: 'agencyGroup',
                            component: () => import('@/views/admin/MasterData/AgenMan/AgencyGroup.vue')
                        }
                    ]
                },
                {
                    path: 'material-goods',
                    component: () => import('@/views/admin/MasterData/SupplyItems/Index.vue'),
                    children: [
                        {
                            path: 'itm-category',
                            name: 'itemCategory',
                            component: () => import('@/views/admin/MasterData/SupplyItems/ItemCategory.vue')
                        },
                        {
                            path: 'itm-group',
                            name: 'itemGroup',
                            component: () => import('@/views/admin/MasterData/SupplyItems/ItemGroup.vue')
                        },
                        {
                            path: 'uom',
                            name: 'unitOfMeasurement',
                            component: () => import('@/views/admin/MasterData/SupplyItems/Uom.vue') // Thêm component cho đơn vị tính
                        },
                        {
                            path: 'uom-grp',
                            name: 'uomGroup',
                            component: () => import('@/views/admin/MasterData/SupplyItems/UomGroup.vue') // Thêm component cho nhóm đơn vị tính
                        }
                    ]
                },
                {
                    path: 'approval-setup',
                    component: () => import('@/views/admin/MasterData/ApprovalSetup/Index.vue'),
                    children: [
                        {
                            path: 'app-lv',
                            name: 'approvalLevel',
                            component: () => import('@/views/admin/MasterData/ApprovalSetup/ApprovalLevel.vue')
                        },
                        {
                            path: 'app-temp',
                            name: 'approvalTemplate',
                            component: () => import('@/views/admin/MasterData/ApprovalSetup/ApprovalTemplate.vue')
                        }
                    ]
                },
                {
                    path: 'discount',
                    name: 'discount',
                    component: () => import('@/views/admin/Discount/Discount.vue')
                },
                {
                    path: 'purchase-order',
                    name: 'purchaseOrder',
                    children: [
                        {
                            path: 'purchase-list',
                            name: 'purchaseList',
                            component: () => import('@/views/admin/MasterData/PurchaseOrder/orderList.vue')
                        },
                        {
                            path: 'approval-status',
                            name: 'approvalStatus',
                            component: () => import('@/views/admin/MasterData/PurchaseOrder/approvalStatus.vue')
                        },
                        {
                            path: 'approval-decision',
                            name: 'approvalDecision',
                            component: () => import('@/views/admin/MasterData/PurchaseOrder/approvalDecision.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/client',
            component: Default,
            children: [
                {
                    path: 'detail',
                    name: 'detail',
                    component: () => import('@/views/client/pages/detail/index.vue')
                },
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/views/client/pages/home/index.vue')
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: () => import('@/views/client/pages/cart/index.vue')
                }
            ]
        }
    ]
});

export default router;
