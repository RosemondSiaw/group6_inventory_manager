import mongoose from "mongoose"
const Schema = mongoose.Schema

const orderSchema = new Schema({
    delivered: { type: Date },
    expectedDeliveryDate: { type: Date },
    shippingAddress: {
        type: String,
        required: true
    },
    products: [{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalOrderValue: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    tenantId: {
        type: mongoose.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.ObjectId,
        required: true
    },
    staffId: {
        type: mongoose.ObjectId,
        required: true
    },
    urgent: {
        type: Boolean,
        required: false
    }
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)