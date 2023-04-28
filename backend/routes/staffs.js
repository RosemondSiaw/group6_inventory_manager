import express from "express"
import {
    createStaff,
    getStaffs,
    getStaff,
    deleteStaff,
    updateStaff
} from '../controllers/staffs.controller.js'

const router = express.Router() 

//GET all Staffs
router.get('/', getStaffs)

//GET a signle Staff
router.get('/:id', getStaff)

//POST a new Staff
router.post('/', createStaff)

//DELETE an Staff
router.delete('/:id', deleteStaff)

//UPDATE an Staff
router.patch('/:id', updateStaff)

export default router