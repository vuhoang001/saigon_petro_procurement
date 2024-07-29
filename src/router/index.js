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
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/views/admin/Dashboard/Dashboard.vue')
                },
                {
                    path: 'report',
                    name: 'Report',
                    component: () => import('@/views/admin/Report/index.vue')
                },
                {
                    path: 'order/:id',
                    name: 'DetailOrder',
                    component: () => import('@/views/admin/Orders/DetailOrder.vue')
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
                    path: 'discount/action/:q',
                    name: 'discountUpdate',
                    component: () => import('@/views/admin/Discount/components/createDiscount.vue')
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
                    path: 'setup',
                    component: () => import('@/views/client/pages/userInfor/index.vue'),
                    children: [
                        {
                            path: 'user',
                            name: 'user',
                            component: () => import('@/views/client/pages/userInfor/components/setupAccount.vue')
                        },
                        {
                            path: 'hisPur',
                            name: 'hisPur',
                            component: () => import('@/views/client/pages/userInfor/components/historyPurchases.vue')
                        },
                        {
                            path: 'boardSetup',
                            name: 'boardSetup',
                            component: () => import('@/views/client/pages/userInfor/components/boardSetup.vue')
                        }
                    ]
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    component: () => import('@/views/client/pages/detail/index.vue')
                    // meta: {
                    //     middleware: [auth]
                    // }
                },
                {
                    path: '/client',
                    name: 'home',
                    component: () => import('@/views/client/pages/home/index.vue')
                    // meta: {
                    //     middleware: [auth]
                    // }
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: () => import('@/views/client/pages/cart/index.vue')
                    // meta: {
                    //     middleware: [auth]
                    // }
                },
                {
                    path: 'success',
                    name: 'success',
                    component: () => import('@/views/client/pages/userInfor/components/SuccessPage.vue')
                },
                {
                    path: 'order',
                    name: 'order',
                    component: () => import('@/views/client/pages/order/index.vue')
                },
                {
                    path: 'search-order',
                    name: 'SearchOrder',
                    component: () => import('@/views/client/pages/order/SearchOrder.vue')
                },
                {
                    path: 'check-out',
                    name: 'CheckOut',
                    component: () => import('@/views/client/pages/order/CheckOut.vue')
                    // meta: {
                    //     middleware: [auth]
                    // }
                },
                {
                    path: 'order-detail', 
                    name: 'OrderDetail', 
                    component: () => import('@/views/client/pages/order/OrderDetail.vue')
                },
                {
                    path: 'menu',
                    name: 'menu',
                    component: () => import('@/views/client/pages/categories/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/client/pages/login/index.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/pages/NotFound.vue')
        }
    ]
});

// function nextFactory(context, middleware, index) {
//     const subsequentMiddleware = middleware[index];
//     if (!subsequentMiddleware) return context.next;
//     return (...parameters) => {
//         context.next(...parameters);

//         const nextMiddleware = nextFactory(context, middleware, index + 1);
//         subsequentMiddleware({ ...context, next: nextMiddleware });
//     };
// }

// router.beforeEach((to, from, next) => {
//     if (to.meta.middleware) {
//         const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];

//         const context = {
//             from,
//             next,
//             router,
//             to
//         };
//         const nextMiddleware = nextFactory(context, middleware, 1);

//         return middleware[0]({ ...context, next: nextMiddleware });
//     }
//     return next();
// });

export default router;
