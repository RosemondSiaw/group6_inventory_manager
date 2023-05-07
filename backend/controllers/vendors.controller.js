import VendorModel from '../models/vendors.model.js'
import mongoose from 'mongoose'

// GET all vendors
const getVendors = async (req, res) => {
    const Vendors = await VendorModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(Vendors)
}

// GET a single vendor
const getVendor = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This vendor does not exist' })
    }

    const Vendors = await VendorModel.findById(id)

    if (!Vendors) {
        return res.status(400).json({ error: "This vendor doesn't exist" })
    }

    res.status(200).json(Vendors)
}

// CREATE a new vendor
const createVendor = async (req, res) => {
    const { name, contactPerson, paymentTerm, billingAddress, status, tenantId } = req.body

    // add doc to db
    try {
        const Vendor = await VendorModel.create({ name, contactPerson, paymentTerm, billingAddress, status, tenantId })
        res.status(200).json(Vendor)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// DELETE an vendor
const deleteVendor = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This vendor does not exist' })
    }

    const Vendor = await VendorModel.findOneAndDelete({ _id: id })

    if (!Vendor) {
        return res.status(400).json({ error: "This vendor doesn't exist" })
    }

    res.status(200).json(Vendor)
}

// UPDATE an vendor

const updateVendor = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This vendor does not exist' })
    }

    const Vendor = await VendorModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!Vendor) {
        return res.status(400).json({ error: "This vendor doesn't exist" })
    }

    res.status(200).json(Vendor)
}

export {
    createVendor,
    getVendors,
    getVendor,
    deleteVendor,
    updateVendor
}