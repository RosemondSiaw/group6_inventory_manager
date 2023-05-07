import mongoose from "mongoose"

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    costPerItem: {
        type: Number,
        required: true
    },
    daysPerReorder: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
        unit: String,
    },
    inventoryValue: {
        Type: Number,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: false
    },
    reorderLevel: {
        type: Number,
        required: false
    },
    reorderQuantity: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    tenantId: {
        type: mongoose.ObjectId,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    volume: {
        metric: {
            type: String,
        },
        volumeNum: {
            type: Number,
        }
    },
    weight: {
        unit: {
            type: String,
            required: false
        },
        weightNum: {
            type: Number,
            required: false
        }
    }
}, { timestamps: true })

export default mongoose.model('Item', itemSchema)