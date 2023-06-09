import mongoose from "mongoose"

const Schema = mongoose.Schema

const staffSchema = new Schema({
    staffId: {
        type: String,
        required: true
    },
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
    phone: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    userStatus: {
        type: String,
    },
    shippingAddress: {
        type: String,
    },
    location: {
        type: String,
    },
    tenantId: {
        type: mongoose.ObjectId,
    },
}, { timestamps: true })

export default mongoose.model('Staff', staffSchema)