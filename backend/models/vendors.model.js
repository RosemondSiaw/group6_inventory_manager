import mongoose from "mongoose"

const Schema = mongoose.Schema

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactPerson: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        }
    },
    paymentTerm: {
        type: String,
        required: true
    },
    billingAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    tenantId: {
        type: mongoose.ObjectId,
    },
}, { timestamps: true })

export default mongoose.model('Vendor', vendorSchema)