import mongoose from "mongoose"

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Item', itemSchema)