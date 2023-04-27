import ItemModel from '../models/items.model.js'
import mongoose from 'mongoose'

// GET all items
const getItems = async (req, res) => {
    const items = await ItemModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(items)
}

// GET a single item
const getItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This item does not exist' })
    }

    const item = await ItemModel.findById(id)

    if (!item) {
        return res.status(400).json({ error: "This item doesn't exist" })
    }

    res.status(200).json(item)
}

// CREATE a new item
const createItem = async (req, res) => {
    const { name, barcode, category, costPerItem, daysPerReorder, description, dimensions, inventoryValue, location, manufacturer, reorderLevel, reorderQuantity, status, stockQuantity, tenantId, vendor, volume, weight } = req.body

    // add doc to db
    try {
        const item = await ItemModel.create({ name, barcode, category, costPerItem, daysPerReorder, description, dimensions, inventoryValue, location, manufacturer, reorderLevel, reorderQuantity, status, stockQuantity, tenantId, vendor, volume, weight })
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// DELETE an item
const deleteItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This item does not exist' })
    }

    const item = await ItemModel.findOneAndDelete({ _id: id })

    if (!item) {
        return res.status(400).json({ error: "This item doesn't exist" })
    }

    res.status(200).json(item)
}

// UPDATE an item

const updateItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This item does not exist' })
    }

    const item = await ItemModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!item) {
        return res.status(400).json({ error: "This item doesn't exist" })
    }

    res.status(200).json(item)
}

export {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}