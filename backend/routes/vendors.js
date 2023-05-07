import express from "express"
import {
    createVendor,
    getVendors,
    getVendor,
    deleteVendor,
    updateVendor
} from '../controllers/vendors.controller.js'

const router = express.Router()

//GET all vendors
router.get('/', getVendors)

//GET a signle vendor
router.get('/:id', getVendor)

//POST a new vendor
router.post('/', createVendor)

//DELETE an vendor
router.delete('/:id', deleteVendor)

//UPDATE an vendor
router.patch('/:id', updateVendor)

export default router