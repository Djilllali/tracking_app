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

