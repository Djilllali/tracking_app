export const baseUrl = "https://mohexpress.com";
export const signInUrl = baseUrl + "/api/users/signin";
export const profileUrl = baseUrl + "/api/users/profile";
export const categoriesUrl = baseUrl +"/api/products/categories";
export const uploadImageUrl = baseUrl +"/api/products/uploadfile";
export const addCategoryUrl = baseUrl +"/api/products/categories/addnew";
export const deleteCategoryUrl = baseUrl + "/api/products/categories/delete";
export const updateCategoryUrl = baseUrl + "/api/products/categories/update";
export const addProductUrl = baseUrl + "/api/products/addnew";
export const updateProductUrl = baseUrl + "/api/products/update_product";
export const deleteProductUrl = baseUrl + "/api/products/delete_product";
export const updateProductStatusUrl = baseUrl + "/api/products/update_product_status";
export const updateProductQuantityUrl = baseUrl + "/api/products/update_product_quantity";
export const getProductsUrl = baseUrl + "/api/products/products_list";
export const getUsersUrl = baseUrl + "/api/users/users_list2";
export const getProductUrl = baseUrl + "/api/products/product_item";

export const addLicenseUrl = baseUrl + "/api/products/add_license";
export const updateLicenseUrl = baseUrl + "/api/products/update_license";
export const deleteLicenseUrl = baseUrl + "/api/products/delete_license";
export const updateLicenseStatusUrl = baseUrl + "/api/products/update_license_status";
export const getLicensesUrl = baseUrl + "/api/products/licenses_list";
export const getOrdersUrl = baseUrl + "/api/products/purchases_list";
export const getTransactionsUrl = baseUrl + "/api/products/transactions_list";
export const getDepositsUrl = baseUrl + "/api/products/deposits_list";
export const getPaypalTransactionsUrl = baseUrl + "/api/products/paypal_transactions_list";


export const updateUserStatusUrl = baseUrl + "/api/users/update_user_status";
export const updateUserTypeUrl = baseUrl + "/api/users/update_user_type";
export const verifySellerUrl = baseUrl + "/api/users/verify_seller";
export const depositSumUrl = baseUrl + "/api/users/deposit_sum_with_currency";
export const deleteUserUrl = baseUrl + "/api/users/delete_user";
export const addAdminUrl = baseUrl + "/api/users/add_admin";
export const refundOrderUrl = baseUrl + "/api/products/refund_order";

export const getRedeemsUrl = baseUrl + "/api/products/get_redeem";
export const updateRedeemStatusUrl = baseUrl + "/api/products/update_redeem_status";
export const generateRedeemsUrl = baseUrl + "/api/products/generate_redeem";
export const getRedeemFilesUrl = baseUrl + "/api/products/get_redeem_files";
export const getRedeemsOfFileUrl = baseUrl + "/api/products/get_redeems_of_file";

export const getUserWalletUrl = baseUrl + "/api/v1/userWalletv2";


export const getUserWalletHistoryUrl = baseUrl + "/api/v1/wallethistory/points";

export const getRequestsUrl = baseUrl + "/api/products/get_products_requests";

export const handleRequestUrl = baseUrl + "/api/products/handle_product_request";

export const getStatsUrl = baseUrl + "/api/products/get_stats";

export const PRIMARY_COLOR = "#332295";

export const backgroundColors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(32, 99, 19, 0.2)",
    "rgba(150, 0, 190, 0.2)",
    "rgba(32, 180, 109, 0.2)",
    "rgba(50, 13, 200, 0.2)",
];

export const borderColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(32, 99, 19, 1)",
    "rgba(150, 0, 190, 1)",
    "rgba(32, 180, 109, 1)",
    "rgba(50, 13, 200, 1)",
];
export const getrelaypoint ="http://192.168.0.103:8000/tracking/admin_api/getRelayPoints"
export const TodoData=[{    
    seller_id: {
        type: 9999,
        ref: 'sellers',
        required: true,
        index: true
        },
    
    
    is_active: {
        type: true,
        },
    time_availability: [{ day: "Friday", time: { begin_time: "2020-08-30T10:20:27.415+00:00", end_time: "2020-08-30T10:20:27.415+00:00" } }],
    // In cube meters
    space_availability: 
    
    
    
    {
        type: 10,
        required: true
    },
    deliveries: [{
        delivery_id: {
            type: 9999,
            ref: 'deliveries',
            index: true,
        }
    }],
    earned: {
        type: 10
    },
    active_deliveries: [{
        package_id: {
            type: 9999,
            ref: 'packages',
            index: true
        },
        parcel_id: {
            type: 9999,
            ref: 'parcels',
            index: true
        }
    }],
    is_hub: {
        type: true
    },
    coordinates: {
        lat: {
            type: 1001,
            default: "36.7596435"
        },
        lng: {
            type: 1001,
            default: "2.9665422"
        }
    },
    wilaya:
    {
        type: 1001,
        index: true
    },
    address: {
        type: 1001,
        required: true,
        index: true
    }
    },
    {    
        seller_id: {
            type: 9999,
            ref: 'sellers',
            required: true,
            index: true
            },
        
        
        is_active: {
            type: true,
            },
        time_availability: [{ day: "Friday", time: { begin_time: "2020-08-30T10:20:27.415+00:00", end_time: "2020-08-30T10:20:27.415+00:00"} }],
        // In cube meters
        space_availability: {
            type: 10,
            required: true
        },
        deliveries: [{
            delivery_id: {
                type: 9999,
                ref: 'deliveries',
                index: true,
            }
        }],
        earned: {
            type: 10
        },
        active_deliveries: [{
            package_id: {
                type: 9999,
                ref: 'packages',
                index: true
            },
            parcel_id: {
                type: 9999,
                ref: 'parcels',
                index: true
            }
        }],
        is_hub: {
            type: true
        },
        coordinates: {
            lat: {
                type: 1001,
                default: "36.7596435"
            },
            lng: {
                type: 1001,
                default: "2.9665422"
            }
        },
        wilaya:
        {
            type: 1001,
            index: true
        },
        address: {
            type: 1001,
            required: true,
            index: true
        }
        }
    
    ]