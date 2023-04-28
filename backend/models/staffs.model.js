import mongoose from "mongoose"

const Schema = mongoose.Schema

const staffSchema = new Schema({
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
        required: false
    },
    shippingAddress: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    tenantId: {
        type: mongoose.ObjectId,
        required: true
    },
}, { timestamps: true })

export default mongoose.model('Staff', staffSchema)