import StaffModel from '../models/staffs.model.js'
import mongoose from 'mongoose'

// GET all staffs
const getStaffs = async (req, res) => {
    const staffs = await StaffModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(staffs)
}

// GET a single staff
const getStaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This staff does not exist' })
    }

    const staffs = await StaffModel.findById(id)

    if (!staffs) {
        return res.status(400).json({ error: "This staff doesn't exist" })
    }

    res.status(200).json(staffs)
}

// CREATE a new staff
const createStaff = async (req, res) => {
    const { firstName, lastName, email, phone, jobTitle, userStatus, shippingAddress, location, tenantId} = req.body

    // add doc to db
    try {
        const staff = await StaffModel.create({firstName, lastName, email, phone, jobTitle, userStatus, shippingAddress, location, tenantId })
        res.status(200).json(staff)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// DELETE an staff
const deleteStaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This staff does not exist' })
    }

    const staff = await StaffModel.findOneAndDelete({ _id: id })

    if (!staff) {
        return res.status(400).json({ error: "This staff doesn't exist" })
    }

    res.status(200).json(staff)
}

// UPDATE an staff

const updateStaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This staff does not exist' })
    }

    const staff = await StaffModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!staff) {
        return res.status(400).json({ error: "This staff doesn't exist" })
    }

    res.status(200).json(staff)
}

export {
    createStaff,
    getStaffs,
    getStaff,
    deleteStaff,
    updateStaff
}