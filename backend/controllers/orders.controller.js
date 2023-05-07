import OrderModel from '../models/orders.model.js'
import mongoose from 'mongoose'

// GET all orders
const getOrders = async (req, res) => {
    const Orders = await OrderModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(Orders)
}

// GET a single order
const getOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This order does not exist' })
    }

    const Orders = await OrderModel.findById(id)

    if (!Orders) {
        return res.status(400).json({ error: "This order doesn't exist" })
    }

    res.status(200).json(Orders)
}

// CREATE a new order
const createOrder = async (req, res) => {
    const { delivered, expectedDeliveryDate, shippingAddress, products, totalOrderValue, orderStatus, note, tenantId, userId, staffId, urgent } = req.body

    // add doc to db
    try {
        const Order = await OrderModel.create({ delivered, expectedDeliveryDate, shippingAddress, products, totalOrderValue, orderStatus, note, tenantId, userId, staffId, urgent })
        res.status(200).json(Order)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// DELETE an order
const deleteOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This order does not exist' })
    }

    const Order = await OrderModel.findOneAndDelete({ _id: id })

    if (!Order) {
        return res.status(400).json({ error: "This order doesn't exist" })
    }

    res.status(200).json(Order)
}

// UPDATE an order

const updateOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This order does not exist' })
    }

    const Order = await OrderModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!Order) {
        return res.status(400).json({ error: "This order doesn't exist" })
    }

    res.status(200).json(Order)
}

export {
    createOrder,
    getOrders,
    getOrder,
    deleteOrder,
    updateOrder
}