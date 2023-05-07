import express from "express"
import {
    createOrder,
    getOrders,
    getOrder,
    deleteOrder,
    updateOrder
} from '../controllers/orders.controller.js'

const router = express.Router() 

//GET all orders
router.get('/', getOrders)

//GET a single order
router.get('/:id', getOrder)

//POST a new order
router.post('/', createOrder)

//DELETE an order
router.delete('/:id', deleteOrder)

//UPDATE an order
router.patch('/:id', updateOrder)

export default router