import UserModel from '../models/users.model.js'
import mongoose from 'mongoose'

// GET all Users
const getUsers = async (req, res) => {
    const Users = await UserModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(Users)
}

// GET a single User
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This User does not exist' })
    }

    const Users = await UserModel.findById(id)

    if (!Users) {
        return res.status(400).json({ error: "This User doesn't exist" })
    }

    res.status(200).json(Users)
}

// CREATE a new User
const createUser = async (req, res) => {
    const { firstName, lastName, email, phone, jobTitle, userStatus, userPermission, location, tenantId } = req.body

    // add doc to db
    try {
        const User = await UserModel.create({ firstName, lastName, email, phone, jobTitle, userStatus, userPermission, location, tenantId })
        res.status(200).json(User)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// DELETE an User
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This User does not exist' })
    }

    const User = await UserModel.findOneAndDelete({ _id: id })

    if (!User) {
        return res.status(400).json({ error: "This User doesn't exist" })
    }

    res.status(200).json(User)
}

// UPDATE an User

const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This User does not exist' })
    }

    const User = await UserModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!User) {
        return res.status(400).json({ error: "This User doesn't exist" })
    }

    res.status(200).json(User)
}

export {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}