import express from "express"
import {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} from '../controllers/users.controller.js'

const router = express.Router() 

//GET all Users
router.get('/', getUsers)

//GET a signle User
router.get('/:id', getUser)

//POST a new User
router.post('/', createUser)

//DELETE an User
router.delete('/:id', deleteUser)

//UPDATE an User
router.patch('/:id', updateUser)

export default router