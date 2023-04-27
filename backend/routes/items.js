import express from "express"
import {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
} from '../controllers/items.controller.js'

const router = express.Router() 

//GET all items
router.get('/', getItems)

//GET a signle item
router.get('/:id', getItem)

//POST a new item
router.post('/', createItem)

//DELETE an item
router.delete('/:id', deleteItem)

//UPDATE an item
router.patch('/:id', updateItem)

export default router